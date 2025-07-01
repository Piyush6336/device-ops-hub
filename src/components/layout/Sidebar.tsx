
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Activity, 
  Settings, 
  FileText, 
  Calendar, 
  AlertTriangle,
  Image
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: Activity },
    { path: '/devices', label: 'Device Inventory', icon: Settings },
    { path: '/installations', label: 'Installations', icon: FileText },
    { path: '/service-visits', label: 'Service Visits', icon: Calendar },
    { path: '/contracts', label: 'AMC/CMC Tracker', icon: FileText },
    { path: '/alerts', label: 'Alerts', icon: AlertTriangle },
    { path: '/photo-logs', label: 'Photo Logs', icon: Image },
  ];

  return (
    <div className="bg-slate-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-blue-400">MedDevice CRM</h1>
        <p className="text-sm text-slate-400">Inventory Management</p>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
