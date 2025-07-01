
import React from 'react';

interface StatusBadgeProps {
  status: 'Online' | 'Offline' | 'Maintenance' | 'Active' | 'Expired' | 'Expiring Soon' | 'Critical' | 'Warning' | 'Info';
  variant?: 'default' | 'small';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, variant = 'default' }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Online':
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Offline':
      case 'Expired':
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Maintenance':
      case 'Expiring Soon':
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Info':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const sizeClasses = variant === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${getStatusColor(status)} ${sizeClasses}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
