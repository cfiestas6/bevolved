import { Exam, Footer, Join, Navigation, Recommended, Tree } from '@/devlink';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Course(): JSX.Element {
    return (
        <>
            <Head>
                <title>Course | Bevolved </title>
                <meta name="description" content="Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation
                coursesUrl={{ href: "/courses" }}
                homeUrl={{ href: "/" }} />
            <Exam />
            <Footer />
        </>
    )
}