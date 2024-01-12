'use client'

import React, { useEffect, useState } from 'react';

import text1 from '../../../assets/images/japanese/1.svg'
import text2 from '../../../assets/images/japanese/2.svg'
import text3 from '../../../assets/images/japanese/3.svg'
import text4 from '../../../assets/images/japanese/4.svg'
import text5 from '../../../assets/images/japanese/5.svg'
import text6 from '../../../assets/images/japanese/6.svg'
import text7 from '../../../assets/images/japanese/7.svg'
import text8 from '../../../assets/images/japanese/8.svg'
import text9 from '../../../assets/images/japanese/9.svg'
import Image from 'next/image';

const texts = [
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
]

export default function JapaneseText({ loadingState }: {loadingState: number}) {

    const [progressState, setProgressState] = useState(0);

    useEffect(() => {
        // Calculate the corresponding progressState value
        const newProgressState = 436 * (1 - loadingState / 100);
        setProgressState(newProgressState);
    }, [loadingState]); // This hook runs every time loadingState changes

    return (
        <div>
            <div className="relative flex md:gap-2 items-center">
                {
                    texts.map((text, index) => (
                            <Image
                                src={text}
                                alt={`Japanese text ${index}`}
                                key={index}
                                className='h-[20px] md:h-[40px]'
                            />
                    ))
                }
                <div
                    className={`absolute top-0 right-0 bottom-0 loading-bg bg-white`}
                    style={{
                        left: progressState + 'px',
                        borderTopLeftRadius: "50px",
                        borderBottomLeftRadius: "50px"
                    }}  
                >
                </div>
            </div>
        </div>
    )
}