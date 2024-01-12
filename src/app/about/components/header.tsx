import Image from "next/image"
import logoBlue from "../../../assets/images/logo-blue.png"
import cloud from "../../../assets/images/about/cloud.gif"
import paintStroke from "../../../assets/images/paint-stroke.png"

export default function AboutHeader() {
  return (
    <div className="flex flex-col items-center">
        <div className="pt-10">
            <Image src={logoBlue} alt="No tea in Paradise" className="w-[150px] md:w-[400px]"  />
        </div>
        <div className="relative flex justify-center">
            <Image src={cloud} alt="Cloud" className="max-w-[300px] md:max-w-[485px] lg:max-w-[785px]" />
            <div className="absolute flex items-center justify-center top-[28%] md:top-[3%] lg:top-[90px]">
                <Image src={paintStroke} alt="Paint Stroke" className=" md:h-[260px] max-w-[350px] md:max-w-[600px] lg:max-w-[1000px]" />
                <p className="absolute font-apocalypse text-yellow text-[24px] md:text-[35px] lg:text-[55px] shadow-text leading-7 md:leading-[60px] text-center">
                    We're in it for those <br />
                    weeb-fueled fantasies
                </p>
            </div>
        </div>
    </div>
  );
}