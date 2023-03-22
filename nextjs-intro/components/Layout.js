import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const router = useRouter();
  const obj = {'/': 'Home', '/about': 'About'}
  return (
    <>
      <Head>
        <title>
          {obj[router.pathname]} | NextMovies</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </>
  )
}