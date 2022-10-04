import { useEffect } from "react"

export default function Portfolio() {
    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
    }, [])
    return (
        <section className='padding bg-background flex flex-col py-[1.4in] md:py-[1.8in] gap-20 bg-landing'>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="bg-primary bg-clip-text text-transparent tracking-wider text-lg">WITH LIVE VIEW</h3>
                    <h2 className="text-font text-4xl lg:text-5xl font-medium">Projects</h2>
                </div>
                <div className="flex flex-col sm:grid grid-cols-projects">
                </div>
            </div>
        </section>
    )
}

const LiveProject = props => {
    return (
        <div className=""></div>
    )
}