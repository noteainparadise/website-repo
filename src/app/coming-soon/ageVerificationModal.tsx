import Image from "next/image";
import textBox from "../../assets/images/text-box.png";
import skull1 from "../../assets/images/skull-1.png";
import skull2 from "../../assets/images/skull-2.png";

export default function AgeVerificationModal({ show, onConfirm, onCancel }: {show: boolean, onConfirm: () => void, onCancel: () => void}) {

    if(!show) return null;
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#0a090966] backdrop-blur-md flex items-center justify-center z-20">
            <div className="relative">
                <Image src={textBox} alt="Text Box" className="max-w-[300px] md:max-w-[815px]" />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col md:gap-8 items-center translate-y-[70px] md:translate-y-[160px]">
                    <p className="text-white shadow-text md:text-[90px] md:leading-[83px]">
                        Are you <br /> Over 21?
                    </p>
                    <div className='flex gap-1 md:gap-5'>
                        <button onClick={onCancel} className="relative action-btn w-20 md:w-32  md:p-5 uppercase">
                            No
                            <Image src={skull1} alt="Skull" className="absolute -top-5 -left-5 w-10 h-10" />
                        </button>
                        <button onClick={onConfirm} className="relative action-btn w-20 md:w-32 md:p-5 uppercase">
                            Yes
                            <Image src={skull2} alt="Skull" className="absolute -top-5 -right-5 w-10 h-10" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}