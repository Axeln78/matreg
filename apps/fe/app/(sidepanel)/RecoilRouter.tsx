'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { atoms } from '../../src/common/recoil';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

export default function RecoilRouter() {
  const [selectedObjectId, setSelectedObjectId] = useRecoilState(
    atoms.selectedObjectId
  );
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setSelectedObjectId(pathname!.split('/')[2]);
  }, [pathname, setSelectedObjectId]);

  useEffect(() => {
    if (selectedObjectId) {
      router.replace(`/element/${selectedObjectId}`);
    } else {
      router.replace(`/`);
    }
  }, [pathname, router, selectedObjectId]);

  return <></>;
}
