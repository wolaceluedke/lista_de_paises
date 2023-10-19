/* eslint-disable react/jsx-key */
import CountryCard from "@/components/countryCard";
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
  languages?: {
    [key: string]: string;
  }
  borders?: string[];
  cca3: string;
}


async function getCountries(): Promise<Country[]> {
  const response = await fetch ("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();
  console.log(countries)

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    lg:grid-cols-4 xl:grid grid-cols-5 w-full gap-2 mt-16 rounded-xl">
      {countries.map((country) => (
      <CountryCard 
      name={country.name.common} 
      ptName={country.translations.por.common}
      flag={country.flags.svg}
      flagAlt={country.flags.alt} 
      key={country.name.common}
      />
      ))}
    </section>
  )
}
