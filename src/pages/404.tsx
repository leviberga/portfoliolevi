import Head from "next/head";
import Link from "next/link";
export default function NotFound () {
    return(
    <>
    <Head>
        <title>Página não encontrada | 404</title>
    </Head>
    <main className="flex p-10 justify-center items-center h-screen">
    <div className="text-center">
        <h1 className="font-bold text-8xl">404</h1>
        <p className="font-semibold text-7xl">Essa página não foi encontrada</p>
        <div className="mt-10">
        <span className="text-2xl bg-white text-l-main-purple p-4 rounded-full hover:underline"><Link href="/">Ir para página inicial</Link></span>
        </div>
    </div>
</main>

    </>
    );
}