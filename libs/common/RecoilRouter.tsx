'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { atoms } from '@matr/common/recoil';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

export default function RecoilRouter() {
  const [selectedObjectId, setSelectedObjectId] = useRecoilState(
    atoms.selectedObjectId
  );
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname!.split('/')[1] === 'element')
      setSelectedObjectId(pathname!.split('/')[2]);
  }, [pathname, setSelectedObjectId]);

  useEffect(() => {
    if (selectedObjectId) {
      router.replace(`/element/${selectedObjectId}`);
    } else {
      router.replace(`/building/revit`);
    }
  }, [router, selectedObjectId]);

  return <></>;
}
