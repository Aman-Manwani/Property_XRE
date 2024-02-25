import { classNames } from "@/constant/helper";
import { useEffect, useState } from "react";
const tabs = [
    { name: 'All Properties', href: '#', count: '52', current: true },
    { name: 'Drafts', href: '#', count: '6', current: false },
    // { name: 'Summited for review', href: '#', count: '4', current: true },
    // { name: 'Rejected', href: '#', current: false },
]

const FilterTabs = (props) => {
    const { allPropertyList, setFileteredPropertyList, filteredPropertyList } = props;
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const handleTabChange = (status) => {
        let finalData = []
        if (status === "draft") {
            finalData = allPropertyList.filter((item) => item.propertyStatus === status)
        } else {
            finalData = allPropertyList
        }
        setFileteredPropertyList(finalData)
    }

    const getDraftsCount = () => {
        return allPropertyList.filter((item) => item.propertyStatus === "draft").length
    }
    useEffect(() => {
        handleTabChange(currentTabIndex === 1 && "draft")
    }, [currentTabIndex])

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-900 focus:outline-none focus:ring-red-900 sm:text-sm"
                    defaultValue={tabs?.find((tab: any) => tab?.current)?.name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab, i) => (
                            <a
                                key={tab.name}
                                onClick={() => setCurrentTabIndex(i)}
                                className={classNames(
                                    currentTabIndex === i
                                        ? 'border-red-900 text-red-900'
                                        : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                                    'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium cursor-pointer'
                                )}
                                aria-current={currentTabIndex === i ? 'page' : undefined}
                            >
                                {tab.name}
                                {tab.count ? (
                                    <span
                                        className={classNames(
                                            currentTabIndex === i ? 'bg-red-100 text-red-900' : 'bg-gray-100 text-gray-900',
                                            'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                                        )}
                                    >
                                        {/* {tab.count} */}
                                        {tab.name === "Drafts" ? getDraftsCount() : allPropertyList?.length}
                                    </span>
                                ) : null}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default FilterTabs