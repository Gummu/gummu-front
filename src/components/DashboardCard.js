import React from "react";


export default function DashboardCard (props) {
    return (
        <div className="w-full h-full bg-[#33373b25] flex px-[40px] py-[40px]">
            <div className="flex-none mr-[30px]">
                {props.children}
            </div>
            <div className="flex flex-col flex-1 justify-between">
                <p className="font-extrabold font-Quicksand text-[28px] leading-[24px]">{props.number}</p>
                <p className="font-bold font-Quicksand text-[14px] leading-[21px] text-[#FACD66]" >{props.description}</p>
            </div>
        </div>
    )
}

{/* Usage
            <DashboardCard number={62} description={"Listners"}>
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#6644A9" />
                    <path d="M26 44C26 40.625 30.5 40.625 32.75 38.375C33.875 37.25 30.5 37.25 30.5 31.625C30.5 27.8754 31.9996 26 35 26C38.0004 26 39.5 27.8754 39.5 31.625C39.5 37.25 36.125 37.25 37.25 38.375C39.5 40.625 44 40.625 44 44" stroke="#28176F" stroke-width="2" stroke-linecap="square" />
                </svg>

            </DashboardCard>

*/}