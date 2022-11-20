import React, {useState, useContext} from "react";
import {Bubble} from "react-bubble-ui-v2";
import { StatesContext} from "../contexts/StatesProvider";

function Child(props){
	return <button onClick={() => window.location.href = `/artist`} className={`flex justify-center items-center ${props.color} child`}>{props.name}</button>
}


function Bubbles(props) {
    const {bublesData} = useContext(StatesContext);

	const options = {
		size: 200,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 10,
		fringeWidth: 160,
		yRadius: 220,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 0,
	}

	const children = [];
	var i = 0;

    console.log(bublesData);
	bublesData.album.forEach(element => {
		children.push(<Child className="child" key={i++} color={"bg-red-500"} name={element}/>)
	})

	bublesData.artists.forEach(element => {
		children.push(<Child className="child" key={i++} color={"bg-blue-500"} name={element}/>)
	});

	children.sort(() => Math.random() - 0.5);

   return (
   <Bubble options={options} className="flex-1 myBubbleUI">
	   {children}
   </Bubble>)
}

export default function BubblesSearch(props) {
	return (<div className="flex flex-auto justify-center items-center w-full h-full">
		<Bubbles/>
	</div>)

}
