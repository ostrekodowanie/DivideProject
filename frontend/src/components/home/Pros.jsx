import { pros1, pros2, pros3 } from "../../assets/home"
import gsap, { Power0 } from "gsap"
import { useEffect } from 'react' 

const pros = [
    {
        title: 'Professionalism',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus dictum hendrerit massa rhoncus. Adipiscing velit pretium senectus at molestie aliquam donec venenatis.',
        img: pros1
    },
    {
        title: 'Communication',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus dictum hendrerit massa rhoncus. Adipiscing velit pretium senectus at molestie aliquam donec venenatis.',
        img: pros2
    },
    {
        title: 'Universalism',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus dictum hendrerit massa rhoncus. Adipiscing velit pretium senectus at molestie aliquam donec venenatis.',
        img: pros3
    }
]

export default function Pros() {
    useEffect(() => {
        const boxes = gsap.utils.toArray('.box')
        gsap.to(boxes, {
            scrollTrigger: {
                start: 'top 60%',
                trigger: '.box'
            },
            stagger: 0.1,
            y: '0%',
            opacity: 1,
            ease: Power0.easeOut
        })
    })

    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col bg-background bg-landing'>
            <h2 className='text-font text-center text-3xl xl:text-4xl font-semibold mb-16'>Why would you choose us?</h2>
            <div className='flex flex-wrap justify-center lg:grid-cols-2 lg:grid xl:grid-cols-3 gap-16 xl:gap-8'>
                {pros.map(pro => <Pro {...pro} key={pro.title} />)}
            </div>
        </section>
    )
}

const Pro = props => {
    return (
        <div className='box p-10 translate-y-[10%] opacity-0 flex flex-col items-center gap-3 bg-pros backdrop-blur-md text-center rounded-lg after:absolute after:h-[3px] after:bg-primary after:left-0 after:right-0 after:bottom-0 border-[2px] border-[#B91DFF]/10'>
            <div className='h-16 w-16 mb-6 rounded-md flex items-center justify-center relative overflow-hidden'>
                <div className='absolute inset-0 bg-primary opacity-[0.16]' />
                <img className='max-h-[50%]' src={props.img} alt="" />
            </div>
            <h3 className='font-semibold text-lg text-font'>{props.title}</h3>
            <p className='text-fontLight font-medium leading-loose text-sm max-w-[4in]'>{props.p}</p>
        </div>
    )
}