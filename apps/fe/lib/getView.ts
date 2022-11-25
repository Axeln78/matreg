import { cache } from 'react';

const getBuildingSidepanel = cache(() => [
  {
    id: 'overview',
    name: 'Overview',
    icon: 'overview',
    path: '/overview',
    subGroups: [
      {
        name: 'General',
        id: 'general',
        type: 'list',
        items: [
          {
            name: 'Address',
            id: 'address',
          },
          {
            name: 'Project',
            id: 'projectName',
          },
        ],
      },
      {
        name: '',
        id: 'general_2',
        type: 'cards',
        items: [
          {
            name: 'Total GFA',
            id: 'totalGFA',
            units: 'm2',
            icon: 'totalGFA',
          },
          {
            name: 'Floors',
            id: 'floors',
            icon: 'floors',
          },
          {
            name: 'Main Use',
            id: 'mainUse',
            icon: 'mainUse',
          },
          {
            name: 'Completion',
            id: 'completion',
            icon: 'completion',
          },
        ],
      },
      {
        name: 'Phase',
        id: 'phase',
        type: 'timeline',
        items: [{ name: 'Phase', id: 'phase' }],
      },
      {
        name: 'Building Metrics',
        id: 'buildingMetrics',
        type: 'metricCards',
        items: [
          {
            name: 'Embodied Carbon',
            id: 'embodiedCarbon',
            units: 'kgCO2e',
            icon: 'embodiedCarbon',
            path: 'metrics/embodiedCarbon',
          },
          {
            name: 'Total Materials',
            id: 'totalMaterials',
            units: 'tones',
            icon: 'totalMaterials',
            path: 'metrics/totalMaterials',
          },
          {
            name: 'Build Cost',
            id: 'buildCost',
            units: '£/m2',
            icon: 'buildCost',
            path: 'metrics/buildCost',
          },
          {
            name: 'Energy Use Intensity',
            id: 'energyUseIntensity',
            units: 'kWh/m2',
            icon: 'energyUseIntensity',
            path: 'metrics/energyUseIntensity',
          },
          {
            name: 'Reuse Percentage',
            id: 'reusePercentage',
            units: '%',
            icon: 'reusePercentage',
            path: 'metrics/reusePercentage',
          },
          {
            name: 'Air Quality',
            id: 'airQuality',
            units: 'ppm',
            icon: 'airQuality',
            path: 'metrics/airQuality',
          },
        ],
      },
    ],
  },
  {
    id: 'metrics',
    name: 'Metrics',
    icon: 'metrics',
    path: '/metrics',
    subGroups: [
      {
        name: '',
        id: 'buildingMetrics',
        type: 'cards',
        items: [
          {
            name: 'Embodied Carbon',
            id: 'embodiedCarbon',
            units: 'kgCO2e',
            icon: 'embodiedCarbon',
            path: 'metrics/embodiedCarbon',
          },
          {
            name: 'Total Materials',
            id: 'totalMaterials',
            units: 'tones',
            icon: 'totalMaterials',
            path: 'metrics/totalMaterials',
          },
          {
            name: 'Build Cost',
            id: 'buildCost',
            units: '£/m2',
            icon: 'buildCost',
            path: 'metrics/buildCost',
          },
        ],
      },
    ],
  },
]);

export async function fetchBuildingSidepanel() {
  return getBuildingSidepanel();
}
