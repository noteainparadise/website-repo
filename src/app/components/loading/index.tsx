'use client';

import Image from "next/image";
import logo from "../../../assets/images/Logo.svg"
import LoadingCan from "./loadingCan";
import JapaneseText from "./japaneseText";
import { useEffect, useState } from "react";

export default function Loading({ loadingState }: {loadingState: number}) {
    return (
        <div className="flex flex-col items-center justify-center absolute min-h-full w-full loading-bg">
            {/* <div className="relative "> */}
                <div className="absolute top-0 py-8 flex justify-center">
                    <Image src={logo} alt="No tea in Paradise" 
                        className="w-[150px] md:w-[400px]" 
                    />
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-10 px-2">
                    <LoadingCan 
                        loadingState={loadingState}
                    />
                    <JapaneseText 
                        loadingState={loadingState}
                    />
                </div>
            {/* </div> */}
        </div>
    )
}