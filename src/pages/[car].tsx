import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Head from "next/head";
import carData from "carData.json";
import Image from "next/image";

interface CarProps {
  car: {
    id: string;
    make: string;
    model: string;
    year: number;
    image: string;
  };
}

const CarPage: NextPage<CarProps> = ({ car }) => {
  return (
    <>
      <Head>
        <title>{car.make} {car.model}</title>
        <meta name="description" content={`View details for ${car.make} ${car.model}`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <h1>{car.make} {car.model}</h1>
      <p>Year: {car.year}</p>
      <Image src={car.image} alt={car.make} width={200} height={200}/>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // map the cars to an array of objects with the `params` key set to the car ID
  const paths = carData.map((car) => ({ params: { car: car.id } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<CarProps> = async ({ params }) => {
  // fetch the data for the car with the ID specified in the `params` object
  const car = carData.find((car) => car.id === params?.car);

  return { props: { car } };
};

export default CarPage;