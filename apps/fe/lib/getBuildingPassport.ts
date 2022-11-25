import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

const getBuildingPassports = cache(() => [
  {
    name: 'Building 1',
    id: '12',
    address: 'Building A Singleton Park, Sketty, Swansea SA2 8PP',
    projectName: 'Swansea X',
    speckle: {
      streamId: '123',
      branch: 'main',
    },
    totalGFA: 1800,
    floors: 6,
    mainUse: 'Office',
    completion: '2022-01-01',
    phase: 'Use',
    embodiedCarbon: 620,
    totalMaterials: 6789,
    buildCost: 2200,
    energyUseIntensity: 100,
    reusePercentage: 100,
    airQuality: 100,
  },
  {
    name: 'Building 2',
    id: '13',
    address: 'Building A Singleton Park, Sketty, Swansea SA2 8PP',
    projectName: 'Swansea X',
    speckle: {
      streamId: '123',
      branch: 'main',
    },
    totalGFA: 1800,
    floors: 6,
    mainUse: 'Office',
    completion: '2022-01-01',
    phase: 'Use',
    embodiedCarbon: 620,
    totalMaterials: 6789,
    buildCost: 2200,
    energyUseIntensity: 100,
    reusePercentage: 100,
    airQuality: 100,
  },
]);

export async function fetchBuildingPassports() {
  return getBuildingPassports();
}

export async function fetchBuildingPassport(buildingId: string | undefined) {
  const buildingPassports = await fetchBuildingPassports();
  return buildingPassports?.find((building) => building.id === buildingId);
}
