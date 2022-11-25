import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

export type Modes = {
  name: string;
  id: string;
};

const getBuildingModes = cache((): Modes[] => [
  {
    name: 'Overview',
    id: 'overview',
  },
  {
    name: 'Metrics',
    id: 'metrics',
  },
  {
    name: 'Inventory',
    id: 'inventory',
  },
]);

export async function fetchBuildingModes(): Promise<Modes[]> {
  return getBuildingModes();
}

const getElementModes = cache((): Modes[] => [
  {
    name: 'Overview',
    id: 'overview',
  },
  {
    name: 'Metrics',
    id: 'metrics',
  },
  {
    name: 'Financials',
    id: 'financials',
  },
  {
    name: 'Logs',
    id: 'logs',
  },
]);

export async function fetchElementsModes(): Promise<Modes[]> {
  return getElementModes();
}
