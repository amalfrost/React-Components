import React from 'react'
import type { WIZARD_CONTENTS } from '../../models/wizardModel'
import WizardCard from './WizardCard'

const Wizard = ({ content }: WIZARD_CONTENTS[]) => {
    const data = [
        {
            id: 1,
            title: "About",
            content: "This is about page"
        },
        {
            id: 2,
            title: "content",
            content: "This is content page"
        },
        {
            id: 3,
            title: "help",
            content: "This is help page"
        }
    ]
    return (
        <div className='w-full' >Wizard
            <WizardCard wizardcontent={data} />
        </div>
    )
}

export default Wizard