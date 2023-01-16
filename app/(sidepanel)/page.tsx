import { redirect } from 'next/navigation';
import React from 'react';

export default function Page() {
  const r = true;
  if (r) {
    redirect('/building/revit');
  }
  return <h1></h1>;
}
