type NavItem = {
  name: string;
  id: string;
  description?: string;
  icon?: string;
};

type ElementConfig = NavItem[];

export const elementConfig: ElementConfig = [
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
    name: 'Financial',
    id: 'financial',
  },
  {
    name: 'Log',
    id: 'log',
  },
];
