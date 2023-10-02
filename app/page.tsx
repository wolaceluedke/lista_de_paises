/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";

export type Country = {
  name: {
    common: string,
  },
  translations: {
    por: {
      common: string;
    }
  }
  flags: {
    svg: string;
    alt: string;
  }
  capital: string;
  region: string;
  subregion: string;
  population: number;
}


async function getCountries(): Promise<Country[]> {
  const response = await fetch ("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();
  console.log(countries)


  return (
    <section className="container grid grid-cols-5 w-full gap-2 mt-16 rounded-xl">
      {countries.map((country) => (
        <Link href={`/pais/${country.name.common}`}>
        <article 
          className="h-64 min=-w-full p-2 bg-white border-2 rounded-xl 
           hover:border-indigo-200 transition-all hover:shadown-xl" 
           key={country.name.common}
           >
          <div 
          className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
            <Image 
            src={country.flags.svg} 
            alt="country.flags.alt" 
            fill
            className="object-cover"/>
          </div>
      <h1 className="font-bold text-xl text-center mt-1">
        {country.translations.por.common}</h1>
      </article>
      </Link>
      ))}
    </section>
  )
}
