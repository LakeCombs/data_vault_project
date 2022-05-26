import React from "react";
import Investor from "./investor";
import "./InvestorHolderPage.scss";

const InvestorHolderPage = () => {
	return (
		<div className="resultHolder">
			<Investor />
			<Investor />
			<Investor />
			<Investor />
		</div>
	);
};

export default InvestorHolderPage;
