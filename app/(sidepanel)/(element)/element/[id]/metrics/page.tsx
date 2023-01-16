import { CircularityBarChart, EnvironmentalImpactTable } from '@matr/ui';
import React from 'react';

export default function Page() {
  return (
    <>
      <CircularityBarChart data={[20, 18, 80, 90]} />
      <EnvironmentalImpactTable />
    </>
  );
}
