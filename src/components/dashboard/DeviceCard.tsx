
import React from 'react';
import { Device } from '../../store/slices/deviceSlice';
import StatusBadge from '../common/StatusBadge';
import { Calendar, MapPin, Battery, User } from 'lucide-react';

interface DeviceCardProps {
  device: Device;
  onClick?: () => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onClick }) => {
  const getBatteryColor = (level: number) => {
    if (level > 50) return 'text-green-600';
    if (level > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{device.type}</h3>
          <p className="text-sm text-gray-600">{device.model}</p>
          <p className="text-xs text-gray-500">ID: {device.id}</p>
        </div>
        <StatusBadge status={device.status} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{device.facilityName}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Battery size={16} className={getBatteryColor(device.batteryLevel)} />
          <span className={getBatteryColor(device.batteryLevel)}>
            {device.batteryLevel}% Battery
          </span>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Last Service: {new Date(device.lastServiceDate).toLocaleDateString()}</span>
        </div>

        {device.engineerAssigned && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <User size={16} />
            <span>{device.engineerAssigned}</span>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">AMC Status</span>
            <StatusBadge status={device.amcStatus} variant="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
