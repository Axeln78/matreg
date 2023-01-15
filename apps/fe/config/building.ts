type NavItem = {
  name: string;
  id: string;
  description?: string;
  icon?: string;
};

type BuildingConfig = NavItem[];

export const buildingConfig: BuildingConfig = [
  {
    name: 'Overview',
    id: 'overview',
    description: 'Overview',
  },
  {
    name: 'Metrics',
    id: 'metrics',
    description: 'Metricks',
  },
  {
    name: 'Inventory',
    id: 'inventory',
  },
];
