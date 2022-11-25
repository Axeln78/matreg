import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

const getElementPassports = cache(() => [
  {
    name: 'Window',
    id: '12',
    description: 'Triple glazed aluminium window',
    manufacturer: 'Velux',
    manufactureDate: '2020-01-01',
    floorName: '1',
    zone: 'Zone 1',
    room: 'Room 1',
    type: 'window',
    materials: [
      {
        name: 'Aluminium',
        mass: 12.6,
      },
      {
        name: 'Glass',
        mass: 8.1,
      },
      {
        name: 'Plastic',
        mass: 1.8,
      },
    ],
    height: 1000,
    width: 1000,
    depth: 100,
    mass: 100,
    a1a3: 11.2,
    reused: 0.2,
    recycled: 0.08,
    reusable: 0.8,
    recyclable: 0.9,
    originalCost: 456.0,
    currentCost: 323.0,
    guides: [
      {
        name: 'Disassembly Guide',
        url: 'https://www.google.com',
      },
      {
        name: 'Repair Guide',
        url: 'https://www.google.com',
      },
    ],
  },
]);

export async function fetchElementPassports() {
  return getElementPassports();
}

export async function fetchElementPassport(elementId: string | undefined) {
  const buildingPassports = await fetchElementPassports();
  return buildingPassports?.find((element) => element.id === elementId);
}
