import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className='bg-primary text-font flex flex-col items-center justify-center text-center w-full py-24 gap-6'>
            <h3 className='bg-[linear-gradient(269.56deg,#CD80EF_10.32%,#8F8DFF_134.48%,#4D59FC_134.5%)] bg-clip-text text-transparent font-medium'>No job is done perfect until you work with us.</h3>
            <h2 className="font-semibold text-3xl md:text-5xl">DivideProject offers you the best service</h2>
            <ul className='flex items-center font-medium gap-4 list-disc list-inside'>
                <li>Websites</li>
                <li>Web Apps</li>
                <li>Mobile Apps</li>
                <li>UI / UX Design</li>
                <li>Web Development Consultation</li>
            </ul>
            <Link className="px-3 mt-5 after:block after:h-[1px] after:mt-2 after:bg-white" to='/contact'>Contact us</Link>
        </div>
    )
}