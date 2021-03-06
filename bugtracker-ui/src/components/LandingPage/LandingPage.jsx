import NoUserNavbar from "./NoUserNavbar/NoUserNavbar";
import "./LandingPage.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <Hero />
      </div>
    </>
  );
}

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <span className="material-symbols-outlined">emoji_nature</span>
        </div>
        <h1>WELCOME TO BUG TRACKER</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </h2>
        <Link to="/register">
          <button className="register-btn">SIGN UP NOW!</button>
        </Link>
      </div>
    </div>
  );
}
