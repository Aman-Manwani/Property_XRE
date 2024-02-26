"use client";

import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppliedFiltersBar from "./AppliedFiltersBar";
import PropertyListing from "./PropertiesListing";
import PropertiesPagination from "./PropertiesPagination";

const propertydummy =[
  {
    id: "#00001",
    type: "Commercial",
    name: "Metropolicis Mall",
    location: "MG Road, GuruGram",
    area: "1200 (Sq. Ft.)",
    occupied: "685 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00002",
    type: "IT",
    name: "DLF Building",
    location: "Millenium City , Gurugram",
    area: "2568(Sq. Ft.)",
    occupied: "1985 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00003",
    type: "Commercial",
    name: "Ambani's Building",
    location: "BeachSide , Mumbai",
    area: "1456 (Sq. Ft.)",
    occupied: "985 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00004",
    type: "Commercial",
    name: "Swastik Universal Building",
    location: "Magdalla Road, Surat",
    area: "2456 (Sq. Ft.)",
    occupied: "1985 (Sq. Ft.)",
    status: "Drafts",
  },
  {
    id: "#00005",
    type: "IT",
    name: "Paras Quartier",
    location: "Bandhwari, Gurugram",
    area: "1087 (Sq. Ft.)",
    occupied: "185 (Sq. Ft.)",
    status: "Rejected",
  },
  {
    id: "#00006",
    type: "Commercial",
    name: "Raheja Raventa",
    location: "Sector-78 , Gurugram",
    area: "4728 (Sq. Ft.)",
    occupied: "2985 (Sq. Ft.)",
    status: "Approved",
  },
  {
    id: "#00007",
    type: "Commercial",
    name: "DLF Camellias",
    location: "Sector 42 , Gurugram",
    area: "5642 (Sq. Ft.)",
    occupied: "1859 (Sq. Ft.)",
    status: "Approved",
  },
];

const FiltersBar = () => {
  return (
    <div className="lg:pt-6 lg:px-8 lg:pb-2 flex justify-between">

      <div className="flex gap-3 items-center">
        <p className="text-lg font-bold text-gray-900">Filters</p>
        <p className="text-gray-500">|</p>
        <div className="flex items-center gap-2 text-gray-500">
          <p>Property Type</p>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </div>


      <div className="flex gap-6 text-gray-500">
        
        <div className="flex items-center gap-2">
            <p>Project</p>
            <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
            <p>Price Range</p>
            <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
            <p>Type</p>
            <ChevronDownIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
            <p>Location</p>
            <ChevronDownIcon className="w-5 h-5" />
        </div>
        
      </div>
    </div>
  );
};

const SearchInput = ({setSearchInput}) => {
  return (
    <div className="w-full sm:max-w-md">
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center border-r-2">
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <select
            id="state"
            name="state"
            autoComplete="state"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value="all">All</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search location"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PropertyHome() {
  const navigate = useNavigate();
  const[searchInput , setSearchInput] = useState('')
  const PropertyList = JSON.parse(localStorage.getItem('propertyList')) || propertydummy;
  const filteredProperty = PropertyList.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
    <Disclosure as="header" className="border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-100 lg:divide-y lg:px-8 lg:divide-gray-200">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="truncate text-2xl font-bold text-gray-900">
                    Projects / Building
                  </h1>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <SearchInput setSearchInput = {setSearchInput} />
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-red-900 px-3 py-2 text-sm font-light text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => navigate("/property/add-property")}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
          <div>
            <FiltersBar />
          </div>
        </>
      )}
    </Disclosure>
      <AppliedFiltersBar />
      <PropertyListing filteredProperty = {filteredProperty}/>
      <PropertiesPagination />
    </>
  );
}
