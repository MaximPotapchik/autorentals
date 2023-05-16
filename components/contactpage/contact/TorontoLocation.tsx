import Image from "next/image";


const Toronto= () => {
    return ( 
    <div className="flex pt-8  flex-col flex-wrap items-center">
        <Image src="/locations/torontobuilding.png" height={600} width={600} alt='not here' className="shadow-xs border border-red-600" /> 
        <div className=" flex flex-wrap flex-col text-red-600 font-semibold text-2xl  ">
            <p className="p-8 self-start">Location: Toronto</p>
            <p className="p-8 self-start">Address: 1234 johnson ave</p>
            <p className="p-8 self-end">Email: EZAutoToronto@gmail.com</p>
            <p className="p-8 self-end pr-14">Phone Number: (123)-200-2000</p>
        </div> 
    </div>
    );
}
 
export default Toronto;