import React, { useState } from 'react'
import type { WIZARD_CONTENTS } from '../../models/wizardModel'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";


const WizardCard = ({ wizardcontent }: WIZARD_CONTENTS[]) => {
    const data: WIZARD_CONTENTS[] = wizardcontent

    const [currentStep, setCurrentStep] = useState(0)

    const handleStepClick = (index: number) => {
        setCurrentStep(index)
    }

    const next = () => {
        if (currentStep < data.length - 1) {
            setCurrentStep(prev => prev + 1)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1)
        }
    }

    return (
        <div className='border-2 border-teal-600 border-t-0'>
            <div className="flex gap-1 w-full cursor-pointer  ">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => handleStepClick(index)}
                        className="flex-1"
                    >
                        <hr className={`w-full h-1 border-0  ${currentStep === index
                            ? 'bg-teal-400'
                            : 'bg-teal-600'
                            }`} />

                        <div
                            className={`p-2 ${currentStep === index
                                ? 'bg-[#b7bdc6]'
                                : 'bg-gray-500'
                                }`}
                        >
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 w-full text-center">
                <h2>{data[currentStep].title}</h2>
                <p>{data[currentStep].content}</p>
            </div>

            <div className="mt-4 flex gap-2 justify-between px-2.5 p-2">
                <button
                    className='cursor-pointer text-teal-700 '
                    onClick={prev}
                    disabled={currentStep === 0}
                >
                    <GrCaretPrevious />
                </button>

                <button className='cursor-pointer text-teal-700  '
                    onClick={next}
                    disabled={currentStep === data.length - 1}
                >
                    <GrCaretNext />
                </button>
            </div>
        </div>
    )
}

export default WizardCard