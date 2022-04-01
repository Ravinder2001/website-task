/** @format */
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import "./App.css";
import Navbar from "./components/Pages/Navbar";
import Work from "./components/Pages/Work.jsx";
import Services from "./components/Pages/Services.jsx";
import Blog from "./components/Pages/Blog.jsx";
import Contact from "./components/Pages/Contact.jsx";
function App() {
	return (
		<>
			<Navbar></Navbar>
			<Home></Home>
			<Work></Work>
			<Services></Services>
			<About></About>
			<Blog></Blog>
			<Contact></Contact>
		</>
	);
}

export default App;
