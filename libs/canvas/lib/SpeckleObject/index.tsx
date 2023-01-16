import { useBounds, useCursor } from '@react-three/drei';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atoms } from '@matr/common';
import { useEffect, useState } from 'react';
import { SpeckleGeometry } from '../SpeckleGeometry';
import { Object3D, Event, Box3 } from 'three';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';

type ObjectProps = {
  object: any;
  loader?: any;
};

export function SpeckleObject({ object, loader }: ObjectProps) {
  const [selectedId, setSelectedId] = useRecoilState(atoms.selectedObjectId);
  const preSelectedObjects = useRecoilValue(atoms.preSelectedObjects);

  const [preselected, setPreselected] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const api = useBounds();
  useCursor(hovered);
  const segments = useSelectedLayoutSegments();
  const router = useRouter();

  useEffect(() => {
    object?.id == segments[2] ? setActive(true) : setActive(false);
  }, [segments]);

  const setSelected = (id: string) => {
    console.log('id', id);
    const parts = ['element', id];
    const url = parts.join('/');
    router.replace(url);
    setActive(true);
  };

  const deselect = () => {
    const parts = ['building', 'revit'];
    const url = parts.join('/');
    router.replace(url);
    setActive(false);
  };

  const handlePointerOver = (e: { stopPropagation: () => void }) => {
    if (preselected || !preSelectedObjects) {
      e.stopPropagation();
      setHovered(true);
    }
  };

  const handlePointerOut = (e: any) => {
    setHovered(false);
  };
  const handleClick = (e: { stopPropagation: () => void }) => {
    if (preselected || !preSelectedObjects) {
      e.stopPropagation();
      setSelected(object?.id);
      if (object?.id == segments[2]) deselect();
    }
  };
  const handleDoubleClick = (e: {
    stopPropagation: () => void;
    delta: number;
    object: Object3D<Event> | Box3 | undefined;
  }) => {
    if (preselected || !preSelectedObjects) {
      setSelected(object?.id);
      e.stopPropagation();
      if (e.delta <= 2) api.refresh(e.object).fit();
    }
  };

  useEffect(() => {
    if (preSelectedObjects) {
      setPreselected(preSelectedObjects.some((obj) => obj?.id === object.id));
    } else setPreselected(false);
  }, [preSelectedObjects]);

  return (
    <group
      key={object?.id}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      {object?.displayObjects &&
        object?.displayObjects.map((displayObjects: any) => (
          <SpeckleGeometry
            key={displayObjects?.id}
            active={active}
            transparent={!preselected && preSelectedObjects ? true : false}
            preselected={preselected}
            object={displayObjects}
            loader={loader}
          />
        ))}
    </group>
  );
}
