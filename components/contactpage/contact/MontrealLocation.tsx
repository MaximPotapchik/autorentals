import Image from 'next/image'

const Montreal = () => {
    return ( 
    <div className="flex pt-8 flex-col flex-wrap items-center ">
        <Image src="/locations/montrealbuilding.png" height={600} width={600} alt='not here' className="shadow-xs border border-red-600" /> 
        <div className=" flex flex-wrap flex-col text-red-600 font-semibold text-2xl ">
            <p className="p-8 self-start">Location: Montreal</p>
            <p className="p-8 self-start">Address: 4321 bob st</p>
            <p className="p-8 self-end">Email: EZAutoMontreal@gmail.com</p>
            <p className="p-8 self-end">Phone Number: (321)-300-3000</p>
        </div> 
    </div>
    );
}
 
export default Montreal;