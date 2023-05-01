import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AboveCarouselText = () => {
    return ( 
    <>
        <div className="text-red-600 text-lg text-center ">
            <p>We have just what you need!</p>
            <p>Models for every occasion</p>
            <Link href="/book-now" className="inline-flex items-center px-6 py-2 bg-red-600 rounded-full text-white hover:bg-gray-800 mt-4">
            Book Now
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </Link>
        </div>
    </> 
    );
}
 
export default AboveCarouselText ;