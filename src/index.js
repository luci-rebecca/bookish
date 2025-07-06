import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import App from './App';
const queryClient = new QueryClient()

const root = createRoot(document.getElementsByTagName('body')[0]);
root.render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);