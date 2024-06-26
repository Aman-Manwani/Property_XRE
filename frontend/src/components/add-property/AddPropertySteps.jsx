import { CheckCircleIcon } from '@heroicons/react/20/solid'

export const AddPropertyStepConstant = [
    { id: 1, name: "Project Information", href: "#", status: 'complete' },
    { id: 2, name: "Floor Information", href: "#", status: 'current' },
    { id: 3, name: "Unit Information", href: "#", status: 'upcoming' },
    { id: 4, name: "Owner Information", href: "#", status: 'upcoming' },
]
export default function AddPropertySteps(props) {
    const { currentFormIndex } = props
    return (
        <div className="px-2 py-2 sm:px-2 lg:px-2">
            <nav className="flex justify-center" aria-label="Progress">
                <ol role="list" className="space-y-6">
                    {AddPropertyStepConstant.map((step, index) => {
                        if (index === currentFormIndex) {
                            step.status = 'current'
                        } else if (index < currentFormIndex) {
                            step.status = 'complete'
                        } else {
                            step.status = 'upcoming'
                        }
                        return (
                            <li key={step.name}>
                                {step.status === 'complete' ? (
                                    <a href={step.href} className="group">
                                        <span className="flex items-start">
                                            <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                                                <CheckCircleIcon
                                                    className="h-full w-full text-red-900 group-hover:text-red-900"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            <span className="ml-3 text-sm font-medium text-red-900 group-hover:text-gray-900">
                                                {step.name}
                                            </span>
                                        </span>
                                    </a>
                                ) : step.status === 'current' ? (
                                    <a href={step.href} className="flex items-start" aria-current="step">
                                        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                                            <span className="absolute h-4 w-4 rounded-full bg-red-200" />
                                            <span className="relative block h-2 w-2 rounded-full bg-red-900" />
                                        </span>
                                        <span className="ml-3 text-sm font-medium text-red-900">{step.name}</span>
                                    </a>
                                ) : (
                                    <a href={step.href} className="group">
                                        <div className="flex items-start">
                                            <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                                                <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                                            </div>
                                            <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                                        </div>
                                    </a>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}
