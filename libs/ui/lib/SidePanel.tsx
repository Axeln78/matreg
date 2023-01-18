import React from 'react';

export default function SidePanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute right-1 top-2 w-[480px] z-10 ">
      <div className="bg-white rounded-lg pb-1 shadow-xl">
        {children}
        {/* <Header title={props.name} details={props.description} />

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
         */}
      </div>
    </div>
  );
}
