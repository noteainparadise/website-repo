'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import instaImg from "../../assets/images/insta.svg";
import twitterImg from "../../assets/images/twitter.svg";
import tiktokImg from "../../assets/images/tiktok.svg";


const SOCIALS = [
    {
        name: "Instagram",
        link: "https://www.instagram.com/notearadio/",
        icon: instaImg
    },
    {
        name: "Twitter",
        link: "https://twitter.com/notearadio",
        icon: twitterImg
    },
    {
        name: "TikTok",
        link: "https://www.tiktok.com/@notearadio",
        icon: tiktokImg
    }

]
export default function Footer() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <footer className={`border-t-2 border-t-black ${pathname==='/coming-soon' ? "bg-red" : "bg-blue"} py-5 z-10`}>
            <div className="flex items-center justify-center gap-10">
                {
                    SOCIALS.map((social, index) => {
                        return (
                            <a href={social.link} target="_blank" rel="noreferrer" key={index} className="text-white">
                                <div className="flex gap-2 text-md md:text-2xl shadow-text uppercase">
                                    {/* @ts-ignore */}
                                    <Image src={social.icon} alt={social.name} width='auto' className="w-6 h-6" />
                                    <p>{social.name}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </footer>
    )
}