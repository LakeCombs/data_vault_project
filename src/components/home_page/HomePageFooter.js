import React, { useState } from "react";
import "./HomePageFooter.scss";
import fb from "../../assets/Vectorfacebook.png";
import twt from "../../assets/Vectortwitter.png";
import ins from "../../assets/Instagraminstagram.png";
import ln from "../../assets/Vectorinkedin.png";

const HomePageFooter = () => {
	const [subscribe, setSubscribe] = useState("");

	const FooterLinkContent = ({ Header, link1, link2, link3, link4, link5 }) => {
		return (
			<div className="FooterLinkContent">
				<h1>{Header}</h1>
				<p>{link1}</p>
				<p>{link2}</p>
				<p>{link3}</p>
				<p>{link4}</p>
				<p>{link5}</p>
			</div>
		);
	};
	return (
		<div className="HomePageFooter">
			<div className="HomePageFooterEmail">
				<h2>Sign up for our Newsletter. Join our Subscribers list.</h2>
				<form>
					<input
						value={subscribe}
						onChange={(e) => setSubscribe(e.target.value)}
					/>
					<button> Subscribe</button>
				</form>
			</div>

			<div className="mainfooter">
				<div className="footerlogo">
					<img alt="" />
					<p>hello@datavault.ng</p>
				</div>

				<div className="footerlinks">
					<FooterLinkContent
						Header="Company"
						link1="Implement our API"
						link2="Join our Facebook community"
						link3=" Refer to your friends"
						link4="Privacy Notice"
						link5="Career"
					/>
					<FooterLinkContent
						Header="About Us"
						link1="Co-founders"
						link2="Our Team"
						link3="Advisory Team"
						link4="Our Clients"
					/>
					<FooterLinkContent
						Header="Support"
						link1="View Tutorials"
						link2="Contact Us"
						link3="Request a New feature"
						link4="Report an outage"
						link5="Report a Bug"
					/>
				</div>

				<div className="footersocials">
					<h2> Follow us</h2>
					<div>
						{" "}
						<img alt="fb" src={fb} />
						<img alt="tw" src={twt} />
						<img alt="ins" src={ins} />
						<img alt="ln" src={ln} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePageFooter;
