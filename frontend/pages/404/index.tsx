import Head from "next/head"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Page not found | Check</title>
      </Head>

      <div className="h-full grid place-items-center">
        <p>404 | Page not found.</p>
      </div>
    </>
  )
}
