import gsap, { Power0 } from "gsap"
import { useEffect } from 'react'
import { rating } from '../../assets/home'

const opinions = [
    {
        name: 'Ted Ratcliffe',
        desc: "Great service. My website works exactly how I'd wanted it to work. It is also provided with a great design and functionality.",
        rate: 4.9
    },
    {
        name: 'Meghan Rayner',
        desc: "I was stunned by the quality of service these guys had provided for me. They've made me an e-commerce website with everything I'd previously wanted.",
        rate: 5.0
    },
    {
        name: 'Melvin North',
        desc: 'Not many developers I worked with can do their job with so much accuracy as them. Absolutely worth recommending.',
        rate: 4.8
    }
]

export default function Opinions() {
    useEffect(() => {
        const boxes = gsap.utils.toArray('.opinion')
        gsap.to(boxes, {
            scrollTrigger: {
                start: 'top 60%',
                trigger: '.opinion'
            },
            stagger: 0.1,
            y: '0%',
            opacity: 1,
            ease: Power0.easeOut
        })
    })

    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col bg-background bg-landing'>
            <h2 className='text-font text-center text-3xl xl:text-4xl font-semibold mb-16'>What do clients say about us?</h2>
            <div className='flex flex-wrap justify-center lg:grid-cols-2 lg:grid xl:grid-cols-3 gap-16 xl:gap-8'>
                {opinions.map(opinion => <Opinion {...opinion} key={opinion.name} />)}
            </div>
        </section>
    )
}

const Opinion = props => {
    return (
        <div className='opinion p-6 translate-y-[10%] opacity-0 flex flex-col gap-2 bg-pros backdrop-blur-md rounded-lg after:absolute after:h-[3px] after:bg-primary after:left-0 after:right-0 after:bottom-0 border-[2px] border-[#B91DFF]/10'>
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-lg text-font'>{props.name}</h3>
                <span className='bg-primary bg-clip-text text-transparent font-bold text-4xl'>“</span>
            </div>
            <p className='text-fontLight font-medium leading-relaxed text-sm max-w-[4in]'>{props.desc}</p>
            <div className='flex items-center gap-4 mt-3'>
                <img src={rating} alt="" />
                <span className='text-fontLight text-lg font-medium'>{props.rate}</span>
            </div>
        </div>
    )
}