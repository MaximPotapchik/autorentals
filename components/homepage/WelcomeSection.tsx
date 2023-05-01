import AboveCarouselText from "./middle/AboveCarouselText";
import CarCarousel from "./middle/CarCarousel";
import ExpandingBoxes from "./middle/ExpandingBoxes";
import TextBelowImage from "./top/TextBelowImage";
import TopImage from "./top/TopImage";

const WelcomeSection = () => {
    return ( 
    
        <div className="flex flex-col p-2 bg-wh">
            <TopImage />
            <div className="border-[1px] m-4 p-2 border-red-600">
                <TextBelowImage />
                <AboveCarouselText />
            </div>
            <CarCarousel />
            <ExpandingBoxes />
        </div>
    
    );
}
 
export default WelcomeSection;