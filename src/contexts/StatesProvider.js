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
    "MGMT"
]

const album = [
    "Yard Act", "The Overload", "Zen F.C.", "The Wombats", "Fix Yourself, Not The World"
    , "AWAL", "Palace", "Shoals", "Fiction", "The Lumineers", "Brightside", "Universal"
    , "Fickle Friends", "Are We Gonna Be Alright?", "Cooking Vinyl / Indigo", "Fazer", "Plex", "City Slang"
    , "Blood Red Shoes", "Ghosts On Tape", "Velveteen", "The Sherlocks", "World I Understand", "Years & Years"
    , "Night Call", "Polydor", "Band Of Horses", "Things Are Great", "BMG", "Boy Harsher", "The Runner"
    , "Nude Club/City Slang", "Anna Ash", "Sleeper", "Black Mesa", "Miles Kane", "Change The Show"
    , "Eeels", "Extreme Witchcraft", "E Works", "Thyla"
]

export function StatesProvider(props) {
    const [showBubleSearch, setBubleSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const bublesData = {
        artists: artists.filter((elt) => elt.startsWith(searchTerm)),
        album: album.filter((elt) => elt.startsWith(searchTerm))
    }
    return (
        <StatesContext.Provider value={{showBubleSearch, setBubleSearch, bublesData, setSearchTerm}}>
            {props.children}
        </StatesContext.Provider>
    )

}
