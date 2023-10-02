import type { Country } from '@/app/page'
import Image from 'next/image';
import Link from 'next/link';

async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch (`https://restcountries.com/v3.1/name/${name}`)
  return (await response.json())[0];
}


export default async function CountryPage({
  params: { name },
} : {
  params : { name: string }
}) {
  const country = await getCountryByName(name)
  console.log(country)
  return (
    <section className='flex flex-col container'>
      <h1 className='text-5xl text-center font-bold text-gray-800 mt-16 '>
       {country.translations.por.common}
      </h1>
    <Link className='flex items-center py-2' href="/">
      <Image 
      src="./Seta.svg" 
      alt='arrow-back' 
      width={24}
      height={24} 
      />
      Voltar
      </Link>
    <article className='flex justify-between min-w-full p-10 bg-white rounded-xl'>
      <section>
      <h2 className='text-xl text-gray-800'>
        <b>🏙️ Capital:</b> {country.capital}
        </h2>
      <h2 className='text-xl text-gray-800'>
        <b>🗺️ Continente:</b>{country.region} - {country.subregion}
        </h2>
      <h2 className='text-xl text-gray-800'>
        <b>👨‍👩‍👧‍👦População:</b>{country.population}
        </h2>
      <h2 className='text-xl text-gray-800'>
        <b>🗣️Línguas faladas:</b>
    <br />
      {Object.values(country.languages).map((language) => (
        <span key={language} className='inline-block p-2 bg-indigo-700 mr-2 text-white font-sm rounded-full'>
          {language}
          </span>
      ))}
        </h2>
      </section>
    </article>
  </section>
)}