import CustomDropdown from '@/components/Forms/CustomDropdown'
import CustomRadioCard from '@/components/Forms/CustomRadioCard'
import { classNames, handleSaveFilter } from '@/constant/helper'
import React from 'react'

const LeftSidePropertyFilterSection = (props) => {
    const { filterData, setCurrentFilter, currentFilter, setFileteredPropertyList, allPropertyList } = props
    const handleFilter = () => {
        const filteredData = allPropertyList.filter((property) => {
            return (
                (currentFilter.type === "" || property.buildingType.toLowerCase() === currentFilter.type.toLowerCase()) &&
                (currentFilter.city === "" || property.city.toLowerCase() === currentFilter.city.toLowerCase()) &&
                (currentFilter.zone === "" || property.zone.toLowerCase() === currentFilter.zone.toLowerCase())
            )
        });
        setFileteredPropertyList(filteredData)
        setCurrentFilter({ ...currentFilter, status: "complete" })
        console.log(allPropertyList, currentFilter, filteredData, 'currentFilter')
    }
    const handleClearFilter = () => {
        setCurrentFilter({ type: "", city: "", zone: "", status: "pending" })
        setFileteredPropertyList(allPropertyList)
    }
    return (
        <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 w-[350px] shadow-md rounded-md h-[100%]">

            <section className='mb-6'>
                <h2 className="text-[18px] font-semibold leading-6 text-gray-900">Choose One</h2>
                <div className='flex justify-between gap-3 mt-3'>
                    <CustomRadioCard title="Projects" name="projects" checked={true} />
                    <CustomRadioCard title="Units" name="units" />
                </div>
            </section>
            <section className='mb-6'>
                <h2 className="text-[18px] font-semibold leading-6 text-gray-900">Price Range</h2>
                <div className='flex justify-between gap-3 mt-3' >
                    <div className='border-b border-gray-200 bg-[white] px-1 py-1 sm:px-3 w-[50%] shadow rounded border'>
                        <p className='text-[12px] font-light'>Minimum</p>
                        <p className='text-[14px] font-bold'>$500</p>
                    </div>
                    <div className='border-b border-gray-200 bg-[white] px-1 py-1 sm:px-3 w-[50%] shadow rounded border'>
                        <p className='text-[12px] font-light'>Maximum</p>
                        <p className='text-[14px] font-bold'>$500</p>
                    </div>
                </div>
            </section>

            <section className='mb-4'>
                <h2 className="text-[18px] font-semibold leading-6 text-gray-900">Type</h2>
                <div className='flex justify-between gap-3 mt-3 flex-wrap' >
                    {filterData['type'].map((item) => {
                        return (
                            <div key={item.id} className={classNames(currentFilter.type === item.toLowerCase() ? " border-red-900 bg-red-200  px-1 py-1 sm:px-3 w-[45%] shadow rounded border cursor-pointer" : 'border-b border-gray-200 bg-[white] px-1 py-1 sm:px-3 w-[45%] shadow rounded border cursor-pointer')} onClick={() => {
                                handleSaveFilter("type", item, setCurrentFilter)
                            }}>
                                <p className={classNames(currentFilter.type === item.toLowerCase() ? "text-red-900" : "text-gray-500", "text-[14px] font-semibold")}>{item}</p>
                            </div>
                        )
                    })}
                </div >
            </section>
            <section>
                <CustomDropdown title='City' name="city" options={filterData['city'].map((item) => { return { title: item, value: item.toLowerCase() } })}
                    inputProps={{ onChange: (e) => handleSaveFilter("city", e.target.value, setCurrentFilter) }}

                />
                <div className='mt-3'>
                    <CustomDropdown title='Zone' name="zone" options={filterData['zone'].map((item) => { return { title: item, value: item.toLowerCase() } })}
                        inputProps={{ onChange: (e) => handleSaveFilter("zone", e.target.value, setCurrentFilter) }}

                    />
                </div>
            </section>

            {currentFilter.status === "pending" ? (
                <button
                    type="button"
                    className="rounded-md bg-red-900 px-4 py-2 text-sm font-normal text-white shadow-s w-full mt-4"
                    onClick={handleFilter}
                >
                    Filter Now
                </button>
            ) : (
                <button
                    type="button"
                    className="rounded-md bg-red-500 px-4 py-2 text-sm font-normal text-white shadow-s w-full mt-4"
                    onClick={handleClearFilter}
                >
                    Clear Filter
                </button>
            )}
        </div>
    )
}

export default LeftSidePropertyFilterSection