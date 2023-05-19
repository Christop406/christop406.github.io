import { createContext } from 'react';

export interface NavigationContextItem {
  name: string;
  path: string;
}

export const NavigationContext = createContext<NavigationContextItem[]>([]);
