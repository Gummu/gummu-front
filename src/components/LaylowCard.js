import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import album1 from "../images/laylow1.jpeg";
import album2 from "../images/laylow2.jpeg";
import album3 from "../images/laylow3.jpeg";
import album4 from "../images/laylow4.jpeg";
import album5 from "../images/laylow5.jpeg";
import album6 from "../images/laylow6.jpeg";

function AlbumCard(props) {
    return (
        <div className="flex-1 flex w-[210px] h-[240px] flex-col space-y-[1px] albumcard !justify-center">
            <div className="m-auto">
                <img
                    src={props.image}
                    className="flex-none w-[210px] h-[210px] mb-[5px] rounded-sm"
                    alt="popo"
                />
                <p className="flex-none font-Quicksand font-[400px] text-[20px] leading-[15px] text-center text-white">
                    {props.title}
                </p>
            </div>
        </div>
    );
}

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    1024: { items: 9 },
};

const items = [
    <AlbumCard image={album1} title={"LHDMA"} />,
    <AlbumCard image={album2} title={"Trinity"} />,
    <AlbumCard image={album3} title={".RAZ-Z"} />,
    <AlbumCard image={album4} title={".RAW"} />,
    <AlbumCard image={album5} title={"Digitalova"} />,
    <AlbumCard image={album6} title={"Mercy"} />,
];

export default function LaylowCard() {
    return (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls={true}
            controlsStrategy="alternate"
        />
    );
}
