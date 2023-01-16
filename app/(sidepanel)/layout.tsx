'use client';

import React from 'react';
import Viewer from '@matr/canvas/lib/Viewer';
import RecoilRouter from '@matr/common/RecoilRouter';
import { RootRecoil } from 'app/(sidepanel)/RootRecoil';
import SearchBar from '@matr/ui/lib/SearchBar';
import SidePanel from '@matr/ui/lib/SidePanel';
import './styles.css';

const project = {
  name: 'Revit Sample',
  description: 'Revit Sample',
  id: 'revit',
  buildings: [
    {
      name: 'Revit Sample',
      description: 'Revit Sample',
      id: 'revit',
      speckleObjects: [
        {
          server: 'https://speckle.xyz',
          streamId: 'da9e320dad',
          objectId: '31d10c0cea569a1e26809658ed27e281',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootRecoil>
          <SearchBar />
          <SidePanel>{children}</SidePanel>
          <div className="absolute w-screen h-screen">
            <Viewer
              speckleObjects={project.buildings.flatMap(
                (b) => b.speckleObjects
              )}
            />
          </div>

          {/* <div className="flex flex-col items-left px-2 overflow-auto">
              {preSelectedObjects &&
                !selected &&
                preSelectedObjects.map((obj) => (
                  <div
                    key={obj?.id}
                    onPointerEnter={() => setHovered(obj?.id)}
                    onPointerLeave={() => setHovered(null)}
                    onClick={() => setSelected(obj?.id)}
                    className="flex rounded-full hover:bg-gray-200 text-sm font-medium p-2"
                  >
                    <div>{obj?.family}</div>
                  </div>
                ))}
            </div>
          </div>

          <div className=" absolute right-1 top-2 w-[480px] z-10 ">
            <div className="bg-white rounded-lg pb-1 shadow-xl">
              <Header title={props.name} details={props.description} />

              {selected && (
                <>
                  <div className=" items-center justify-between ">
                    <button
                      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 "
                      onClick={() => setSelected(null)}
                    >
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <ViewerPreview />
                </>
              )}

              <MenuSelector tabs={menuTabs} callback={setSelectedTab} />
              <div className="m-3">
                {!selected && (
                  <>
                    {selectedTab.name === 'Overview' && (
                      <>
                        <ProjectInfoList />
                        <VisualProjectInfo />
                        <PhaseDisplayer stage={4} />
                        <BuildingMetrics callback={selectBuildingMetric} />
                      </>
                    )}
                    {selectedTab.name === 'Impact' && (
                      <>
                        <RadioBuildingMetrics />
                        <MaterialsTreeMap />
                      </>
                    )}
                    {selectedTab.name === 'Inventory' && <BuildingTable />}
                  </>
                )}

                {selected && (
                  <>
                    {selectedTab.name === 'Overview' && (
                      <>
                        <ElementInfoList />
                        <MaterialsComposition />
                      </>
                    )}
                    {selectedTab.name === 'Metrics' && (
                      <>
                        <CircularityBarChart data={[20, 18, 80, 90]} />
                        <EnvironmentalImpactTable />
                      </>
                    )}
                    {selectedTab.name === 'Financial' && (
                      <>
                        <FinancialProjection />
                      </>
                    )}
                    {selectedTab.name === 'Log' && <LogPage />}
                  </>
                )}
              </div>
            </div>
          </div>

 */}
        </RootRecoil>
      </body>
    </html>
  );
}
