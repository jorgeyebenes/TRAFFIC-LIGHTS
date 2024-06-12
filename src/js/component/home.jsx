import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [autoChange, setAutoChange] = useState(false);
	const [showPurpleLight, setShowPurpleLight] = useState(false);

	const nextColor = () => {
		setColor((previousColor) => {
			switch (previousColor) {
				case "red":
					return "orange";
				case "orange":
					return "green";
				case "green":
					return "purple";
				case "purple":
					return "red"
				default:
					return "red"

			}
		})
	}


	useEffect(() => {
		if (autoChange) {
			const intervalID = setInterval(nextColor, 1000);
			return () => clearInterval(intervalID);
		}
	}, [autoChange]);

	const changeColorAutomatic = () => {
		setAutoChange(true);
	};

	const stopChangeColorAutomatic = () => {
		setAutoChange(false);
	}

	const addPurpleLight = () => {
		setShowPurpleLight(true)

	}

	const hidePurpleLight = () => {
		setShowPurpleLight(false)

	}

	return (
		<div className="trafficLight container d-flex flex-column">
			<h1 className="display-1 mx-auto"><strong>Traffic Light</strong> </h1>
			<div className="text-center bg-info bg-gradient p-5 ">
				<div className="stick mx-auto"></div>

				<div className="case container py-5 d-flex flex-column align-items-center">

					<div onClick={() => setColor("red")} className={color == "red" ? "red glow-red" : "red"}></div>
					<div onClick={() => setColor("orange")} className={color == "orange" ? "orange glow-orange" : "orange"}></div>
					<div onClick={() => setColor("green")} className={color == "green" ? "green glow-green" : "green"}></div>
					{showPurpleLight && <div onClick={() => setColor("purple")} className={color == "purple" ? "purple glow-purple" : "purple"}></div>}


				</div>
			</div>

			<div className="mx-auto  ">

				<div onClick={changeColorAutomatic} className="btn btn-warning m-3 ">Start Cycle!</div>
				<div onClick={stopChangeColorAutomatic} className="btn btn-danger m-3 ">Stop Cycle!</div>
			</div>

			<div className="mx-auto  ">

				<div onClick={addPurpleLight} className="btn btn-primary m-3 ">Add Purple Light</div>
				<div onClick={hidePurpleLight} className="btn btn-danger m-3 ">Hide Purple Light</div>
			</div>
		</div>



	);

};

export default Home;