import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
	);
}

export default App;
