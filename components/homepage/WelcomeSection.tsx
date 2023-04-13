import ExpandingBoxes from "./middle/ExpandingBoxes";
import TextBelowImage from "./top/TextBelowImage";
import TopImage from "./top/TopImage";

const WelcomeSection = () => {
    return ( 
    
        <div>
            <TopImage />
            <TextBelowImage />
            <ExpandingBoxes />
        </div>
    
    );
}
 
export default WelcomeSection;