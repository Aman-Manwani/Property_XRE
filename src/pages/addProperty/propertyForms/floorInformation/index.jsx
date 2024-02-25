import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CustomInput from "../../../../../src/components/common/CustomInput";

const FloorInformationForm = (props) => {
  const { updateInputValue, getValue } = props;
  const type = "floorInformation";
  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Floor Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <CustomInput
            title="Floor Number"
            type="text"
            name="floorNumber"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "floorNumber")}
          />
          <CustomInput
            title="Total Units"
            type="text"
            name="totalUnits"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "totalUnits")}
          />
          <CustomInput
            title="Units Available"
            type="text"
            name="unitsAvailable"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "unitsAvailable")}
          />
          <CustomInput
            title="Floor Area"
            type="text"
            name="floorArea"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
            }}
            getValue={() => getValue(type, "floorArea")}
          />
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Floor Plan
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorInformationForm;
