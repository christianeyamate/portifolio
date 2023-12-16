import { ToastContainer } from "react-toastify";
// import { RoutesMain } from "./Routes/RoutesMain";
import "react-toastify/dist/ReactToastify.min.css";
import { Header } from "./Components/Header";
import GlobalStyle from "./Styles/Global";
import { GlobalReset } from "./Styles/Reset";
import { BannerSection } from "./Section/BannerSection";
import { ProjectSection } from "./Section/ProjectSection";
import { Footer } from "./Components/Footer";
import { ContactSection } from "./Section/ContactSection";
import { AboutSection } from "./Section/AboutMeSection";

// import GlobalStyle from "./Styles/global";
// import Reset from "./Styles/reset";

export const App = () => {
  return (
    <>
    
    <GlobalReset/> 
    <GlobalStyle/> 
    <Header/>
    <BannerSection/>
    <AboutSection/>
    <ProjectSection/>
    <ContactSection/>
    <Footer/>
    {/* <BannerSection/>
        <AboutMeSection/>
        <TechSection/>
        <ProjectsSection/> */}
			{/* <GlobalStyle />
			<Reset />
      <RoutesMain />  */}
      <ToastContainer />
      {/* <Footer/> */}
    </>
  );
};
