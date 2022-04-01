/** @format */
import styles from "../../components/Styles/Contact.module.css";
export default function Contact() {
	return (
		<div id='contact'>
			<div style={{ height: "1px", width: "1px " }}></div>
			<div className={styles.container}>
				<h1 className={styles.title}>Contact Us</h1>
				<div>
					<div className={styles.left}>
						<div className={styles.head}>Contact Form</div>
						<div style={{ float: "left" }}>
							<div className={styles.label}>First Name</div>
							<input className={styles.input} type='text' name='' id='' />
						</div>
						<div style={{ float: "left", marginLeft: "0px" }}>
							<div className={styles.label}>Last Name</div>
							<input className={styles.input} type='text' name='' id='' />
						</div>
						<div style={{ clear: "both" }}></div>
						<div className={styles.label}>Email</div>
						<input className={styles.input_1} type='text' name='' id='' />
						<div className={styles.label}>Subject</div>
						<input className={styles.input_1} type='text' />
						<div className={styles.label}>Message</div>
						<input
							className={styles.input_2}
							type='text'
							placeholder='Write your notes and questions here'
							name=''
							id=''
						/>
						<button className={styles.btn}>Send Message</button>
					</div>
					<div className={styles.right}>
						<div className={styles.text}>Address</div>
						<div className={styles.label}>
							203 Fake St. Mountain View, San Francisco, California, USA
						</div>
						<div className={styles.text}>Phone</div>
						<div className={styles.num}>+1 232 3235 324</div>
						<div className={styles.text}>Email Address</div>
						<div className={styles.num}>youremail@domain.com</div>
					</div>
				</div>
			</div>
		</div>
	);
}
