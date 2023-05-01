import Image from "next/image";


const Toronto= () => {
    return ( 
    <div className="justify-center flex p-8">
        <Image src='/placeholder' height={100} width={100} alt='not here' /> 
        <div>
            <p>Location: Montreal</p>
            <p>Address: 1234 johnson ave</p>
        </div> 
    </div> 
    );
}
 
export default Toronto;