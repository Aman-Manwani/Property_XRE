import { titleCase } from "@/constant/helper"
import Image from "next/image"

const PropertyCard = (props) => {
    const { ownerName, zone, city, states, occupiedArea, totalArea, buildingType } = props
    return (
        <div className=' border-b pb-4 flex justify-between items-center'>
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-red-900 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 mt-4">
                <div className='flex gap-5 items-center'>
                    <Image src={'/property_1.jpg'} alt="property" className="pointer-events-none object-cover group-hover:opacity-75 rounded-r-lg"
                        width={200}
                        height={100}
                    />
                    <div className='flex flex-col	gap-2 '>
                        <div>
                            <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-900">
                                {titleCase(buildingType)}
                            </span>
                            <span className='text-[14px] font-normal text-gray-500 ml-2'>#0001</span>
                        </div>
                        <div>
                            <h4 className='text-1xl font-bold text-gray-900'>{ownerName}</h4>
                            <h4 className='text-[12px] font-extralight'>{titleCase(zone)}, {titleCase(city)}, {titleCase(states)}</h4>
                        </div>
                        <div className='flex justify-between w-[100%] mt-2'>
                            <div>
                                <p className='text-[10px] font-extralight'>Available Area</p>
                                <span className='text-1lg font-bold text-red-900'>{(totalArea)}</span> <span className='text-[11px] font-extralight'>Sq. Ft.</span>
                            </div>
                            <div>
                                <p className='text-[10px] font-extralight'>Occupied</p>
                                <span className='text-1lg font-bold text-red-900'>{occupiedArea}</span> <span className='text-[11px] font-extralight'>Sq. Ft.</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex flex-col items-center'>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                    Approved
                </span>
                <button
                    type="button"
                    className="rounded bg-white px-2 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-4 w-[70px]"
                >
                    Add Unit
                </button>
            </div>

        </div>
    )
}

export default PropertyCard