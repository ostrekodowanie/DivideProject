import { useEffect, useState } from "react"
import { first, fourth, second, third } from "../assets/grid"

export default function Portfolio() {
    
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] md:py-[1.8in] gap-20 bg-landing'>
            <Live />
            <Grid />
        </section>
    )
}

const Live = () => {
    const [alert, setAlert] = useState('')
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(() => setAlert("Try again later"))
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="bg-primary bg-clip-text font-medium text-transparent tracking-wider text-lg">WITH LIVE VIEW</h3>
                <h2 className="text-font text-4xl lg:text-5xl font-medium">Projects</h2>
            </div>
            <div className="flex flex-col sm:grid grid-cols-projects gap-x-6 gap-y-12">
                {alert ? <p className="text-red-400">{alert}</p> : <></>}
                {projects.map(project => <LiveProject {...project} key={project.id} />)}
            </div>
        </div>
    )
}

const LiveProject = props => {
    return (
        <div className='p-6 flex flex-col rounded-xl font-medium gap-6 bg-pros backdrop-blur-md after:absolute after:h-[3px] after:bg-primary after:left-0 after:right-0 after:bottom-0 border-[2px] border-[#B91DFF]/10'>
            <img className="rounded-md" src={props.image} alt="" />
            <div className="flex flex-col gap-2">
                <h4 className="text-font">{props.name}</h4>
                <h5 className="text-sm text-fontLight">Project type: <span className="text-font">{props.type}</span></h5>
                <h5 className="text-sm text-fontLight">Tools used: {props.technologies.map((tool, i) => <span className="text-font">{tool}{i === props.technologies.length - 1 ? '' : ', '}</span>)}</h5>
            </div>
            <a className="bg-primary text-sm bg-clip-text text-transparent max-w-max after:h-[1px] after:scale-x-[.3] after:origin-left after:transition after:ease-out hover:after:scale-x-100 after:block after:bg-primary mb-4" href={props.link} target='_blank'>Live View</a>
        </div>
    )
}

const gridItems = [
    first,
    second,
    third,
    fourth
]

const CoverSlider = ({ activeImage, setSliderImage }) => {
    const [active, setActive] = useState(activeImage)
    return (
        <div className="fixed backdrop-blur-md z-50 bg-pros inset-0 hidden md:flex items-center justify-center">
            <div onClick={() => setSliderImage(null)} className="absolute cursor-pointer bg-blur text-white font-bold h-12 w-12 right-12 top-12 rounded-full flex items-center justify-center">X</div>
            <img className="h-[60vh] w-[40vw] mb-16 rounded-xl object-cover" src={active} alt="" />
            <div className="absolute bottom-12 flex items-center gap-4">
                {gridItems.map((project, i) => i % 2 !== 0 || i === 0 ? <img onClick={() => setActive(project)} className="max-h-[1in] cursor-pointer rounded hover:scale-105 transition-transform" src={project} key={project} /> : <></>)}
            </div>
        </div>
    )
}

const Grid = () => {
    const [sliderImage, setSliderImage] = useState(null)
    return (
        <div className="flex flex-col gap-8">
            {sliderImage && <CoverSlider activeImage={sliderImage} setSliderImage={setSliderImage} />}
            <div className="flex flex-col gap-4">
                <h3 className="bg-primary bg-clip-text text-transparent font-medium tracking-wider text-lg">DESIGN PRESENTATION</h3>
                <h2 className="text-font text-4xl lg:text-5xl font-medium">Layouts</h2>
            </div>
            <div className="flex flex-col sm:grid grid-cols-2 gap-8">
                {gridItems.map((project, i) => <GridItem setSliderImage={setSliderImage} src={project} size={i % 2 === 0 && i !== 0 ? 'wide' : 'narrow'} key={project} />)}
            </div>
        </div>
    )
}

const GridItem = ({ src, size, setSliderImage }) => {
    return (
        <div onClick={() => size === 'narrow' && setSliderImage(src)} className={`rounded-xl gridItem bg-pros backdrop-blur-md p-6 ${size === 'wide' ? 'col-span-2' : 'hover:scale-[1.02] cursor-pointer transition-transform duration-300'}`}>
            <img className={`object-cover rounded-xl w-full ${size === 'narrow' && 'max-h-[4.2in]'}`} src={src} alt="" />
        </div>
    )
}

