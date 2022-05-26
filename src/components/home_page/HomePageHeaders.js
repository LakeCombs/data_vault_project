import React from "react";
import { AlignRightOutlined } from "@ant-design/icons";
import "./HomePageHeader.scss";
import logo from "../../assets/Datavault Logodatavault logo.png";

const HomePageHeaders = () => {
	return (
		<div className="homePageHeaderContainer">
			<img alt="logo" src={logo} />

			<div className="homePageHeaderContent">
				<p>Work</p>
				<p>About Us</p>
				<p>Our Clients</p>
				<p>Services</p>
				<p>Content</p>

				<button className="loginButton">Login</button>
				<button className="signupButton">Sign up</button>
				<div className="header_menu">
					<AlignRightOutlined />
				</div>
			</div>
		</div>
	);
};

export default HomePageHeaders;
