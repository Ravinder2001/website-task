/** @format */
import styles from "../../components/Styles/Work.module.css";
import { useState, useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
export default function Work() {
	const images = [
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_1.jpg.pagespeed.ic.mmMbqPS-6V.webp",
			text: "First",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_2.jpg.pagespeed.ic.zXFiG3TXK9.webp",
			text: "Second",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_3.jpg.pagespeed.ic.MEecMijoPX.webp",
			text: "third",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_4.jpg.pagespeed.ic.HR_XzoNDZi.webp",
			text: "fourth",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_5.jpg.pagespeed.ic.vnC9V6X16M.webp",

			text: "fifth",
		},
		{
			img: "https://preview.colorlib.com/theme/create/images/ximg_6.jpg.pagespeed.ic.S6TBkJMSHQ.webp",
			text: "six",
		},
	];
	const users = [
		{
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
			img: "https://preview.colorlib.com/theme/create/images/xperson_3.jpg.pagespeed.ic.RShAAJX8ye.webp",
			name: "John Smith",
		},
		{
			title:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			img: "https://preview.colorlib.com/theme/create/images/xperson_2.jpg.pagespeed.ic.tEQmGoVJYm.webp",
			name: "Christhen",
		},
		{
			title:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. ",
			img: "https://preview.colorlib.com/theme/create/images/xperson_4.jpg.pagespeed.ic.zElXCyQBvP.webp",
			name: "Robert",
		},
		{
			title:
				"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
			img: "https://preview.colorlib.com/theme/create/images/xperson_5.jpg.pagespeed.ic.4YapupvOUp.webp",
			name: "Bruce",
		},
	];
	const [page, setPage] = useState(0);
	useEffect(() => {}, [page]);
	return (
		<div id='work'>
			<div style={{ height: "1px", width: "1px " }}></div>
			<div className={styles.title}>Our Works</div>
			<div className={styles.sub_heading}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
				itaque neque, delectus odio iure explicabo.
			</div>
			<div>
				{images.map((e) => (
					<div>
						<img src={e.img} width='30%' className={styles.img} />
					</div>
				))}
			</div>
			<div style={{ clear: "both" }}></div>
			<div className={styles.title}>Testimonials</div>
			<div className={styles.heading}>"{users[page].title}"</div>
			<div style={{ width: "200px", margin: "auto", marginTop: "20px" }}>
				<img src={users[page].img} alt='' className={styles.profile} />
				<div className={styles.name}>{users[page].name}</div>
			</div>
			<div style={{ clear: "both", height: "50px" }}></div>
			<span
				style={{ marginLeft: "38%" }}
				className={styles.btn}
				onClick={() => {
					setPage(0);
				}}>
				<GoPrimitiveDot></GoPrimitiveDot>
			</span>
			<span
				className={styles.btn}
				onClick={() => {
					setPage(1);
				}}>
				<GoPrimitiveDot></GoPrimitiveDot>
			</span>
			<span
				className={styles.btn}
				onClick={() => {
					setPage(2);
				}}>
				<GoPrimitiveDot></GoPrimitiveDot>
			</span>
			<span
				className={styles.btn}
				onClick={() => {
					setPage(3);
				}}>
				<GoPrimitiveDot></GoPrimitiveDot>
			</span>
		</div>
	);
}
