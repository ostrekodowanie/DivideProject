import { useEffect, useState } from "react"
import { arrowLeft } from "../assets/home"
import { logo } from "../assets/header"
import { location, mail, phone } from "../assets/contact"
import Goal from "../components/contact/Goal"
import Message from "../components/contact/Message"
import Budget from "../components/contact/Budget"

export default function Contact() {
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] md:py-[1.8in] 2xl:py-[2.2in] xl:flex-row xl:justify-between gap-20 bg-landing'>
            <div className="flex flex-col gap-12">
                <h1 className="text-font font-semibold text-4xl">Do you have any questions?</h1>
                <Form />
            </div>
            <Info />
        </section>
    )
}

const formFields = [
    'first_name',
    'last_name',
    'email',
]

const Form = () => {
    const [info, setInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        goal: '',
        budget: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(res => res.data)
        .then(data => setAlert(data))
        .catch(err => setAlert(err.response.data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 md:grid grid-cols-form">
                {formFields.map(field => <Input field={field} setInfo={setInfo} key={field} />)}
                <Goal setInfo={setInfo} />
                <Budget setInfo={setInfo} />
                <Message setInfo={setInfo} />
            </div>
            <button type="submit" className="py-2 px-5 text-font text-sm font-medium rounded-3xl bg-primary transition-transform hover:scale-105 flex items-center mt-12">Send message <img className="max-h-[1em] ml-2" src={arrowLeft} alt="" /></button>
        </form>
    )
}

export const inputStyles = 'backdrop-blur-md bg-input rounded-xl px-6 py-4 outline-none text-font min-w-0 border-[1px] border-[#B91DFF]/10'

const Input = ({ field, setInfo }) => {
    const [active, setActive] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        setInfo(prev => {
            return {
                ...prev,
                field: input
            }
        })
    }, [input])

    return (
        <div className={`relative flex flex-col justify-center ${inputStyles} ${field === 'last_name' ? 'col-span-2' : ''}`}>
            <label htmlFor={field} className="z-10 absolute inset-0 flex items-center">
                <span className={`transition left-6 absolute font-medium text-[#4C3963] duration-300 origin-left ${active ? '-translate-y-[60%] scale-75' : ''}`}>
                    {field.includes('_') ? field.split("_").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ") : field.charAt(0).toUpperCase() + field.substring(1)}
                </span>
            </label>
            <input className={`bg-transparent outline-none font-medium transition duration-300 relative z-20 ${active ? 'translate-y-[30%]' : ''}`} required autoComplete="off" onFocus={() => setActive(true)} onBlur={() => !input ? setActive(false) : {}} onChange={e => setInput(e.target.value)} type="text" id={field} />
        </div>
    )
}

const Info = () => {
    return (
        <div className="p-10 relative self-start flex flex-wrap xl:flex-col backdrop-blur-md gap-8 bg-input rounded-xl font-medium text-sm">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#4C3963] w-max font-medium">Work schedules</h3>
                    <ul className="flex flex-col gap-[0.6rem] text-font">
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li>Friday</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#4C3963] w-max font-medium">Contact</h3>
                    <ul className="flex flex-col gap-[0.6rem] text-font min-w-max">
                        <li className="flex items-center gap-3"><img className="w-4" src={phone} alt="" /> +48 666 278 116</li>
                        <li className="flex items-center gap-3"><img className="w-4" src={mail} alt="" /> divideproject@gmail.com</li>
                        <li className="flex items-center gap-3"><img className="w-4" src={location} alt="" /> Europe</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#4C3963] w-max font-medium">Team</h3>
                    <ul className="flex flex-col gap-[0.6rem] text-font w-max">
                        <li>Mateusz Szyszka</li>
                        <li>Filip Ferencz</li>
                        <li>Sebastian Magnucki</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#4C3963] w-max font-medium">Languages</h3>
                    <ul className="flex flex-col gap-[0.6rem] text-font">
                        <li>English</li>
                        <li>Polish</li>
                    </ul>
                </div>
                <img className="w-12 ml-auto" src={logo} alt="" />
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-primary" />
        </div>
    )
}