import Control, { Controller } from "react-control-js"
import { pros1, pros2, pros3 } from "../../assets/home"

const pros = [
    {
        title: 'Professionalism',
        p: 'We have been studying web development for a long time. We are capable of creating functional applications and websites based on the reusable components.',
        img: pros1
    },
    {
        title: 'Communication',
        p: 'We are always available for our clients. That means we can always offer you help with our service and provide you with the most accurate help possible.',
        img: pros2
    },
    {
        title: 'Universalism',
        p: 'We are trying to make our products accessible for anyone. They are usually designed to use on daily basis and with many possible modifications.',
        img: pros3
    }
]

export default function Pros() {
    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col bg-background bg-landing'>
            <h2 className='text-font text-center text-3xl xl:text-4xl font-semibold mb-16'>Why would you choose us?</h2>
            <Controller opacity={1} stagger={100} onScroll={true} className='flex flex-wrap justify-center lg:grid-cols-2 lg:grid xl:grid-cols-3 gap-16 xl:gap-8'>
                {pros.map(pro => <Control element={<Pro {...pro} key={pro.title} />} />)}
            </Controller>
        </section>
    )
}

const Pro = props => {
    return (
        <div className='box p-10 translate-y-[5%] h-full flex flex-col items-center gap-3 bg-pros backdrop-blur-md text-center rounded-lg after:absolute after:h-[3px] after:bg-primary after:left-0 after:right-0 after:bottom-0 border-[2px] border-[#B91DFF]/10'>
            <div className='h-16 w-16 mb-6 rounded-md flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-0 bg-primary opacity-[0.16]' />
                <img className='max-h-[50%]' src={props.img} alt="" />
            </div>
            <h3 className='font-semibold text-lg text-font'>{props.title}</h3>
            <p className='text-fontLight font-medium leading-loose text-sm max-w-[4in]'>{props.p}</p>
        </div>
    )
}