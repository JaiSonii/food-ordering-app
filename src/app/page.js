
import Image from "next/image";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/section-header";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <p>
            companied by English versions from the 1914 translation by H. Rackham.
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeader subHeader={'Dont Hesitate'} mainHeader={'Contact us'} />
        <div className="mt-8">
          <Link className="text-4xl underline text-gray-500" href={'tel:+4561865113'}>+45657165484</Link>
        </div>
      </section>
      
    </>
  );
}
