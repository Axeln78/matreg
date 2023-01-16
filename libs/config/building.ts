type NavItem = {
  name: string;
  id?: string;
  description?: string;
  icon?: string;
};

type BuildingConfig = NavItem[];

export const buildingConfig: BuildingConfig = [
  {
    name: 'Overview',
    description: 'Overview',
  },
  {
    name: 'Impact',
    id: 'impact',
    description: 'Impact',
  },
  {
    name: 'Inventory',
    id: 'inventory',
  },
];
