import React from "react";
import "./HowItWork.scss";
import HowItWorkDetails from "./HowItWorkDetails";
import findInvestor from "../../assets/icons8-search-50.png";
import readData from "../../assets/icons8-graph-report-script-50 (1).png";
import dataAnalysis from "../../assets/icons8-trading-64 (1).png";

const HowItWork = () => {
	return (
		<div className="How_it_work_container">
			<h2>How it work</h2>

			<div className="how_it_work_details">
				<HowItWorkDetails
					src={findInvestor}
					title="Find your investor"
					details="Start approaching investors and get funded using our database"
				/>
				<HowItWorkDetails
					src={readData}
					title="Read Data-driven ArticleRead Data-driven Article"
					details="Improve your decision making reading our data-driven article"
				/>
				<HowItWorkDetails
					src={dataAnalysis}
					title="Data Analysis & Visualisation"
					details="Our Engine produce your Market research document, or transform your spreadsheet into data visuals in different document format."
				/>
			</div>

			<h2> Testimonies</h2>

			<p>
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
				lacinia elit, eu laoreet metus. Vivamus pallentesque justo vitae sem
				imperdiet sagittis.
			</p>
		</div>
	);
};

export default HowItWork;
