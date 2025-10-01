import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Menu from "./components/Menu/Menu";
import Concept from "./components/Concept/Concept";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Mainvisual from "./components/MV/Mainvisual";
import About from "./components/ABOUT/About.sp";

export default function Home() {
  return (
    <>
    <Header/>
    <Mainvisual/>
    <Message/>
    <Concept/>
    <About/>
    <Menu/>
    <Contact/>
    <Footer/>
    </>
      );
}

