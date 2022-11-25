'use client';

import React from 'react';
import type { Item } from '#/ui/TabGroup';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Tab = ({
  path,
  item: { id, name },
}: {
  path: string;
  item: Item;
}) => {
  const segment = useSelectedLayoutSegment();
  const href = id ? path + '/' + id : path;
  const isActive =
    // Example home pages e.g. `/layouts`
    (!id && segment === null) ||
    // Nested pages e.g. `/layouts/electronics`
    segment === id;

  return (
    <Link
      href={href}
      className={clsx('mt-2 mr-2 rounded-lg px-3 py-1 text-sm font-medium', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          !isActive,
        'bg-vercel-blue text-white': isActive,
      })}
    >
      {name}
    </Link>
  );
};
