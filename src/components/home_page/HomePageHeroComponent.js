import React from "react";
import "./HomePageHeroComponent.scss";
import heroImage from "../../assets/Rectangle 24background iamge.png";

const HomePageHeroComponent = () => {
	return (
		<div className="home-page-hero-container">
			<div className="home-page-hero-container-left">
				<h2>
					Africa Generates Less Than 1% Of The World’s Research And Data; Data
					Analytics Can Change That” - Elsevier
				</h2>
				<p>
					Datavault Nigeria is a web and mobile platform that publishdata driven
					content and automate data analysis. We help business people make
					strategic decision with insights gained from our repository of data in
					various industries. Analysts, Policy Makers and Media.
				</p>

				<button>Get Started</button>
			</div>
			<div className="home-page-hero-container-right">
				<img alt="hero" src={heroImage} />
			</div>
		</div>
	);
};

export default HomePageHeroComponent;
