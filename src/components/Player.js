import { useEffect, useState, useContext } from "react";
import { StatesContext } from "../contexts/StatesProvider";

export const Player = () => {

    const [reader, setReader] = useState(0);
    const [sec, setSec] = useState(0);

    const {setUrl, togglePlay, isPlaying} = useContext(StatesContext);


    return (
        <div className="w-screen">

            {/* music cover and title */}
            <div className="flex items-center h-24">
                <div className="w-52 song">
                    <div className="flex items-center">
                        <div className="p-4 w-24 h-24">
                            <img
                                src="https://i.scdn.co/image/ab67656300005f1f301e998c4927b7d7a6c7b224"
                                alt="cover"
                                className="rounded shadow shadow-white"
                            />
                        </div>
                        <div className="mr-4">
                            <div className="text-sm">Song Name</div>
                            <div className="text-xs">Artist Name</div>
                        </div>
                    </div>
                </div>

                {/* play/pause button */}
                <div className="flex flex-col pt-2 h-full player grow">
                    <div className="flex controls">
                        <div className="mx-auto">
                            <button className="">
                                <img
                                    src="/back.svg"
                                    alt="player"
                                    className="fill-orange-500"
                                />
                            </button>

                            <button className="mx-4" onClick={togglePlay}>
                                <img
                                    src={isPlaying ? "/pause.svg" : "/play.svg"}
                                    alt="player"
                                    className="fill-orange-500"
                                />
                            </button>

                            <button className="">
                                <img
                                    src="/next.svg"
                                    alt="player"
                                    className="fill-orange-500"
                                />
                            </button>
                        </div>
                     </div>
                    <div className="flex progress">
                        <div className="m-auto">
                            <input type="range" className="w-[1700px] max-w-screen-md range" value={reader} onChange={val => setReader(val)} max={sec}/>
                        </div>
                    </div>
                </div>

                {/* volume and repeat */}
                <div className="flex-none pt-10 w-52 volume">
                </div>
            </div>


        </div>
    );
};
