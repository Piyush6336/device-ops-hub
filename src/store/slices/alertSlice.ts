
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Alert {
  id: string;
  deviceId: string;
  deviceName: string;
  facilityName: string;
  type: 'Critical' | 'Warning' | 'Info';
  message: string;
  timestamp: string;
  resolved: boolean;
  photos: string[];
}

interface AlertState {
  alerts: Alert[];
  loading: boolean;
}

const initialState: AlertState = {
  alerts: [
    {
      id: 'ALT001',
      deviceId: 'DEV003',
      deviceName: 'UltraSound Plus',
      facilityName: 'City General Hospital',
      type: 'Critical',
      message: 'Device offline - No power detected',
      timestamp: '2024-06-25T10:30:00Z',
      resolved: false,
      photos: []
    },
    {
      id: 'ALT002',
      deviceId: 'DEV002',
      deviceName: 'HealthTrack 5000',
      facilityName: 'Metro Medical Center',
      type: 'Warning',
      message: 'Battery level below 50%',
      timestamp: '2024-06-24T14:15:00Z',
      resolved: false,
      photos: []
    }
  ],
  loading: false,
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state, action: PayloadAction<Alert[]>) => {
      state.alerts = action.payload;
    },
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.push(action.payload);
    },
    resolveAlert: (state, action: PayloadAction<string>) => {
      const alert = state.alerts.find(alert => alert.id === action.payload);
      if (alert) {
        alert.resolved = true;
      }
    },
  },
});

export const { setAlerts, addAlert, resolveAlert } = alertSlice.actions;
export default alertSlice.reducer;
