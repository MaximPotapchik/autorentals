import Image from 'next/image'

const Montreal = () => {
    return ( 
    <div className="justify-center flex p-8 flex-row items-center ">
        <Image src="/locations/montrealbuilding.png" height={400} width={400} alt='not here' className="shadow-xs border border-red-600" /> 
        <div className="flex flex-col p-6 text-red-600 font-semibold text-2xl items-start">
            <p className="py-2">Location: Montreal</p>
            <p className="py-2">Address: 4321 bob st</p>
            <p className="py-2">Email: EZAutoMontreal@gmail.com</p>
            <p className="py-2">Phone Number: (321)-300-3000</p>
        </div> 
    </div> 
    );
}
 
export default Montreal;