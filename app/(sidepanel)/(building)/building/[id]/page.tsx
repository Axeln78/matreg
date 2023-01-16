import {
  BuildingMetrics,
  PhaseDisplayer,
  ProjectInfoList,
  VisualProjectInfo,
} from '@matr/ui';
import React from 'react';

export default function Page() {
  return (
    <>
      <ProjectInfoList />
      <VisualProjectInfo />
      <PhaseDisplayer stage={4} />
      <BuildingMetrics />
    </>
  );
}
