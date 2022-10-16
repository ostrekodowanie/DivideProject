import gsap, { Power0 } from "gsap"
import { designCode, backendCode } from "../../assets/home"
import CodeBox from "../CodeBox"
import { useEffect, useRef } from 'react'

const roles = [
    {
        title: {
            small: 'UI/UX/Graphic',
            big: 'Designer'
        },
        name: 'Mateusz Szyszka',
        p: "Creative and analitic thinker with ability to find beauty and usability in interfaces. As a psychology passionate I'm able to look closer into human emotions. Tools like Figma allow me to deliver functional and good looking layouts. My role is to put user on the first place, trying to understand his needs on the highest level possible.",
        img: designCode,
        order: 'right',
        properties: ['position_aspect_ratio: 1 / 3', 'paragraph_color_hex_value: B9B9B9', 'background_color_hex_value: 0A080C'],
        codeTitle: 'Figma_Properties:'
    },
    {
        title: {
            small: 'Front-End',
            big: 'Developer'
        },
        name: 'Filip Ferencz',
        p: 'Working with frameworks like React, Redux, Tailwind CSS, developing views for clients based on the design and prepared for the back-end functionality. Integrating data such as from api, rendering applications and websites based on reusable components. Defining logistic and structure of created product.',
        img: backendCode,
        order: 'left',
        properties: ['const [logged, setLogged] = useState(false)', 'onSubmit = () => setLogged(true)', "return navigate( ' /profile ' )"],
        codeTitle: 'function Header(props) {'
    },
    {
        title: {
            small: 'Back-End',
            big: 'Developer'
        },
        name: 'Sebastian Magnucki',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet interdum sed nibh orci, auctor. Dignissim donec neque ullamcorper aliquet eu. Non eget adipiscing nibh arcu et. Senectus massa massa purus platea mi accumsan dapibus egestas. Nunc scelerisque integer facilisi aliquam adipiscing volutpat mauris massa.',
        img: backendCode,
        order: 'right',
        properties: ['def post(self, request):', 'password = request.data[‘password’]', 'user = User.objects.filter(email=email).first()...'],
        codeTitle: 'class LoginView(APIView):'
    },
]

export default function Roles() {
    return (
        <>
            {roles.map(role => <RoleSection {...role} key={role.title.small} />)}
        </>
    )
}

const RoleSection = props => {
    const text = useRef(null)

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
                    <h2 className='flex flex-col gap-2 text-font font-semibold'>
                        <span className='text-2xl'>{props.title.small}</span>
                        <span className='text-5xl'>{props.title.big}</span>
                    </h2>
                    <h2 className='bg-primary bg-clip-text text-lg text-transparent font-semibold'>{props.name}</h2>
                    <p className='text-fontLight leading-loose max-w-[5.5in] xl:max-w-[4in]'>{props.p}</p>
                </div>
                <div className={props.order === 'left' ? 'xl:ml-[-12vw] 2xl:ml-[-18vw] lg:mr-auto relative' : 'xl:mr-[-12vw] 2xl:mr-[-18vw] lg:ml-auto relative'}>
                    <img className='relative z-10' src={props.img} alt="" />
                    <CodeBox className={`-bottom-8 ${props.order === 'left' ? '-right-24' : '-left-24'} z-10`} title={props.codeTitle} properties={props.properties} />
                </div>
            </div>
        </section>
    )
}
