/** @format */
import { BsLaptopFill, BsCart4 } from "react-icons/bs";
import { RiMessageFill, RiAppsFill } from "react-icons/ri";
import { FaPaintRoller } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import styles from "../../components/Styles/Services.module.css";
export default function Services() {
	const services = [
		{
			logo: <BsLaptopFill />,
			title: "Web Design",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
		},
		{
			logo: <BsCart4 />,
			title: "eCommerce",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
		},
		{
			logo: <RiMessageFill />,
			title: "Web Applications",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
		},
		{
			logo: <FaPaintRoller />,
			title: "Branding",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
		},
		{
			logo: <RiAppsFill />,
			title: "Copy Writing",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
		},
		{
			logo: <ImMobile />,
			title: "Mobile Applications",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
		},
	];
	return (
		<div id='services'>
			<div style={{ height: "1px", width: "1px " }}></div>
			<h1 className={styles.title}>Our Services</h1>
			<div>
				{services.map((e) => (
					<div className={styles.box}>
						<div className={styles.logo}>{e.logo}</div>
						<div style={{ float: "left", marginLeft: "10px" }}>
							<div className={styles.head}>{e.title}</div>
							<div className={styles.text}>{e.body}</div>
							<div style={{ color: "rgb(7, 180, 180)" }}>Learn More</div>
						</div>
					</div>
				))}
			</div>
			<div style={{ clear: "both" }}></div>
			<hr />
		</div>
	);
}
