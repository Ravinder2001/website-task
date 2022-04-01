/** @format */
import styles from "../../components/Styles/Home.module.css";
import { BsCheckLg } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = "";
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};
	function Run() {
		var elements = document.getElementsByClassName("typewrite");
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute("data-type");
			var period = elements[i].getAttribute("data-period");
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	}
	useEffect(() => {
		// Update the document title using the browser API
		Run();
		console.log("s");
	}, []);
	const keyPoints = [
		{
			title: "Innovate",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",

			list1: "Customer Experience",
			list2: "Product Management",
			list3: "Proof of Concept",
		},
		{
			title: "Create",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
			list1: "Web Design",
			list2: "Branding",
			list3: "Web & App Development",
		},
		{
			title: "Scale",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
			list1: "Social Media",
			list2: "Paid Campaigns",
			list3: "Marketing & SEO",
		},
	];
	return (
		<div id='home'>
			<div className={styles.img_text}>
				<div style={{ height: "70px", width: "1px" }}></div>

				<div className={styles.text}>
					<h1 className={styles.move_text}>
						We Love to build
						<span
							style={{
								fontSize: "50px",
								color: "white",
								marginBottom: "20px",
							}}
							href='###'
							className='typewrite'
							data-period='2000'
							data-type='[" Word Press"," Mobile Apps" ]'>
							{" "}
							<span class='wrap'></span>
						</span>
					</h1>
					<div style={{ fontSize: "24px" }}>Free Web Template by Colorlib</div>
					<button className={styles.btn_video}>WATCH VIDEO</button>
				</div>
			</div>
			<div>
				{keyPoints.map((e) => (
					<div className={styles.box}>
						<h1 className={styles.title}>{e.title}</h1>
						<div className={styles.mainText}>{e.body}</div>
						<div className={styles.list}>
							<BsCheckLg style={{ color: "rgb(11, 197, 197)" }} />
							<span style={{ marginLeft: "10px" }}>{e.list1}</span>
						</div>
						<div className={styles.list}>
							<BsCheckLg style={{ color: "rgb(11, 197, 197)" }} />
							<span style={{ marginLeft: "10px" }}>{e.list2}</span>
						</div>
						<div className={styles.list}>
							<BsCheckLg style={{ color: "rgb(11, 197, 197)" }} />
							<span style={{ marginLeft: "10px" }}>{e.list3}</span>
						</div>
						<div style={{ clear: "both" }}></div>
					</div>
				))}
			</div>
			<div style={{ clear: "both" }}></div>
		</div>
	);
}
