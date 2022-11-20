import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import album1 from "../images/album1.png";
import album2 from "../images/album2.png";
import album3 from "../images/album3.png";
import album4 from "../images/album4.png";
import album5 from "../images/album5.png";
import album6 from "../images/album6.png";
import album7 from "../images/album7.png";
import album8 from "../images/album8.png";
import album9 from "../images/album9.png";
import album10 from "../images/album10.png";

function AlbumCard(props) {
    return (
        <div className="flex-1 flex w-[153px] h-[210px] flex-col space-y-[5px] albumcard">
            <img src={props.image} className="flex-none w-[153px] h-[153px] mb-[5px] rounded-2xl" alt="popo"/>
            <p className="flex-none font-Quicksand font-[400px] text-[12px] leading-[15px] text-white">{props.title}</p>
            <p className="flex-none font-Quicksand font-[400px] text-[12px] leading-[15px]">{props.artist}</p>
        </div>
    );
}

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    1024: { items: 9},
};

const items = [
    <AlbumCard image={album7} title={"Blind"} artist={"Wiz zee"} />,
    <AlbumCard image={album5} title={"Cancelled"} artist={"Enimen"} />,
    <AlbumCard image={album2} title={"Mountain"} artist={"Krisx"} />,
    <AlbumCard image={album6} title={"Nomad"} artist={"Makroi eli"} />,
    <AlbumCard image={album1} title={"Life in a bubble"} artist={"The van"} />,
    <AlbumCard image={album8} title={"Blind"} artist={"Wiz zee"} />,
    <AlbumCard image={album10} title={"Blind"} artist={"Wiz zee"} />,
    <AlbumCard image={album9} title={"Blind"} artist={"Wiz zee"} />,
    <AlbumCard image={album3} title={"Limits"} artist={"John Dillion"} />,
    <AlbumCard image={album4} title={"Everthing's block"} artist={"Ameed"} />,
];


export default function NewRelease() {
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

