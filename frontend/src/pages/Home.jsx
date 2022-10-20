import { Link } from 'react-router-dom'
import { landing, arrowLeft, turek, szyszka, filip, motArrow } from '../assets/home'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Roles from '../components/home/Roles'
import Pros from '../components/home/Pros'
import Opinions from '../components/home/Opinions'
import Tools from '../components/home/Tools'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <>
            <Landing />
            <Roles />
            <Pros />
            <Tools />
            <Opinions />
        </>
    )
}

const Landing = () => {
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] gap-12 bg-landing lg:flex-row lg:items-center lg:justify-end'>
            <div className="landing flex flex-col gap-6 xl:mb-[8vw]">
                <h1 className="text-font text-[2.7rem] leading-[1.1] font-semibold lg:w-max xl:text-5xl 2xl:text-[4rem]">We create<br />best <span className='bg-primary bg-clip-text text-transparent'>website</span><br />experiences</h1>
                <p className="text-fontLight font-medium text-sm 2xl:text-[1rem]">Contact us and get the website you deserve to have.</p>
                <div className="flex flex-wrap items-center gap-4 2xl:gap-6 mt-4">
                    <Link className='bg-primary text-font cursor-pointer text-sm py-2 px-5 rounded-3xl font-medium 2xl:text-md 2xl:py-3 transition-transform hover:scale-105 flex items-center' to='/portfolio'>View portfolio<img className='max-h-[1em] ml-2' src={arrowLeft} alt="" /></Link>
                    <a className='text-font py-2 px-5 cursor-pointer text-sm border-[1px] border-font rounded-3xl font-medium 2xl:text-md 2xl:py-3 transition-transform hover:scale-105 flex items-center' href="https://services.divideproject.works" target='_blank'>Visit shop<img className='max-h-[1em] ml-2' src={arrowLeft} alt="" /></a>
                </div>
            </div>
            <div className='mr-[-8vw] md:mr-[-12vw] 2xl:mr-[-18vw] ml-auto relative z-10'>
                <img className='2xl:w-full 2xl:max-w-[50vw]' src={landing} alt="" />
                <div className='absolute -left-1 lg:-left-36 -bottom-8 flex items-center'>
                    <a href='#s' className='backdrop-blur-md transition-transform hover:scale-110 bg-blur h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full relative z-20'>
                        <img className='max-h-[50%]' src={turek} alt="" />
                    </a>
                    <a href='#m' className='backdrop-blur-md transition-transform hover:scale-110 bg-blur h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full relative z-10 -ml-6'>
                        <img className='max-h-[50%]' src={szyszka} alt="" />
                    </a>
                    <a href='#f' className='backdrop-blur-md transition-transform hover:scale-110 bg-blur h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full -ml-6'>
                        <img className='max-h-[50%]' src={filip} alt="" />
                    </a>
                    <div className='absolute bottom-[46%] -left-20 hidden 2xl:block'>
                        <img className='motArrow' src={motArrow} alt='' />
                        <span className='mot absolute -top-12 text-fontLight w-max'>Meet our team</span>
                    </div>
                </div>
            </div>
            {/* <div className='flex items-center rounded-3xl gap-4 absolute left-[8vw] md:left-[12vw] 2xl:left-[18vw] bottom-[1.4in] py-3 px-6 overflow-hidden'>
                <a className='relative z-10' href='/'><img src={google} alt="" /></a>
                <a className='relative z-10' href='/'><img src={fb} alt="" /></a>
                <a className='relative z-10' href='/'><img src={linkedin} alt="" /></a>
                <div className='absolute inset-0 bg-primary opacity-[0.15]' />
            </div> */}
        </section>
    )
}