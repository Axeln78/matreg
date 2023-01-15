'use client';
// index page

import React, { useEffect } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import Viewer from 'containers/Viewer';
import ViewerPreview from 'containers/ViewerPreview';
import { useRecoilState } from 'recoil';
import { atoms } from 'common/recoil';
import { BuildingElementData, H1 } from 'containers/BuildingElementData';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import { SpeckleObject } from 'containers/Viewer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// viewer vindow top right corner panel
const Panel = styled.div`
    position: flex;
    width: 480px;
    // margin for last child div

    border: 3px solid #ffffff;

    border-radius: 20px;
    background-color: white;
    z-index: 100;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.1));
  `,
  SidePanel = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 16px;
    right: 16px;
    gap: 16px;
    width: 480px;
    z-index: 100;
  `,
  PanelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 10px;
  `,
  PanelTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  `,
  PanelContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
  `,
  CloseButton = styled.button`
    all: unset;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
  SearchBar = styled.input`
    all: unset;
    padding: 0 20px;
    border-radius: 20px;
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    ::placeholder {
      color: #9ca3af;
    }
  `;

export default function Index() {
  const [selected, setSelected] = useRecoilState(atoms.selectedObjectId);
  const [selectedObject, setSelectedObject] = useRecoilState(
    atoms.selectedObject
  );
  const [hovered, setHovered] = useRecoilState(atoms.hoveredObjectId);
  const [search, setSearch] = useRecoilState(atoms.searchString);
  const [preSelectedObjects, setPreSelectedObjects] = useRecoilState(
    atoms.preSelectedObjects
  );

  const speckleObjects: SpeckleObject[] = [
    {
      server: 'https://speckle.xyz',
      streamId: '92681d64c6',
      objectId: 'fc24d43a58e94d6251416877435d3a67',
    },
  ];

  return (
    <Wrapper>
      <SidePanel>
        <Panel>
          <SearchBar
            placeholder="Search by Component Name or Unique ID"
            onChange={(e) => (setSearch(e.target.value), setSelected(null))}
          />
        </Panel>
        {preSelectedObjects &&
          !selected &&
          preSelectedObjects.map((obj) => (
            <Panel
              key={obj?.id}
              onPointerEnter={() => setHovered(obj?.id)}
              onPointerLeave={() => setHovered(null)}
              onClick={() => setSelected(obj?.id)}
            >
              <H1>{obj?.family}</H1>
            </Panel>
          ))}
        {selected && (
          <>
            <Panel>
              <PanelHeader>
                <H1>{selectedObject?.family}</H1>
                <CloseButton onClick={() => setSelected(null)}>
                  <CloseIcon />
                </CloseButton>
              </PanelHeader>
              <ViewerPreview />
            </Panel>
            <Panel>
              <PanelContent>
                <BuildingElementData />
              </PanelContent>
            </Panel>
          </>
        )}
      </SidePanel>
      <Viewer speckleObjects={speckleObjects} />
    </Wrapper>
  );
}
