import { Link } from "react-router-dom";
import { logo } from "../assets/header";

export default function Footer() {
    return (
        <footer className="bg-background padding py-12">
            <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Divide Project</h3>
                    <p className="text-white/[0.62] text-sm">+48 666 278 116</p>
                    <p className="text-white/[0.62] text-sm">divideproject.business@gmail.com</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Website</h3>
                    <Link to='/' className="text-white/[0.62] text-sm">Home</Link>
                    <Link to='/portfolio' className="text-white/[0.62] text-sm">Portfolio</Link>
                    <Link to='/contact' className="text-white/[0.62] text-sm">Contact us</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Products</h3>
                    <a href='https://services.divideproject.works/products' target='_blank' className="text-white/[0.62] text-sm">Apps</a>
                    <a href='https://services.divideproject.works/products' target='_blank' className="text-white/[0.62] text-sm">Templates</a>
                    <a href='https://services.divideproject.works/products' target='_blank' className="text-white/[0.62] text-sm">Courses</a>
                    <a href='https://services.divideproject.works/products' target='_blank' className="text-white/[0.62] text-sm">Order</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Development</h3>
                    <p className="text-white/[0.62] max-w-[2in] text-sm leading-relaxed">Website fully produced by our team.</p>
                    <img className="w-16 mt-2" src={logo} alt="" />
                </div>
            </div>
        </footer>
    )
}