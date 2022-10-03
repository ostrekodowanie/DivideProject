import { Link } from 'react-router-dom'
import { landing, arrowLeft, turek, szyszka, filip, motArrow, designCode, backendCode, pros1, pros2, pros3, google, linkedin, fb } from '../assets/home'
import gsap, { Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import CodeBox from '../components/CodeBox'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <>
            <Landing />
            <Roles />
            <Pros />
        </>
    )
}

const Landing = () => {
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] gap-12 bg-landing lg:flex-row lg:items-center lg:justify-end'>
            <div className="flex flex-col gap-6 xl:mb-[8vw]">
                <h1 className="text-font text-[2.7rem] leading-[1.1] font-semibold lg:w-max xl:text-5xl 2xl:text-[4rem]">We create<br />best <span className='bg-primary bg-clip-text text-transparent'>website</span><br />experience</h1>
                <p className="text-fontLight font-medium text-sm 2xl:text-[1rem]">Contact us and get the website you deserve to have.</p>
                <div className="flex flex-wrap items-center gap-4 2xl:gap-6 mt-4">
                    <Link className='bg-primary text-font cursor-pointer text-sm py-2 px-5 rounded-3xl font-medium 2xl:text-md 2xl:py-3 transition-transform hover:scale-105 flex items-center' to='/portfolio'>View portfolio<img className='max-h-[1em] ml-2' src={arrowLeft} alt="" /></Link>
                    <a className='text-font py-2 px-5 cursor-pointer text-sm border-[1px] border-font rounded-3xl font-medium 2xl:text-md 2xl:py-3 transition-transform hover:scale-105 flex items-center' href="https://services.divideproject.works" target='_blank'>Visit shop<img className='max-h-[1em] ml-2' src={arrowLeft} alt="" /></a>
                </div>
            </div>
            <div className='mr-[-8vw] md:mr-[-12vw] 2xl:mr-[-18vw] ml-auto relative z-10'>
                <img className='2xl:w-full 2xl:max-w-[50vw]' src={landing} alt="" />
                <div className='absolute -left-1 lg:-left-36 -bottom-8 flex items-center'>
                    <div className='backdrop-blur-md bg-blur h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full relative z-20'>
                        <img className='max-h-[50%]' src={turek} alt="" />
                    </div>
                    <div className='backdrop-blur-md bg-blur h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full relative z-10 -ml-6'>
                        <img className='max-h-[50%]' src={szyszka} alt="" />
                    </div>
                    <div className='backdrop-blur-md bg-blur h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center rounded-full -ml-6'>
                        <img className='max-h-[50%]' src={filip} alt="" />
                    </div>
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

const roles = [
    {
        title: {
            small: 'UI/UX/Graphic',
            big: 'Designer'
        },
        name: 'Mateusz Szyszka',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet interdum sed nibh orci, auctor. Dignissim donec neque ullamcorper aliquet eu. Non eget adipiscing nibh arcu et. Senectus massa massa purus platea mi accumsan dapibus egestas. Nunc scelerisque integer facilisi aliquam adipiscing volutpat mauris massa.',
        img: designCode,
        order: 'right'
    },
    {
        title: {
            small: 'Front-End',
            big: 'Developer'
        },
        name: 'Filip Ferencz',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet interdum sed nibh orci, auctor. Dignissim donec neque ullamcorper aliquet eu. Non eget adipiscing nibh arcu et. Senectus massa massa purus platea mi accumsan dapibus egestas. Nunc scelerisque integer facilisi aliquam adipiscing volutpat mauris massa.',
        img: backendCode,
        order: 'left'
    },
    {
        title: {
            small: 'Back-End',
            big: 'Developer'
        },
        name: 'Sebastian Magnucki',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet interdum sed nibh orci, auctor. Dignissim donec neque ullamcorper aliquet eu. Non eget adipiscing nibh arcu et. Senectus massa massa purus platea mi accumsan dapibus egestas. Nunc scelerisque integer facilisi aliquam adipiscing volutpat mauris massa.',
        img: backendCode,
        order: 'right'
    },
]

const Roles = () => {
    return (
        <>
            {roles.map(role => <RoleSection {...role} key={role.title.small} />)}
        </>
    )
}

const RoleSection = props => {
    const text = useRef()

    useEffect(() => {
        gsap.to(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: 'top 70%'
            },
            opacity: 1,
            ease: Power0.easeInOut
        })
    })

    return (
        <section className='padding py-[1in] xl:py-[1.4in] flex flex-col bg-background bg-landing'>
            <div className={`flex flex-col ${props.order === 'left' ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:items-center gap-16 xl:gap-48`}>
                <div ref={text} className='flex flex-col gap-6 opacity-0 '>
                    <h1 className='flex flex-col gap-2 text-font font-semibold'>
                        <span className='text-2xl'>{props.title.small}</span>
                        <span className='text-5xl'>{props.title.big}</span>
                    </h1>
                    <h2 className='bg-primary bg-clip-text text-lg text-transparent font-semibold'>{props.name}</h2>
                    <p className='text-fontLight leading-loose max-w-[5.5in] xl:max-w-[4in]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium cursus in in sed congue risus. Etiam cursus orci quis neque ac enim morbi. Elit, pulvinar nisl, tortor vel parturient. Placerat consectetur sit gravida tellus lectus amet, ac, id arcu.</p>
                </div>
                <div className={props.order === 'left' ? 'xl:ml-[-12vw] 2xl:ml-[-18vw] lg:mr-auto relative' : 'xl:mr-[-12vw] 2xl:mr-[-18vw] lg:ml-auto relative'}>
                    <img className='relative z-10' src={props.img} alt="" />
                    <CodeBox className={`-bottom-8 ${props.order === 'left' ? '-right-24' : '-left-24'} z-10`} title='class LoginView(APIView):' properties={['def post(self, request):', 'password = request.data[‘password’]', 'user = User.objects.filter(email=email).first()...']} />
                </div>
            </div>
        </section>
    )
}

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

const Pros = () => {

    useEffect(() => {
        const boxes = gsap.utils.toArray('.box')
        gsap.to(boxes, {
            scrollTrigger: {
                start: 'top 80%',
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