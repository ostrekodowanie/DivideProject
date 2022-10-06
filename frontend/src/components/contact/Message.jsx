import { useState, useEffect } from "react"
import { inputStyles } from "../../pages/Contact"

export default function Message({ setInfo }) {
    const [active, setActive] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        setInfo(prev => {
            return {
                ...prev,
                message: input
            }
        })
    }, [input])

    return (
        <div className={`relative flex flex-col col-span-3 backdrop-blur-md bg-input rounded-xl outline-none border-[1px] border-[#B91DFF]/10 text-font min-w-0`}>
            <label htmlFor='message' className="z-10 absolute inset-0">
                <span className={`transition left-6 top-4 font-medium text-[#4C3963] absolute duration-300 origin-left ${active ? '-translate-y-[60%] scale-75' : ''}`}>
                    Message
                </span>
            </label>
            <textarea className={`bg-transparent outline-none font-medium transition duration-300 relative z-20 px-6 py-4 min-h-[2in] ${active ? 'pt-6' : ''}`} onFocus={() => setActive(true)} required onBlur={() => !input ? setActive(false) : {}} onChange={e => setInput(e.target.value)} type="text" id='message' />
        </div>
    )
}