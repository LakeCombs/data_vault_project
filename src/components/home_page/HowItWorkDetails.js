import React from "react";
import "./HowItWorkDetailsStyle.scss";

const HowItWorkDetails = ({ title, details, src }) => {
	return (
		<div className="HowItWorkDetilsStyle">
			<img alt="" src={src} />
			<h2>{title}</h2>
			<p>{details}</p>
		</div>
	);
};

export default HowItWorkDetails;
