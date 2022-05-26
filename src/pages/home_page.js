import React from "react";
import HomePageFooter from "../components/home_page/HomePageFooter";
import HomePageHeaders from "../components/home_page/HomePageHeaders";
import HomePageHeroComponent from "../components/home_page/HomePageHeroComponent";
import HowItWork from "../components/home_page/HowItWork";

const HomePage = () => {
	return (
		<div className="home_page">
			<HomePageHeaders />
			<HomePageHeroComponent />
			<HowItWork />
			<HomePageFooter />
		</div>
	);
};

export default HomePage;
