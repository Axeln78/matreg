import React from 'react';
import { MenuSelector, PanelHeader } from '@matr/ui';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ViewerPreview from '@matr/canvas/lib/ViewerPreview';
import { buildingConfig } from '@matr/config/building';

export async function generateStaticParams() {
  const buildimngs = ['revit'];

  return buildimngs.map((buildimngs) => ({
    id: buildimngs,
  }));
}

export default function ElementLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string; elementId: string };
}) {
  return (
    <div className='m-2'>
      <PanelHeader title={params.id} details={params.id} />
      <MenuSelector
        tabs={buildingConfig}
        path={'/building' + '/' + params.id}
      />
      <div>{children}</div>
    </div>
  );
}
