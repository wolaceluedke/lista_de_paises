'use client'
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ops, Ocorreu um erro ao exibir esse país!
      </h1>
      <Link className="flex items-center py-2" href="/">
        <Image src="/Seta.svg"
        alt="ícone de seta de voltar"
        width={24}
        height={24}
        />
      </Link>
    </section>
  )
}