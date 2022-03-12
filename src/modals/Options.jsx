import Champion from "../assets/champ.png";
import Questbook from "../assets/open-questbook.png";
import Exit from "../assets/exit.png";
import Logout from "../assets/logout.png";

import { useContext } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

import { ModalContext } from "../context/ModalContext";

import "../styles/options.scss";

const Options = () => {
	const navigate = useNavigate();
	const { setIsOptionsOpen, setIsQuestBook, setView } =
		useContext(ModalContext);
	const { user, logout } = useMoralis();
	const addressHandler = (address) => {
		return `${address.slice(0, 5)}...${address.slice(-5)}`;
	};

	const handleLogout = () => {
		logout();
		navigate("/");
		setView("home");
	};
	return (
		<div className="options-bg">
			<div className="options">
				<img
					className={"exit"}
					onClick={() => setIsOptionsOpen(false)}
					src={Exit}
					alt="exit"
				/>
				<div className="info">
					<div className="info-user">
						<div className="champion">
							<img src={Champion} alt="champion" />
						</div>
						<div className="address">
							{addressHandler(user.get("ethAddress"))}
						</div>
					</div>
					<div className="stats">
						<div className="quests stat">
							<div className="value">0</div>
							<div className="label">Quests</div>
						</div>
						<div className="quizzes stat">
							<div className="value">0</div>
							<div className="label">Quizzes</div>
						</div>
						<div className="badges stat">
							<div className="value">0</div>
							<div className="label">Badges</div>
						</div>
					</div>
				</div>
				<div className="btns">
					<img
						className="qustbook"
						onClick={() => setIsQuestBook(true)}
						src={Questbook}
						alt="questbook"
					/>
					<img
						className="logout"
						onClick={handleLogout}
						src={Logout}
						alt="logout"
					/>
				</div>
			</div>
		</div>
	);
};

export default Options;
