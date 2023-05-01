import BottomAbout from "./about/BottomAbout";
import TopAbout from "./about/TopAbout";
import Montreal from "./contact/MontrealLocation";
import Toronto from "./contact/TorontoLocation";



const ContactPage = () => {
    return (<>
    <TopAbout />
    <BottomAbout />
    <Toronto />
    <Montreal />
    </>
    );
}
 
export default ContactPage;
