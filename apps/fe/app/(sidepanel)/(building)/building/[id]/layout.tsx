import React from 'react';

export default function BuildingLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
