
import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import DeviceCard from '../components/dashboard/DeviceCard';
import StatsCard from '../components/dashboard/StatsCard';
import { Activity, Settings, AlertTriangle, FileText, Calendar } from 'lucide-react';

const Dashboard = () => {
  const devices = useAppSelector(state => state.devices.devices);
  const alerts = useAppSelector(state => state.alerts.alerts);
  const contracts = useAppSelector(state => state.contracts.contracts);
  const serviceVisits = useAppSelector(state => state.services.visits);

  const onlineDevices = devices.filter(d => d.status === 'Online').length;
  const offlineDevices = devices.filter(d => d.status === 'Offline').length;
  const maintenanceDevices = devices.filter(d => d.status === 'Maintenance').length;
  const criticalAlerts = alerts.filter(a => a.type === 'Critical' && !a.resolved).length;
  const expiringContracts = contracts.filter(c => c.status === 'Expiring Soon').length;
  const upcomingVisits = serviceVisits.filter(v => v.status === 'Scheduled').length;

  const recentDevices = devices.slice(0, 6);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Monitor your medical device inventory and operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <StatsCard
          title="Online Devices"
          value={onlineDevices}
          icon={Activity}
          color="green"
        />
        <StatsCard
          title="Offline Devices"
          value={offlineDevices}
          icon={Settings}
          color="red"
        />
        <StatsCard
          title="Maintenance"
          value={maintenanceDevices}
          icon={Settings}
          color="yellow"
        />
        <StatsCard
          title="Critical Alerts"
          value={criticalAlerts}
          icon={AlertTriangle}
          color="red"
        />
        <StatsCard
          title="Expiring Contracts"
          value={expiringContracts}
          icon={FileText}
          color="yellow"
        />
        <StatsCard
          title="Scheduled Visits"
          value={upcomingVisits}
          icon={Calendar}
          color="blue"
        />
      </div>

      {/* Recent Devices */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recent Devices</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentDevices.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              onClick={() => console.log('Device clicked:', device.id)}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors">
            <Settings className="mx-auto mb-2 text-blue-600" size={24} />
            <span className="text-sm font-medium text-blue-600">Add Device</span>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors">
            <Calendar className="mx-auto mb-2 text-green-600" size={24} />
            <span className="text-sm font-medium text-green-600">Schedule Visit</span>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors">
            <FileText className="mx-auto mb-2 text-purple-600" size={24} />
            <span className="text-sm font-medium text-purple-600">Generate Report</span>
          </button>
          <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors">
            <AlertTriangle className="mx-auto mb-2 text-orange-600" size={24} />
            <span className="text-sm font-medium text-orange-600">View Alerts</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
