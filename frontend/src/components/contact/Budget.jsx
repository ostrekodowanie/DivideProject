import { useState, useEffect } from "react"
import { inputStyles } from "../../pages/Contact"

const options = [
    '$0 - $1000',
    '$1000 - $5000',
    '$5000 - $10000',
    '> $10000'
]

export default function Budget({ setInfo }) {
    const [active, setActive] = useState(false)
    const [input, setInput] = useState('$1000 - $5000')

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
        <div className={`relative z-10 flex flex-col justify-center ${inputStyles}`}>
            <label htmlFor='budget' className="z-10 absolute inset-0 flex items-center">
                <span className='transition left-6 absolute font-medium text-[#4C3963] duration-300 origin-left -translate-y-[60%] scale-75'>Goal</span>
            </label>
            <input className='bg-transparent select-none outline-none cursor-pointer font-medium transition duration-300 relative z-20 translate-y-[30%]' readOnly required autoComplete="off" onClick={() => setActive(prev => !prev)} type="text" id='budget' value={input} />
            {active && <div className="absolute top-full right-0 left-0 rounded-xl overflow-hidden">
                <ul className="flex flex-col">
                    {options.map(option => <li onClick={() => setInput(option)} className="bg-background cursor-pointer text-font font-medium py-3 px-5 flex items-center justify-between" key={option}>{option}{input === option && <span className="bg-primary bg-clip-text text-transparent font-bold">X</span>}</li>)}
                </ul>
            </div>}
        </div>
    )
}