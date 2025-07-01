
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Device {
  id: string;
  type: string;
  model: string;
  serialNumber: string;
  facilityId: string;
  facilityName: string;
  status: 'Online' | 'Offline' | 'Maintenance';
  batteryLevel: number;
  lastServiceDate: string;
  installationDate: string;
  amcStatus: 'Active' | 'Expired' | 'Expiring Soon';
  amcExpiryDate: string;
  location: string;
  engineerAssigned?: string;
}

interface DeviceState {
  devices: Device[];
  loading: boolean;
  selectedDevice: Device | null;
}

const initialState: DeviceState = {
  devices: [
    {
      id: 'DEV001',
      type: 'Ventilator',
      model: 'VentMax Pro',
      serialNumber: 'VM2024001',
      facilityId: 'FAC001',
      facilityName: 'City General Hospital',
      status: 'Online',
      batteryLevel: 85,
      lastServiceDate: '2024-06-15',
      installationDate: '2024-01-10',
      amcStatus: 'Active',
      amcExpiryDate: '2024-12-31',
      location: 'ICU Ward 1',
      engineerAssigned: 'John Smith'
    },
    {
      id: 'DEV002',
      type: 'Patient Monitor',
      model: 'HealthTrack 5000',
      serialNumber: 'HT5000002',
      facilityId: 'FAC002',
      facilityName: 'Metro Medical Center',
      status: 'Maintenance',
      batteryLevel: 45,
      lastServiceDate: '2024-06-01',
      installationDate: '2024-02-20',
      amcStatus: 'Expiring Soon',
      amcExpiryDate: '2024-08-15',
      location: 'Emergency Room',
      engineerAssigned: 'Sarah Johnson'
    },
    {
      id: 'DEV003',
      type: 'Ultrasound',
      model: 'UltraSound Plus',
      serialNumber: 'USP2024003',
      facilityId: 'FAC001',
      facilityName: 'City General Hospital',
      status: 'Offline',
      batteryLevel: 0,
      lastServiceDate: '2024-05-20',
      installationDate: '2024-03-05',
      amcStatus: 'Expired',
      amcExpiryDate: '2024-07-01',
      location: 'Radiology Department'
    }
  ],
  loading: false,
  selectedDevice: null,
};

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
    },
    addDevice: (state, action: PayloadAction<Device>) => {
      state.devices.push(action.payload);
    },
    updateDevice: (state, action: PayloadAction<Device>) => {
      const index = state.devices.findIndex(device => device.id === action.payload.id);
      if (index !== -1) {
        state.devices[index] = action.payload;
      }
    },
    deleteDevice: (state, action: PayloadAction<string>) => {
      state.devices = state.devices.filter(device => device.id !== action.payload);
    },
    setSelectedDevice: (state, action: PayloadAction<Device | null>) => {
      state.selectedDevice = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setDevices, addDevice, updateDevice, deleteDevice, setSelectedDevice, setLoading } = deviceSlice.actions;
export default deviceSlice.reducer;
