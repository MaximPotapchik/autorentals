import Image from "next/image";


const Toronto= () => {
    return ( 
    <div className="justify-center flex p-8 flex-row items-center ">
        <Image src="/locations/torontobuilding.png" height={400} width={400} alt='not here' className="shadow-xs border border-red-600" /> 
        <div className="flex flex-col p-6 text-red-600 font-semibold text-2xl items-start">
            <p className="py-2">Location: Toronto</p>
            <p className="py-2">Address: 1234 johnson ave</p>
            <p className="py-2">Email: EZAutoToronto@gmail.com</p>
            <p className="py-2">Phone Number: (123)-200-2000</p>
        </div> 
    </div> 
    );
}
 
export default Toronto;