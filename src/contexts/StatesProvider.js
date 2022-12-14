import { data } from "autoprefixer";
import React, { createContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export const StatesContext = createContext()

const artists = [
    "Artic Monkeys",
    "Radiohead",
    "The killers",
    "Riles",
    "El Grande Toto",
    "Coldplay",
    "Muse",
    "The strokes",
    "Interpol",
    "The Kooks",
    "The Shins",
    "Placebo",
    "Yeah Yeah Yeahs",
    "The white stripes",
    "Modest mouse",
    "Kings of leon",
    "MGMT",
    "Laylow",
    "Lomepal",
    "Luv Resval",
    "La fève",
    "Lil Nas X",
    "Lil Uzi Vert",
    "Leto",
    "La fouine",
    "La rumeur",
    "Larry",
    "Lady Gaga"
]

const album = [
    "Yard Act", "The Overload", "Zen F.C.", "The Wombats", "Fix Yourself, Not The World"
    , "AWAL", "Palace", "Shoals", "Fiction", "The Lumineers", "Brightside", "Universal"
    , "Fickle Friends", "Are We Gonna Be Alright?", "Cooking Vinyl / Indigo", "Fazer", "Plex", "City Slang"
    , "Blood Red Shoes", "Ghosts On Tape", "Velveteen", "The Sherlocks", "World I Understand", "Years & Years"
    , "Night Call", "Polydor", "Band Of Horses", "Things Are Great", "BMG", "Boy Harsher", "The Runner"
    , "Nude Club/City Slang", "Anna Ash", "Sleeper", "Black Mesa", "Miles Kane", "Change The Show"
    , "Eeels", "Extreme Witchcraft", "E Works", "Thyla","LMF","Les étoiles vagabondes","L'étrange Histoire de Mr Anderson"
    ,"La fête est finie","Le monde Chico","La zone en personne","La vie est belle"
]

const genre = [
    "Alternative", "Indie", "Rock", "Pop", "Punk", "Metal", "Rap", "Hip-Hop", "Jazz", "Blues", "Folk", "Country",
     "Electronic", "Techno", "House", "Dance", "Reggae", "Soul", "R&B", "Funk","Love","Latin","LO-FI,","Lounge",
]

export function StatesProvider(props) {
    const [showBubleSearch, setBubleSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [url , setUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, _] = useState(new Audio(url));

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        play();
    }
    const play = () => {
        if (isPlaying) {
            audio.pause();
        }
        else {
            console.log("AUDIO", audio);
            audio.src = url;
            audio.play();
        }
    }


    const bublesData = {
        artists: artists.filter((elt) => elt.toLowerCase().startsWith(searchTerm.toLowerCase())),
        album: album.filter((elt) => elt.toLowerCase().startsWith(searchTerm.toLowerCase())),
        genre: genre.filter((elt) => elt.toLowerCase().startsWith(searchTerm.toLowerCase())),
    }
    return (
        <StatesContext.Provider value={{showBubleSearch, setBubleSearch, bublesData, setSearchTerm, togglePlay, setUrl, isPlaying}}>
            {props.children}
        </StatesContext.Provider>
    )

}
