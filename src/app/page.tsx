import Image from "next/image";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Menu from "./components/Menu/Menu";
import Concept from "./components/Concept/Concept";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <Message/>
    <Concept/>
    <Menu/>
    <Contact/>
    <Footer/>
    </>
      );
}

