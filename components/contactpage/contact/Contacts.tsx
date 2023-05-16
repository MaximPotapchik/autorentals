import Toronto from './TorontoLocation';
import Montreal from './MontrealLocation';

const Contacts = () => {
    return (
    <div className='flex flex-row flex-wrap justify-between mx-32 h-1/2'>
        <Toronto />
        <Montreal />
    </div>
    );
}
 
export default Contacts;