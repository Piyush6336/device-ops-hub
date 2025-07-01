
import { configureStore } from '@reduxjs/toolkit';
import deviceSlice from './slices/deviceSlice';
import facilitySlice from './slices/facilitySlice';
import serviceSlice from './slices/serviceSlice';
import contractSlice from './slices/contractSlice';
import alertSlice from './slices/alertSlice';

export const store = configureStore({
  reducer: {
    devices: deviceSlice,
    facilities: facilitySlice,
    services: serviceSlice,
    contracts: contractSlice,
    alerts: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
