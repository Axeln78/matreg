import React from 'react';
import { fetchBuildingPassport } from '#/lib/getBuildingPassport';
import { fetchBuildingSidepanel } from '#/lib/getView';

export default async function Page({ params }) {
  const sidepanel = await fetchBuildingSidepanel();
  const buildingPassport = await fetchBuildingPassport(params.id);
  const mode = params.mode;

  const panel = sidepanel.find((panel) => panel.id === mode)?.subGroups;
  console.log(panel);
  if (!panel) {
    return <> </>;
  }

  return panel?.map((group) => (
    <div key={group.id}>
      <h3>{group.name}</h3>

      {group.items.map(
        (item) => 
          buildingPassport[item.id] && (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>
                <span>{buildingPassport[item.id]}</span>
                <span>{item.units}</span>
              </p>
              {/* <p>{buildingPassport[item.id]}</p> */}
            </div>
          )
      )}
    </div>
  ));
}
