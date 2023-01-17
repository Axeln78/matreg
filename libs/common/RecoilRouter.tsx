'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { atoms } from '@matr/common/recoil';
import {
  useRouter,
  usePathname,
  useSelectedLayoutSegments,
} from 'next/navigation';
import React from 'react';

export default function RecoilRouter() {
  const [selectedObjectId, setSelectedObjectId] = useRecoilState(
    atoms.selectedObjectId
  );
  const pathname = usePathname();
  const router = useRouter();
  const segments = useSelectedLayoutSegments();

  const [mode, setMode] = useState('building');

  useEffect(() => {
    if (segments[1] === 'element') {
      setMode('element');
    } else {
      setMode('building');
    }
  }, [segments]);

  useEffect(() => {
    console.log(mode);
    if (selectedObjectId) {
      router.replace(`/element/${selectedObjectId}`);
    } else if (mode === 'element') {
      router.replace('/building/revit');
    }
  }, [router, selectedObjectId, mode]);

  return <></>;
}
