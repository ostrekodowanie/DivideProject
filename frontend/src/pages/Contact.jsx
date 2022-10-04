import { useState } from "react"

export default function Contact() {
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] md:py-[1.8in] 2xl:py-[2.2in] md:flex-row gap-12 bg-landing'>
            <div className="flex flex-col gap-16">
                <h1 className="text-font font-semibold text-4xl">Do you have any questions?</h1>
                <Form />
            </div>
            <div className="flex flex-col">

            </div>
        </section>
    )
}

const Form = () => {
    const [info, setInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        business_goal: '',
        budget: '',
        message: ''
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
            <div className="flex flex-col gap-4 lg:grid grid-cols-form">
                <input className={inputStyles} onChange={e => setInfo({...info, first_name: e.target.value})} type="text" />
                <input className={`${inputStyles} col-[2/4]`} onChange={e => setInfo({...info, last_name: e.target.value})} type="text" />
                <input className={inputStyles} onChange={e => setInfo({...info, email: e.target.value})} type="email" />
                <input className={`${inputStyles} col-[2/3]`} onChange={e => setInfo({...info, business_goal: e.target.value})} type="text" />
                <input className={`${inputStyles} col-[3/4]`} onChange={e => setInfo({...info, budget: e.target.value})} type="text" />
                <textarea className={`${inputStyles} col-span-3 min-h-[2in]`} onChange={e => setInfo({...info, message: e.target.value})} name="message" />
            </div>
            <button type="submit" className="rounded-xl border-[1px] border-white py-2 px-5 text-white mt-8">Send message</button>
        </form>
    )
}

const inputStyles = 'backdrop-blur-md bg-input rounded-md px-6 py-3 outline-none text-font min-w-0'