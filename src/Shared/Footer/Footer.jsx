import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="lg:px-0 md:px-5 px-3 grid md:grid-cols-2 grid-cols-1">
                <div className="bg-gray-800 flex justify-center md:py-28 py-20">
                    <div className="text-center">
                        <h1 className="md:text-4xl text-2xl uppercase">Contact Us</h1>
                        <div className="mt-5 space-y-3">
                            <p className="md:text-base text-sm">123 ABS Street, Uni 21, Bangladesh</p>
                            <p className="md:text-base text-sm">+88 01751725042</p>
                            <p className="md:text-base text-sm">Mon - Fri: 08:00 - 22:00</p>
                            <p className="md:text-base text-sm">Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 flex justify-center md:py-28 py-20">
                    <div className="text-center">
                        <h1 className="md:text-4xl text-2xl">Follow Us</h1>
                        <div className='mt-6'>
                            <p className="md:text-base text-sm">Join us on social media</p>

                            <div className='flex gap-5 md:text-5xl text-3xl mt-5'>
                                <FaFacebookSquare></FaFacebookSquare>
                                <FaInstagram></FaInstagram>
                                <FaTwitterSquare></FaTwitterSquare>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-5 md:text-sm text-xs'>
                Copyright © Dolon Roy. All rights reserved
            </p>
        </footer>
    );
};

export default Footer;