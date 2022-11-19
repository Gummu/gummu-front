import React from "react";
import song1 from "../images/song1.png"
import song2 from "../images/song2.png"
import song3 from "../images/song3.png"

export default function ChartCard() {
    return (
        <div className="bg-dark_alt rounded-[20px] flex space-x-[14px] py-[17px]">
            <div className="flex-none px-[17px]">
                <img src={song1} className="w-[63px] h-[63px]" />
            </div>
            <div className="flex flex-col flex-1">
                <p className="font-bold font-Quicksand text-[17px] leading-[120%] mb-[4px]">Golden age of 80s</p>
                <p className="font-[400px] font-Quicksand text-[12px] leading-[120%] mb-[8px]">Sean swadder</p>
                <p className="font-[400px] font-Quicksand text-[12px] leading-[120%]">2:34:45</p>
            </div>

            <div className="flex flex-none justify-center items-center pr-[21px]">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.5" cy="18.5" r="18" stroke="white" stroke-opacity="0.11" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1539 19.6987C11.3491 17.1862 12.2896 14.3145 14.9274 13.4647C16.3149 13.017 17.8464 13.281 18.9999 14.1487C20.0911 13.305 21.6789 13.02 23.0649 13.4647C25.7026 14.3145 26.6491 17.1862 25.8451 19.6987C24.5926 23.6812 18.9999 26.7487 18.9999 26.7487C18.9999 26.7487 13.4484 23.7277 12.1539 19.6987Z" stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.4" d="M22 16.025C22.8025 16.2845 23.3695 17.0008 23.4377 17.8415" stroke="#FACD66" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </div>
    )
}