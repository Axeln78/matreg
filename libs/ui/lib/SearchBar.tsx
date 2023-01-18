'use client';

import React from 'react';
import { useRecoilState } from 'recoil';
import { atoms } from '@matr/common/recoil';

import { XMarkIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  const [selected, setSelected] = useRecoilState(atoms.selectedObjectId);
  const [search, setSearch] = useRecoilState(atoms.searchString);

  // const [selectedObject, setSelectedObject] = useRecoilState(
  //   atoms.selectedObject
  // );
  // const [hovered, setHovered] = useRecoilState(atoms.hoveredObjectId);
  // const [preSelectedObjects, setPreSelectedObjects] = useRecoilState(
  //   atoms.preSelectedObjects
  // );

  function clearSearch() {
    setSearch('');
    setSelected(null);
    // clear input field
    // document.getElementById('search').value = '';
  }

  return (
    // <div className="flex items-center justify-center h-screen overflow-y-auto">
    <div>
      <div
        id="SearchBar"
        className="absolute top-2 left-2 z-10 w-80 rounded-2xl "
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by Component Name or Unique ID"
          onChange={(e) => (setSearch(e.target.value), setSelected(null))}
          className="flex drop-shadow-sm w-full border-2 border-gray-300 bg-white h-10 px-5 rounded-full text-sm shadow-lg"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <button
            className="inline-flex items-top pt-1 rounded-full "
            onClick={() => clearSearch}
          >
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
