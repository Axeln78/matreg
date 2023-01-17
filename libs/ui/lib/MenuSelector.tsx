import * as React from 'react';

import { RadioGroup } from '@headlessui/react';
import { useSelectedLayoutSegment } from 'next/navigation';
import MenuItem from './MenuItem';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type Tab = {
  name: string;
  id?: string;
};

export interface MenuSelectorProps {
  tabs: Tab[];
  path: string;
  // callback: (tab: Tab) => void;
}

export default function MenuSelector(props: MenuSelectorProps) {
  const [tabs, setTabs] = React.useState(props.tabs);
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  // React.useEffect(() => {
  //   props.callback(selectedTab);
  // }, [selectedTab, props]);

  // React.useEffect(() => {
  //   if (props.tabs.length > 0) {
  //     setTabs(props.tabs);
  //     setSelectedTab(props.tabs[0]);
  //   }
  // }, [props.tabs]);

  return (
    <div className="">
      <RadioGroup
        value={selectedTab}
        onChange={setSelectedTab}
        className="w-full"
      >
        <RadioGroup.Label className="sr-only"></RadioGroup.Label>
        <div className="grid grid-cols-4 gap-1 bg-gray-500 rounded-full cursor-pointer">
          {tabs.map((tab) => (
            <MenuItem
              id={tab.id}
              name={tab.name}
              path={props.path}
              key={props.path+tab.id}
            />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
