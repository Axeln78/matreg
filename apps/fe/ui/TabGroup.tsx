import { Tab } from '#/ui/Tab';
import React from 'react';

export type Item = {
  name: string;
  id?: string;
};

export const TabGroup = ({ path, modes }: { path: string; modes: Item[] }) => {
  return (
    <div className="flex flex-row">
      {modes.map((item) => (
        <Tab key={item.name} path={path} item={item} />
      ))}
    </div>
  );
};
