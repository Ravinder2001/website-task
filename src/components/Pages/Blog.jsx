/** @format */
import styles from "../../components/Styles/Blog.module.css";
export default function Blog() {
	const Blog = [
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_1.jpg.pagespeed.ic.mmMbqPS-6V.webp",
			title: "Create Beautiful Website In Less Than An Hour",
			writer: "Ham Brook",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_2.jpg.pagespeed.ic.zXFiG3TXK9.webp",
			title: "Create Beautiful Website In Less Than An Hour",
			writer: "James Phelps",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_1.jpg.pagespeed.ic.mmMbqPS-6V.webp",
			title: "Create Beautiful Website In Less Than An Hour",
			writer: "James Phelps",
		},
	];
	return (
		<div id='blog'>
			<div style={{ height: "1px", width: "1px " }}></div>
			<h1 className={styles.title}>Blog</h1>
			<div>
				{Blog.map((e) => (
					<div className={styles.box} style={{ marginLeft: "40px" }}>
						<div>
							<img src={e.img} alt='' width='100%' />
						</div>
						<div className={styles.head}>{e.title}</div>
						<div className={styles.writer}>{e.writer}</div>
						<div className={styles.text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
							eligendi nobis ea maiores sapiente veritatis reprehenderit
							suscipit quaerat rerum voluptatibus a eius.
						</div>
						<div style={{ color: "rgb(15, 199, 199)", marginTop: "20px" }}>
							Continue Reading....
						</div>
					</div>
				))}
			</div>
			<div style={{ clear: "both" }}></div>
		</div>
	);
}
