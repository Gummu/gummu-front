import { useState } from "react";

export const Player = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="w-screen">

            {/* music cover and title */}
            <div className="flex items-center h-24">
                <div className="song w-52">
                    <div className="flex items-center">
                        <div className="w-24 h-24 p-4">
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
                <div className="player grow h-full flex flex-col pt-2">
                    <div className="controls flex">
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
                    <div className="progress flex">
                        <div className="m-auto">
                            <input type="range" className="w-[1700px] max-w-screen-md range" value={20} />
                        </div>
                    </div>
                </div>

                {/* volume and repeat */}
                <div className="volume flex-none w-52 pt-10">
                    {/* <div className="flex items-center">
                        <div className="w-24 h-24 bg-red-500"></div>
                    </div> */}
                </div>
            </div>


        </div>
    );
};
