import Image from "next/image";

const TopImage = () => {
    return ( 
    <div className="flex justify-center bg-slate-100 ">
        <div className="bg-red-600">
        <Image src="/FrontHero.jpg" alt='landingpageimg' height={720} width={1080} className="opacity-75"/>
        </div>
    </div>
    );
}
 
export default TopImage;