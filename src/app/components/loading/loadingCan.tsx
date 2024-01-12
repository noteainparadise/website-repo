'use client';

import Image from "next/image";
import LoadingCanEmpty from "../../../assets/images/loading-can-empty.svg"


export default function LoadingCan({ loadingState }: {loadingState: number}) {
    return (
        <div 
            className="relative w-[30px] h-[32px]"
        >
            <div 
                className={`absolute bg-[#F93E51] w-full fill-up`}
                style={{
                    borderStartEndRadius: "5px",
                    borderStartStartRadius: "5px",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    top: loadingState + "px",
                }}
            />
            <Image 
                src={LoadingCanEmpty} 
                alt="Loading Can" 
                priority
                height={64}
                className="absolute top-[-8px] left-0 right-0 bottom-0"
            />
        </div>
    )
}