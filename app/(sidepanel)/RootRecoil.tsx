'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

export const RootRecoil = ({ children }: any) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
