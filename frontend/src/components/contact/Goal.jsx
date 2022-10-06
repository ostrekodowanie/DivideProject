import { useState, useEffect } from "react"
import { inputStyles } from "../../pages/Contact"

const options = [
    'Increase incomes',
    'Start a business',
    'Update website',
    'Personal website',
    'E-commerce'
]

export default function Goal({ setInfo }) {
    const [active, setActive] = useState(false)
    const [input, setInput] = useState('Increase incomes')

    useEffect(() => {
        setActive(false)
        setInfo(prev => {
            return {
                ...prev,
                goal: input
            }
        })
    }, [input])

    return (
        <div className={`relative flex flex-col z-10 justify-center ${inputStyles}`}>
            <label htmlFor='goal' className="z-10 select-none absolute inset-0 flex items-center">
                <span className={`transition left-6 absolute font-medium text-[#4C3963] duration-300 origin-left ${active ? '-translate-y-[60%] scale-75' : ''}`}>Goal</span>
            </label>
            <input className={`bg-transparent select-none outline-none cursor-pointer font-medium transition duration-300 relative z-20 ${active ? 'translate-y-[30%]' : ''}`} readOnly required autoComplete="off" onClick={() => setActive(prev => !prev)} type="text" id='goal' value={input} />
            {active && <div className="absolute top-full right-0 left-0 rounded-xl overflow-hidden">
                <ul className="flex flex-col">
                    {options.map(option => <li onClick={() => setInput(option)} className="bg-background cursor-pointer text-font font-medium py-3 px-5 flex items-center justify-between" key={option}>{option}{input === option && <span className="bg-primary bg-clip-text font-bold text-transparent">X</span>}</li>)}
                </ul>
            </div>}
        </div>
    )
}