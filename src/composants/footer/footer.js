import logo from "../../images/LOGO_footer.png"

export default function Footer() {
	return (
		<footer className="Footer">
			<img src={logo} alt="logo de kasa en noir et blanc" />
			<p className="Footer_text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}