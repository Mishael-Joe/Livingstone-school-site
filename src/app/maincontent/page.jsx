import Header from './header/page';
import AboutUS from './aboutus/page'
import Content_1 from './content1/page';
import ContactUs from './contact/page';
import OurTeam from './ourteam/page';
import Facilities from './facilities/page';
import Reviews from './reviews/page'

//text #021422
//bachground #e2f2fe
//primary #46aaf6
//secondary #b6dbfc
//accent #0b80da

const MainContent = () => {
  return (
    <>
    <Header/>
    <AboutUS/>
    <Content_1 />
    <Facilities/>
    {/* <OurTeam /> */}
    <Reviews />
    {/* <FAQs /> */}
    <ContactUs />
    </>
  )
}

export default MainContent