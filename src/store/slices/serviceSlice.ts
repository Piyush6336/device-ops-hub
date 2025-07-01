
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ServiceVisit {
  id: string;
  deviceId: string;
  deviceName: string;
  facilityName: string;
  date: string;
  engineer: string;
  purpose: 'Preventive' | 'Breakdown' | 'Installation' | 'Training';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  notes: string;
  photos: string[];
  attachments: string[];
}

interface ServiceState {
  visits: ServiceVisit[];
  loading: boolean;
}

const initialState: ServiceState = {
  visits: [
    {
      id: 'SV001',
      deviceId: 'DEV001',
      deviceName: 'VentMax Pro',
      facilityName: 'City General Hospital',
      date: '2024-06-15',
      engineer: 'John Smith',
      purpose: 'Preventive',
      status: 'Completed',
      notes: 'Regular maintenance completed. All systems functioning normally.',
      photos: [],
      attachments: []
    },
    {
      id: 'SV002',
      deviceId: 'DEV002',
      deviceName: 'HealthTrack 5000',
      facilityName: 'Metro Medical Center',
      date: '2024-06-20',
      engineer: 'Sarah Johnson',
      purpose: 'Breakdown',
      status: 'In Progress',
      notes: 'Display unit replacement in progress.',
      photos: [],
      attachments: []
    }
  ],
  loading: false,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServiceVisits: (state, action: PayloadAction<ServiceVisit[]>) => {
      state.visits = action.payload;
    },
    addServiceVisit: (state, action: PayloadAction<ServiceVisit>) => {
      state.visits.push(action.payload);
    },
    updateServiceVisit: (state, action: PayloadAction<ServiceVisit>) => {
      const index = state.visits.findIndex(visit => visit.id === action.payload.id);
      if (index !== -1) {
        state.visits[index] = action.payload;
      }
    },
  },
});

export const { setServiceVisits, addServiceVisit, updateServiceVisit } = serviceSlice.actions;
export default serviceSlice.reducer;
