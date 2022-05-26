import React, { useState } from "react";
import "./LoginPage_Componenets.scss";
import { Input, Checkbox } from "antd";
import {
	FacebookFilled,
	GoogleCircleFilled,
	LockOutlined,
	MailOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import heroImage from "../../assets/Sign in page when clickedsideimage.png";
import Logo from "../../assets/Datavault Logodatavault logo.png";

const LoginPage_Component = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [changeScreen, setChangeScreen] = useState(true);
	const [name, setName] = useState("");
	const [investor, setInvestor] = useState("");
	const [checkInvestor, setCheckInvestor] = useState(true);
	const [startup, setStartup] = useState("");
	const [checkStartup, setCheckStartup] = useState(true);
	const [individual, setIndividual] = useState("");
	const [checkIndividual, setCheckIndividual] = useState(true);
	const [researcher, setResearcher] = useState("");
	const [checkResearcher, setCheckResearcher] = useState(true);
	const [enterpreneur, setEnterpreneur] = useState("");
	const [checkEnterpreneur, setCheckEnterpreneur] = useState(true);
	const [publicOfficeHolder, setPublicOfficeHolder] = useState("");
	const [checkPublicOfficeHolder, setCheckPublicOfficeHolder] = useState(true);
	const [dataAnalyst, setDataAnalyst] = useState("");
	const [checkDataAnalyst, setCheckDataAnalyst] = useState(true);
	const [others, setOthers] = useState("");
	const [checkOthers, setCheckOthers] = useState(true);

	const onChecked = () => {};

	const changingScreen = () => {
		setChangeScreen(!changeScreen);
	};

	let addToSelection = ({ name, check }) => {
		let checkedList = [];
		console.log(typeof name);
		console.log(checkedList);

		if (check === true) {
			var obj = checkedList.push(name);

			console.log("the checkedlist is", obj);
		} else if (check !== true) {
			if (checkedList.includes(name)) {
				let myIndex = checkedList.indexOf(name);
				checkedList.splice(myIndex, 1);
				console.log("selection", checkedList);
			}
		}

		// console.log("checkother", typeof checkedList.values);
	};

	// let checkingBoxes = (name, check, setCheck) => {
	// 	setCheck(!check);
	// 	console.log(check);
	// 	console.log(selection);

	// 	if (check === true) {
	// 		selection.push(name);
	// 	} else {
	// 		if (selection.includes(name)) {
	// 			let myIndex = selection.indexOf(name);
	// 			selection.splice(myIndex, 1);
	// 		}
	// 	}
	// };

	const register = () => {};

	return (
		<div className="LoginPage_Component">
			<img className="SideImage" alt="" src={heroImage} />
			<div className="LoginPage_rightSide">
				<img className="LoginPage_logo" src={Logo} alt="datavault" />
				<div className="LoginPage_welcome">
					<h2>Welcome to DataVault</h2>
				</div>

				{changeScreen ? (
					<>
						<p>Enter your details to get in your account</p>

						<div className="Login_Input_field">
							<Input
								className="InputField"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								size="large"
								placeholder="email"
								prefix={<MailOutlined />}
							/>
							<Input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="InputField"
								size="large"
								placeholder="password"
								prefix={<LockOutlined />}
							/>
							<Checkbox onChange={onChecked}>Remember me</Checkbox>
						</div>

						<div className="BottonFooterContainer">
							<button className="RegisterButton">Login</button>

							<p>Forgot your password?</p>

							<h4>
								Don't have an account?{" "}
								<Link to="" onClick={changingScreen}>
									Sign up
								</Link>
							</h4>

							<h3>OR</h3>

							<div className="signupButtons">
								<button>
									<GoogleCircleFilled />
									Register with Google
								</button>

								<button>
									<FacebookFilled />
									Register with Facebook
								</button>
							</div>
						</div>
					</>
				) : (
					<>
						<p>Get started by creating a free account today </p>
						<div className="Login_Input_field">
							<Input
								className="InputField"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								size="large"
								placeholder="full name"
								prefix={<UserOutlined />}
							/>
							<Input
								className="InputField"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								size="large"
								placeholder="email"
								prefix={<MailOutlined />}
							/>
							<Input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="InputField"
								size="large"
								placeholder="password"
								prefix={<LockOutlined />}
							/>
							<Checkbox onChange={onChecked}>Remember me</Checkbox>
						</div>
						<p>Who are you?</p>

						<div className="checkboxholder">
							<div className="checkbox">
								<input
									type="checkbox"
									name="Investor"
									value={investor}
									onChange={() => {
										setCheckInvestor(!checkInvestor);
										addToSelection({
											name: "investor",
											check: checkInvestor
										});
									}}
								/>
								Investor
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="Startup"
									value={startup}
									onChange={() => {
										setCheckStartup(!checkStartup);
										addToSelection({ name: "Startup", check: checkStartup });
									}}
								/>
								Startup
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="Individual"
									value={individual}
									onChange={() => {
										setCheckIndividual(!checkIndividual);
										addToSelection({ name: "Startup", check: checkStartup });
									}}
								/>
								Individual
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="Enterpreneur"
									value={enterpreneur}
									onChange={() => {}}
								/>
								Researcher
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="Enterpreneur"
									value={publicOfficeHolder}
									onChange={() => {}}
								/>
								Enterpreneur
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="sPublic Office Holder"
									value={publicOfficeHolder}
									onChange={() => {}}
								/>
								Public Office Holder
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="Data Analyst"
									value={investor}
									onChange={() => {}}
								/>
								Data Analyst
							</div>
							<div className="checkbox">
								<input
									type="checkbox"
									name="Other"
									value={others}
									onChange={() => {}}
								/>
								Other
							</div>
						</div>

						<div className="BottonFooterContainer">
							<button
								className="RegisterButton"
								onClick={() => {
									register();
								}}>
								Register
							</button>

							<p>Forgot your password?</p>

							<h4>
								Already have an account?{" "}
								<Link to="" onClick={changingScreen}>
									Login
								</Link>
							</h4>

							<h3>OR</h3>

							<div className="signupButtons">
								<button>
									<GoogleCircleFilled />
									Register with Google
								</button>

								<button>
									<FacebookFilled />
									Register with Facebook
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default LoginPage_Component;
