/** @format */
import styles from "../../components/Styles/About.module.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
export default function About() {
	const team = [
		{
			img: "https://preview.colorlib.com/theme/create/images/xperson_2.jpg.pagespeed.ic.tEQmGoVJYm.webp",
			name: "John Rooster",
			role: "CO-FOUNDER, PRESIDENT",
			about:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/xperson_3.jpg.pagespeed.ic.RShAAJX8ye.webp",
			name: "Tom Sharp",
			role: "CO-FOUNDER, COO",
			about:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/xperson_4.jpg.pagespeed.ic.zElXCyQBvP.webp",
			name: "Winston Hodson",
			role: "MARKETING",
			about:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
		},
	];
	return (
		<div id='about'>
			<div style={{ height: "1px", width: "1px " }}></div>
			<h1 className={styles.title}>Our Team</h1>
			<div style={{ width: "90%", margin: "auto" }}>
				{team.map((e) => (
					<div className={styles.box}>
						<img src={e.img} alt='' className={styles.img} />

						<div className={styles.name}>{e.name}</div>
						<div className={styles.role}>{e.role}</div>
						<div className={styles.about}>{e.about}</div>
						<div style={{ marginLeft: "80px" }}>
							<BsFacebook className={styles.icons}></BsFacebook>
							<AiOutlineTwitter className={styles.icons}></AiOutlineTwitter>
							<AiFillLinkedin className={styles.icons}></AiFillLinkedin>
							<FaInstagram className={styles.icons}></FaInstagram>
						</div>
					</div>
				))}
			</div>
			<div style={{ clear: "both" }}></div>
			<hr />
		</div>
	);
}
