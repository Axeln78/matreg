import * as React from 'react';

import { RadioGroup } from '@headlessui/react';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type Tab = {
  name: string;
  id: string;
  path: string;
};

export default function MenuItem(props: Tab) {
  const { id, name } = props;
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const href = id ? props.path! + '/' + id : props.path!;
  const isActive = (!id && segment === null) || segment === id;

  return (
    <RadioGroup.Option key={id} value={name}>
      <RadioGroup.Label as="span">
        <Link
          className={classNames(
            isActive
              ? 'bg-gray-400 border-transparent text-white hover:bg-gray-300'
              : 'bg-gray-500 border-gray-500 text-gray-900 hover:bg-gray-300',
            'space-x-4 rounded-full border py-3 px-3 flex items-center justify-center text-sm font-sm sm:flex-1'
          )}
          href={href}
        >
          {name}
        </Link>
      </RadioGroup.Label>
    </RadioGroup.Option>
  );
}
