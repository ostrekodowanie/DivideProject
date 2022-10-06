import { designCode, react } from "../../assets/home"

const tools = [
    {
        title: 'React',
        p: 'JavaScript framework used to create user interfaces',
        img: react,
        href: 'https://reactjs.org/'
    },
    {
        title: 'Django',
        p: 'High-level Python web framework',
        img: react,
        href: 'https://www.djangoproject.com/'
    },
    {
        title: 'Figma',
        p: 'Collaboration design tool to create high-quality work',
        img: react,
        href: 'https://www.figma.com/'
    },
    {
        title: 'PostgreSQL',
        p: 'Object-relational database system',
        img: react,
        href: 'https://www.postgresql.org/'
    }
]

export default function Tools() {
    return (
        <section className='padding py-[1in] xl:py-[1.4in] gap-8 flex flex-col bg-background bg-landing'>
            <div className='flex flex-col xl:flex-row xl:items-center gap-16 xl:gap-48'>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-font text-3xl xl:text-4xl font-semibold mb-8'>What do we use?</h2>
                    <div className="flex flex-col sm:grid grid-cols-2 gap-8">
                        {tools.map(tool => <Tool {...tool} key={tool.title} />)}
                    </div>
                </div>
                <div className='xl:mr-[-12vw] 2xl:mr-[-18vw] lg:ml-auto relative'>
                    <img className='relative z-10' src={designCode} alt="" />
                </div>
            </div>
        </section> 
    )
}

const Tool = props => {
    return (
        <a href={props.href} target='_blank' className="flex flex-col tool opacity-0 items-start p-6 transition duration-[250ms] backdrop-blur-md bg-tools cursor-pointer border-[2px] border-transparent max-w-[4in] hover:border-[#B91DFF]/10 rounded-md hover:bg-[#12081C] hover:scale-105 gap-2">
            <img className="max-h-[2em] mb-2" src={props.img} alt="" />
            <h3 className="text-font text-lg font-medium">{props.title}</h3>
            <p className="text-sm text-fontLight font-medium">{props.p}</p>
        </a>
    )
}
