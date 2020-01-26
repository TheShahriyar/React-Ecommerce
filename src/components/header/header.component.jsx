import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<>
						<div className="option">
							{currentUser.photoURL ? (
								<img src={currentUser.photoURL} alt="userPhoto" />
							) : null}
							{currentUser.displayName.split(" ")[0]}
						</div>
						<div className="option" onClick={() => auth.signOut()}>
							Sign Out
						</div>
					</>
				) : (
					<Link className="option" to="/signin">
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
