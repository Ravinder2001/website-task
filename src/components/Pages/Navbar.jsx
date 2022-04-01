/** @format */
import styles from "../Styles/navbar.module.css";

import { HashLink } from "react-router-hash-link";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
	return (
		<>
			<div className={styles.black}>
				<span className={styles.phone}>
					Phone:{" "}
					<span style={{ color: "#32dbc6", fontWeight: "normal" }}>
						{" "}
						+1 234 5678 9101
					</span>
				</span>
				<span className={styles.email}>
					Email:{" "}
					<span style={{ color: "#32dbc6", fontWeight: "normal" }}>
						info@yourdomain.com
					</span>
				</span>
				<span style={{ marginLeft: "40%" }}>
					<BsFacebook className={styles.icon} />
					<AiOutlineTwitter className={styles.icon} />
					<AiFillLinkedin className={styles.icon} />
					<FaInstagram className={styles.icon} />
				</span>
			</div>
			<div className={styles.white}>
				<div className={styles.nav_logo}>Create</div>
				<div className={styles.logo_dot}>.</div>
				<div style={{ marginLeft: "54%", marginTop: "6px" }}>
					<HashLink to='#home' smooth={true}>
						<div className={styles.nav_btn} style={{ color: "#32dbc6" }}>
							Home
						</div>
					</HashLink>
					<HashLink to='#work' smooth={true}>
						<div className={styles.nav_btn}>Work</div>
					</HashLink>
					<HashLink to='#services' smooth={true}>
						<div className={styles.nav_btn}>Services</div>
					</HashLink>
					<HashLink to='#about' smooth={true}>
						<div className={styles.nav_btn}>About</div>
					</HashLink>
					<HashLink to='#blog' smooth={true}>
						<div className={styles.nav_btn}>Blog</div>
					</HashLink>
					<HashLink to='#contact' smooth={true}>
						<div className={styles.nav_btn}>Contact</div>
					</HashLink>
				</div>
			</div>
		</>
	);
}
export default Navbar;
