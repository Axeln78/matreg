'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilState,
} from 'recoil';
import { atoms } from '@matr/common';

export default function ViewerPreview() {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();
  const [selected, setSelected] = useRecoilState(atoms.selectedObjectId);

  return (
    <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
      <RecoilBridge>
        {/* Fill */}
        <ambientLight intensity={0.1} />
        {/* Main */}
        <directionalLight
          position={[1, 10, -2]}
          intensity={1}
          shadow-camera-far={70}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        {/* Strip */}
        <directionalLight position={[-10, -10, 2]} intensity={3} />
        {/* Ground */}
        <Suspense fallback={null}>
          <Bounds clip observe margin={2}>
            {/* <SpeckleObjects
              objectUrl={`https://speckle.xyz/streams/da9e320dad/objects/${selected}`}
            /> */}
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault />
      </RecoilBridge>
    </Canvas>
  );
}
