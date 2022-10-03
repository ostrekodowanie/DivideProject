import { useState, useEffect, useRef } from "react"
import { logo } from "../assets/header"
import CustomLink from "./CustomLink"
import { Link } from 'react-router-dom' 
import { useLocation } from 'react-router'
import { arrowLeft } from "../assets/home"

export default function Header() {
    const [scroll, setScroll] = useState(0)
    const timer = useRef()

    // useEffect(() => {
    //     // debouncing scroll position
    //     let callback = () => {
    //         clearTimeout(timer.current)
    //         if(scroll > 100) {
    //             timer.current = setTimeout(() => {
    //                 setScroll(window.scrollY)
    //             }, 500)
    //         } else return setScroll(window.scrollY)
    //     }
    //     window.addEventListener('scroll', callback)
    //     return () => window.removeEventListener('scroll', callback)
    // })

    return (
        <header className={`fixed top-0 right-0 transition-colors duration-300 left-0 z-50 ${scroll < 100 ? 'bg-transparent' : 'bg-background/90'}`}>
            <div className="padding min-h-[6rem] sm:min-h-[7rem] flex items-center justify-between relative w-full">
                <Logo />
                <NavProvider />
            </div>
        </header>
    )
}

const NavProvider = () => {
    const [nav, setNav] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setNav(false)
        window.scrollTo(0, 0)
    }, [location])

    return (
        <>
            <Navbar nav={nav} />
            <Burger nav={nav} setNav={setNav} />
        </>
    )
}

const Logo = () => <Link to='/'><img className="max-h-7" src={logo} alt='' /></Link>

const Navbar = ({ nav }) => {
    return (
        <nav className={`${nav ? '-translate-x-full' : ''} transition-transform duration-300 absolute left-full h-screen w-full top-0 bg-background flex flex-col gap-4 items-center justify-center sm:static sm:justify-end sm:flex-row sm:left-auto sm:bg-transparent sm:h-full sm:w-auto sm:gap-8 text-sm`}>
            <CustomLink className='text-font' to='/'>Home</CustomLink>
            <CustomLink className='text-font' to='/portfolio'>Portfolio</CustomLink>
            <CustomLink className='text-font' to='/contact'>Contact us</CustomLink>
            <a className="py-2 px-5 text-font font-medium rounded-3xl bg-primary transition-transform hover:scale-105 flex items-center" href='https://services.divideproject.works' target='_blank'>View shop<img className="ml-3 max-h-[1em]" src={arrowLeft} alt="" /></a>
        </nav>
    )
}

const Burger = ({ nav, setNav }) => {
    return (
        <div className="flex flex-col justify-between h-6 w-8 relative sm:hidden z-50" onClick={() => setNav(prev => !prev)}>
            <div className={`h-[2px] bg-primary w-full  transition duration-300 ${nav ? 'absolute top-[50%] rotate-45 translate-y-[-50%]' : ''}`} />
            <div className={`h-[2px] bg-primary transition duration-300 ${nav ? 'hidden' : ''}`} />
            <div className={`h-[2px] bg-primary w-full transition duration-300 ${nav ? 'absolute top-[50%] -rotate-45 translate-y-[-50%]' : ''}`} />
        </div>
    )
}