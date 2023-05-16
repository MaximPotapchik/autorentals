import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
    car: {
        id: string;
        make: string;
        model: string;
        year: number;
        image: string;
        // add any other properties you need for the car card
    };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
    <Link href={car.id}>
      
        <div className="card">
          <div className="card-image">
            <Image src={car.image} alt={`${car.make} ${car.model}`} width={300} height={200} />
          </div>
          <div className="card-content">
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            {/* add any other car details you want to display */}
          </div>
        </div>
      
    </Link>
  );
};

export default CarCard;