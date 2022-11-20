import React from "react";
import image from '../images/image.png'


export default function HeroSection() {
    return (

        <div className="grid flex-1 grid-cols-1">
            <div className="ml-[10px] w-[686px] h-[390px] rounded-[10px] bg-[#609eaf77] flex z-0 row-start-1 col-start-1 blur-xl">
            </div>

            <div className="relative w-[686px] h-[373px] rounded-[10px] bg-[#609EAF] flex z-10 row-start-1 col-start-1">
                <div className="flex flex-col flex-auto justify-between h-full space-y-[85px] pl-[45px] pb-[45px] z-10 w-3/5">
                    <p className="flex-auto mt-[48px]">Currated playlist</p>

                    <div className="flex-auto">
                        <p className="font-bold font-Quicksand text-[35px] leading-[120%]">
                            Claim your Massa
                        </p>
                        <p className="font-[400px] text-[14px]">
                            Your earned 52 Massa since last month.
                        </p>
                    </div>

                    <div className="flex flex-auto space-x-1">
                        <p>Learn More!</p>
                    </div>
                </div>

                <div className="relative z-0" name="background">
                    <img src={image} className="h-[373px]" alt="qwerty" />
                </div>
            </div>
        </div>
    );
}