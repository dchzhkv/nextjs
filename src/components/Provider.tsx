'use client'

import { FC, ReactNode } from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

interface ProviderProps {
  children: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return <>
    {children}
    <Next13ProgressBar height="3px" color="#0A2FFF" options={{ showSpinner: false }} showOnShallow />
  </>
}

export default Provider;