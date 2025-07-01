
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Facility {
  id: string;
  name: string;
  address: string;
  contactPerson: string;
  phone: string;
  email: string;
  type: 'Hospital' | 'Clinic' | 'Diagnostic Center';
  deviceCount: number;
}

interface FacilityState {
  facilities: Facility[];
  loading: boolean;
}

const initialState: FacilityState = {
  facilities: [
    {
      id: 'FAC001',
      name: 'City General Hospital',
      address: '123 Medical Center Dr, Healthcare City',
      contactPerson: 'Dr. Michael Brown',
      phone: '+1-555-0123',
      email: 'contact@citygeneral.com',
      type: 'Hospital',
      deviceCount: 15
    },
    {
      id: 'FAC002',
      name: 'Metro Medical Center',
      address: '456 Health Plaza, Metro District',
      contactPerson: 'Dr. Lisa Wilson',
      phone: '+1-555-0456',
      email: 'info@metromedical.com',
      type: 'Hospital',
      deviceCount: 8
    }
  ],
  loading: false,
};

const facilitySlice = createSlice({
  name: 'facilities',
  initialState,
  reducers: {
    setFacilities: (state, action: PayloadAction<Facility[]>) => {
      state.facilities = action.payload;
    },
    addFacility: (state, action: PayloadAction<Facility>) => {
      state.facilities.push(action.payload);
    },
    updateFacility: (state, action: PayloadAction<Facility>) => {
      const index = state.facilities.findIndex(facility => facility.id === action.payload.id);
      if (index !== -1) {
        state.facilities[index] = action.payload;
      }
    },
  },
});

export const { setFacilities, addFacility, updateFacility } = facilitySlice.actions;
export default facilitySlice.reducer;
