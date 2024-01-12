import Image from "next/image"

import image1 from "../../../assets/images/about/img-1.png"
import box1 from "../../../assets/images/about/box-1.png"
import box1of2 from "../../../assets/images/about/box-2-1.png"
import box2of2 from "../../../assets/images/about/box-2-2.gif"
import image2 from "../../../assets/images/about/img-2.png"
import box3 from "../../../assets/images/about/box-3.png"
import image3 from "../../../assets/images/about/img-3.png"
import box1of4 from "../../../assets/images/about/box-4-1.png"
import box2of4 from "../../../assets/images/about/box-4-2.png"
import image4 from "../../../assets/images/about/img-4.png"
import box5 from "../../../assets/images/about/box-5.png"
import image5 from "../../../assets/images/about/img-5.png"
import box6 from "../../../assets/images/about/box-6.png"
import box7 from "../../../assets/images/about/box7.png"


export default function AboutBoxes() {

    const imagesStyles ='h-[129.151px] w-[106.895px] md:w-[213.79px] md:h-[258.302px] flex-shrink-0'

    return (
        <div className="flex justify-center uppercase">
            <div className="flex flex-col gap-3 container text-[7px] leading-1 sm:text-[8px] md:text-[12px] lg:text-[16px] overflow-hidden">

                {/* BOX 1 */}
                <div className="relative mt-[26%] md:mt-52">
                    <Image src={image1} alt="Image 1" className={imagesStyles} />
                    <div className="absolute top-[-80%] left-[13%] xl:left-[11%]">
                        <Image src={box1} alt="Image 1" className="w-[600px] md:w-[900px]" />
                        <div className="absolute top-[17%] left-[21%] right-[21%] bottom-[44%] flex items-center overflow-hidden">
                            <div>
                                <p className="text-yellow lg:text-2xl">We all know the moments.</p>
                                <p className="text-white">
                                    Whether you're daydrinking to cool off in a sweat-soaked cosplay, getting in the mood for a convention rave, or wandering a dimly lit street pretending you're skulking a cyberpunk Neo Tokyo...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* BOX 2 */}
                <div>
                    <div className="flex flex-row-reverse relative mt-36">
                        <div className="absolute top-[-20%] right-[11%]">
                            <Image src={box1of2} alt="Image 2" className="w-[400px] md:w-[600px]" />
                            <div className="absolute top-[-59px] left-[-65px]">
                                <Image src={box2of2} alt="Image 2" className="w-[100px] md:w-[160px]" />
                            </div>
                            <div className="absolute top-[21%] left-[14%] right-[22%] bottom-[18%] flex items-center">
                                <div>
                                    <p className="text-white">
                                        it's all about immersing yourself in the captivating worlds of anime and vidya.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image src={image2} alt="Image 2" className={imagesStyles} />
                    </div>
                </div>


                {/* BOX 3 */}
                <div className="relative my-20 md:my-36">
                    <Image src={image3} alt="Image 1" className={imagesStyles} />
                    <div className="absolute top-[-65%] left-[11%]">
                        <Image src={box3} alt="Image 1" className="w-[900px]" />
                        <div className="absolute top-[15%] left-[19%] right-[31%] bottom-[56%] flex items-center">
                            <p className="text-white">
                                AND WHAT BETTER WAY TO ENHANCE YOUR GAMING AND ANIME EXPERIENCES THAN WITH A DRINK THAT NOT ONLY TASTES AND FEELS LIKE IT'S STRAIGHT OUT OF YOUR FAVORITE SERIES?
                            </p>
                        </div>
                        <div className="absolute top-[45%] font-bold left-[66%] right-[17%] bottom-[37%] flex items-center">
                            <p className="text-yellow lg:text-2xl lg:leading-6">
                                That's where we come in.
                            </p>
                        </div>
                        <div className="absolute top-[64%] font-bold left-[45%] right-[17%] bottom-[10%] flex items-center">
                            <p className="text-white lg:leading-6">
                                We're passionate about bringing your wildest anime dreams to life, one sip at a time.
                            </p>
                        </div>
                    </div>
                </div>


                {/* BOX 4 */}
                <div>
                    <div className="relative mt-52">
                        <Image src={image4} alt="Image 2" className={imagesStyles} />
                        <div className="absolute bottom-[53%] left-[10.5%]">
                            <Image src={box1of4} alt="Image 2" className="w-[670px]" />
                            <div className="absolute top-[-59px] right-[-45px]">
                                <Image src={box2of2} alt="Image 2" className="w-[106.206px] md:w-[160px] rotate-[-115deg]" />
                            </div>
                            <div className="absolute top-[-70px] right-[-45px]">
                                <Image src={box2of4} alt="Image 2" className="w-[170px]" />
                            </div>
                            <div className="flex items-center absolute top-[10%] left-[24%] right-[9%] bottom-[22%]">
                                <div className="flex flex-col gap-2">
                                    <p className="text-yellow lg:text-2xl">
                                        Introducing 'No Tea in Paradise'
                                    </p>
                                    <p className="text-white">
                                        a tea-based alcoholic drink crafted with love and care from our waifus to provide you with an authentic anime-inspired encounter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOX 5 */}
                <div>
                    <div className="flex flex-row-reverse relative mt-36">
                        <div className="absolute top-[-85%] right-[10%]">
                            <Image src={box5} alt="Image 2" className="w-[630px]" />
                            <div className="absolute bottom-[-13%] left-[-8%]">
                                <Image src={box2of2} alt="Image 2" className="w-[106.206px] md:w-[187px] rotate-[-120deg]" />
                            </div>
                            <div className="absolute top-[14%] left-[12%] right-[20%] bottom-[13%] flex items-center justify-center">
                                <div className="flex flex-col gap-3">
                                    <p className="text-yellow lg:text-2xl">
                                        Our unique concoction comes in three delicious fruit flavors
                                    </p>
                                    <p className="text-white">
                                        each carefully designed to transport you to the enchanting realms of your past experiences and future dreams.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image src={image5} alt="Image 2" className={imagesStyles} />
                    </div>
                </div>
                

                {/* BOX 6 */}
                <div className="relative my-36">
                    <Image src={image3} alt="Image 1" className={imagesStyles} />
                    <div className="absolute top-[-70%] left-[10.5%]">
                        <Image src={box6} alt="Image 1" className="w-[900px]" />
                        <div className="absolute top-[10%] left-[15%] right-[42%] bottom-[59%] flex items-center justify-center">
                            <p className="lg:text-2xl text-white">
                                <span className="text-yellow">With 'No Tea in Paradise'</span> you can savor the essence of anime with every can.
                            </p>
                        </div>
                        <div className="absolute top-[47%] font-bold left-[41%] right-[3%] bottom-[21%] flex items-center justify-center">
                            <p className="text-white lg:leading-6">
                             So, whether you're sipping under the cherry blossoms, raising a glass at a cosplay gathering, or simply unwinding at home while binge-watching your latest obsession, we've got the perfect drink to accompany your anime adventures.
                            </p>
                        </div>
                    </div>
                </div>


                {/* BOX 7 */}
                <div>
                    <div className="flex flex-row-reverse relative my-20 md:my-48">
                        <div className="absolute bottom-[-7%] right-[10%]">
                            <Image src={box7} alt="Image 2" className="w-[870px]" />
                            <div className="absolute right-[0%] md:right-[6%] top-[-29%] md:top-[-12%]">
                                <Image src={box2of2} alt="Image 2" className="w-[106.206px] md:w-[154px] rotate-[-120deg]" />
                            </div>
                            <div className="absolute top-[4%] left-[45%] right-[14%] bottom-[56%] flex items-center justify-center">
                                <p className="lg:text-2xl text-white">
                                    <span className="text-yellow">Join us on this exciting journey</span> through the flavors and imagination of anime.
                                </p>
                            </div>
                            <div className="absolute top-[45%] left-[15%] right-[60%] bottom-[23%] flex items-center justify-center">
                                <p className="lg:text-2xl text-yellow">
                                    'no tea in paradise' is not just a drink 
                                </p>
                            </div>
                            <div className="absolute top-[65%] left-[43%] right-[15%] bottom-[11%] flex items-center justify-center">
                                <p className="text-white">
                                    it's a portal (not an isekai truck) to the fantastical worlds you adore.
                                </p>
                            </div>
                        </div>
                        <Image src={image2} alt="Image 2" className={imagesStyles} />
                    </div>
                </div>

            </div>
        </div>
    )
}