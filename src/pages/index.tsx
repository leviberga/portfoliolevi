import AboutMe from "@/components/common/Home/AboutMe";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
   <Head>
    <title>Sobre mim | Levi</title>

   </Head>
    <main>
    <AboutMe />
    </main>
    </>
  );
}
