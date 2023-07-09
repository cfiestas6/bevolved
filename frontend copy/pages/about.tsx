import Head from 'next/head';

export default function Jobs() {
  const copyYear = new Date().getFullYear();
    return (
      <>
        <Head>
            <title>Visual Development Jobs</title>
            <meta name="description" content="Jobs" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
    )
}