import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
    <AlbumCard image={"/laylow1.jpeg"} title={"LHDMA"} />,
    <AlbumCard image={"/laylow2.jpeg"} title={"Trinity"} />,
    <AlbumCard image={"/laylow3.jpeg"} title={".RAZ-Z"} />,
    <AlbumCard image={"/laylow4.jpeg"} title={".RAW"} />,
    <AlbumCard image={"/laylow5.jpeg"} title={"Digitalova"} />,
    <AlbumCard image={"/laylow6.jpeg"} title={"Mercy"} />,
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
