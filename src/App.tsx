
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import DeviceInventory from './pages/DeviceInventory';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/devices" element={<DeviceInventory />} />
                  <Route path="/installations" element={<div className="p-6"><h1 className="text-2xl font-bold">Installations & Training - Coming Soon</h1></div>} />
                  <Route path="/service-visits" element={<div className="p-6"><h1 className="text-2xl font-bold">Service Visits - Coming Soon</h1></div>} />
                  <Route path="/contracts" element={<div className="p-6"><h1 className="text-2xl font-bold">AMC/CMC Tracker - Coming Soon</h1></div>} />
                  <Route path="/alerts" element={<div className="p-6"><h1 className="text-2xl font-bold">Alerts - Coming Soon</h1></div>} />
                  <Route path="/photo-logs" element={<div className="p-6"><h1 className="text-2xl font-bold">Photo Logs - Coming Soon</h1></div>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
