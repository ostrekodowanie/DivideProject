import { useEffect, useState } from "react"

const syf = [1]

export default function Portfolio() {
    
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] md:py-[1.8in] gap-20 bg-landing'>
            <Live />
            <Design />
        </section>
    )
}

const Live = () => {
    const [alert, setAlert] = useState('')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data.filter(project => project.type === 'Website WWW')))
            .catch(() => setAlert("Try again later"))
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="bg-primary bg-clip-text font-medium text-transparent tracking-wider text-lg">WITH LIVE VIEW</h3>
                <h2 className="text-font text-4xl lg:text-5xl font-medium">Projects</h2>
            </div>
            <div className="flex flex-col sm:grid grid-cols-projects">
                {alert ? <p className="text-red-400">{alert}</p> : <></>}
                {projects.map(project => <LiveProject {...project} key={project.id} />)}
            </div>
        </div>
    )
}

const LiveProject = props => {
    return (
        <div className='p-6 flex flex-col rounded-xl font-medium gap-6 bg-pros backdrop-blur-md after:absolute after:h-[3px] after:bg-primary after:left-0 after:right-0 after:bottom-0 border-[2px] border-[#B91DFF]/10'>
            <img className="rounded-xl" src={props.image} alt="" />
            <div className="flex flex-col gap-3">
                <h4 className="text-font">{props.name}</h4>
                <h5 className="text-sm text-fontLight">Project type: <span className="text-font">{props.type}</span></h5>
                <h5 className="text-sm text-fontLight">Tools used: {props.tools.map(tool => <span className="text-font">{tool}, </span>)}</h5>
            </div>
            <a className="bg-primary bg-clip-text text-transparent underline" href={props.link} target='_blank'></a>
        </div>
    )
}

const Design = () => {
    const [projects, setProjects] = useState([])
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="bg-primary bg-clip-text text-transparent font-medium tracking-wider text-lg">DESIGN PRESENTATION</h3>
                <h2 className="text-font text-4xl lg:text-5xl font-medium">Projects</h2>
            </div>
            <div className="flex flex-col sm:grid grid-cols-projects">
                {/* {projects.map(project => <DesignImage src={project.src} key={project.src} />)} */}
            </div>
        </div>
    )
}

const DesignImage = ({ src }) => {
    return (
        <div className="rounded-xl bg-pros backdrop-blur-md">
            <img src={src} alt="" />
        </div>
    )
}