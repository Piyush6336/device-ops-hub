
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Contract {
  id: string;
  deviceId: string;
  deviceName: string;
  facilityName: string;
  type: 'AMC' | 'CMC';
  startDate: string;
  endDate: string;
  status: 'Active' | 'Expired' | 'Expiring Soon';
  value: number;
  renewalReminder: boolean;
}

interface ContractState {
  contracts: Contract[];
  loading: boolean;
}

const initialState: ContractState = {
  contracts: [
    {
      id: 'CON001',
      deviceId: 'DEV001',
      deviceName: 'VentMax Pro',
      facilityName: 'City General Hospital',
      type: 'AMC',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'Active',
      value: 15000,
      renewalReminder: true
    },
    {
      id: 'CON002',
      deviceId: 'DEV002',
      deviceName: 'HealthTrack 5000',
      facilityName: 'Metro Medical Center',
      type: 'CMC',
      startDate: '2024-02-15',
      endDate: '2024-08-15',
      status: 'Expiring Soon',
      value: 8000,
      renewalReminder: true
    }
  ],
  loading: false,
};

const contractSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setContracts: (state, action: PayloadAction<Contract[]>) => {
      state.contracts = action.payload;
    },
    addContract: (state, action: PayloadAction<Contract>) => {
      state.contracts.push(action.payload);
    },
    updateContract: (state, action: PayloadAction<Contract>) => {
      const index = state.contracts.findIndex(contract => contract.id === action.payload.id);
      if (index !== -1) {
        state.contracts[index] = action.payload;
      }
    },
  },
});

export const { setContracts, addContract, updateContract } = contractSlice.actions;
export default contractSlice.reducer;
