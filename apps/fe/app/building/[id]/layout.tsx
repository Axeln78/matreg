import React from 'react';
import { fetchBuildingModes } from '#/lib/getModes';
import { TabGroup } from '#/ui/TabGroup';
import { fetchBuildingPassport } from '#/lib/getBuildingPassport';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const modes = await fetchBuildingModes();
  const building = await fetchBuildingPassport(params.id);

  return (
    <div>
      <h1>{building?.name}</h1>
      <h2>{building?.id}</h2>
      <TabGroup path={`building/${params.id}`} modes={modes} />

      {children}
    </div>
  );
}
