import Image from "next/image";

import bottomImg from "../../../assets/images/about/about-bottom.png";
import paintStroke from "../../../assets/images/paint-stroke.png";
import arrow from "../../../assets/images/arrow.svg";

export default function AboutBottom() {
    return (
        <div>
            <div className="pb-28 md:pb-80">
                <div className="flex justify-center -mb-20">
                    <Image src={bottomImg} alt="Cloud" className="" />
                </div>
                <div className="relative flex justify-center">
                    <div className="absolute flex items-center justify-center ">
                        <Image src={paintStroke} alt="Paint Stroke" className="" />
                        <p className="absolute font-apocalypse text-yellow text-[24px] md:text-[35px] lg:text-[55px] shadow-text leading-7 md:leading-[60px] text-center">
                            Let's embark on this flavorful <br /> 
                            adventure together!
                        </p>
                    </div>
                </div>
            </div>
            <div className="font-apocalypse flex justify-center pb-10">
                <button className="btn-blue px-10 flex items-center">
                    Buy Drinks Here
                    <Image src={arrow} alt="Arrow" className="ml-5" />
                </button>
            </div>
        </div>
    )
}