
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

const Header = () => {
  const devices = useAppSelector(state => state.devices.devices);
  const alerts = useAppSelector(state => state.alerts.alerts);
  
  const onlineDevices = devices.filter(d => d.status === 'Online').length;
  const criticalAlerts = alerts.filter(a => a.type === 'Critical' && !a.resolved).length;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">
          Device Management Dashboard
        </h2>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{onlineDevices}</div>
              <div className="text-sm text-gray-600">Online Devices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{criticalAlerts}</div>
              <div className="text-sm text-gray-600">Critical Alerts</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AD</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-700">Admin User</div>
              <div className="text-xs text-gray-500">System Administrator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
