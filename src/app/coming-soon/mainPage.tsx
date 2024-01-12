'use client'

import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/Logo.svg"
import arrow from "../../assets/images/arrow.svg"
import AgeVerificationModal from "./ageVerificationModal";

export default function ComingSoon() {
    const [showModal, setShowModal] = useState(true);
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(email);
    }

    return (
        <div>
            <main className="bg-coming-soon h-full absolute w-full flex items-center justify-center">
                <div className="absolute top-0 py-8 flex justify-center">
                    <Image 
                        src={logo} 
                        alt="No tea in Paradise" 
                        className="w-[150px] md:w-[400px]" 
                    />
                </div>
                <div className="flex flex-col gap-3 -translate-y-12 md:-translate-y-10">
                    <h1 className='text-5xl text-red shadow-text-lg text-[70px] md:text-[150px]'>Coming Soon</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                        <input 
                            type="email" 
                            className="h-[60px] w-full p-5"
                            placeholder="Enter Your E-mail Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn-red btn-primary w-32 self-end text-white h-[60px] flex items-center justify-center">
                            sign up
                            <Image 
                                src={arrow} alt="Arrow" className="w-6 h-6 ml-2" 
                            />
                        </button>
                    </form>
                </div>
                <div className="absolute overflow-hidden bottom-0 md:bottom-0 left-0 right-0 h-[220px] md:h-[280px]">
                    <div 
                        className="coming-soon-bottom-carousel"
                    />
                </div>
            </main>
            <AgeVerificationModal  
                show={showModal}
                onConfirm={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
            />
        </div>
    )
}   