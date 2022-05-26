import React, { useState } from "react";
import "../../components/home_page/HowItWork.scss";
import "./FindInvestorPageHeader.scss";
import logo from "../../assets/Datavault Logodatavault logo.png";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FindInvestorPageHeader = () => {
	const [input, setInput] = useState("");

	const Search = () => {};
	return (
		<div className="findInvestorPageHeader">
			<div className="findInvestorPageHeaderContent">
				<img alt="" src={logo} />
				<h2>Find investors for your business</h2>

				<div className="findInvestorPageHeaderLink">
					<p>Work</p>
					<p>About Us</p>
					<p>Our Clients</p>
					<p>Services</p>
					<p>Content</p>
				</div>
			</div>
			<div className="findInvestorPageForm">
				<form onSubmit={Search}>
					<Input
						size="large"
						placeholder="large size"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>

					<br />
				</form>
			</div>
		</div>
	);
};

export default FindInvestorPageHeader;
