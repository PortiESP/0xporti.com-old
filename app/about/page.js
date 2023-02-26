import Head from 'next/head'
import Landing from "./Landing"

export default function Home() {

  return (
    <div className="root">
      <Head>
        <title>Porti - Full-stack & Software developer</title>
        <meta name="PORTI"/>
        <meta name="description" content="My name is Porti, I'm a full-stack and software developer. I have created this web as a hobby and practive the skills I have learned on my own with resources over the internet." />
        <meta name="keywords" content="porti, developer, portfolio, software, blog, linux, full-stack, react, pentesting, docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      
    </div>
  )
}
