import { Footer, Join, Navigation, Recommended, Tree } from '@/devlink';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Courses(): JSX.Element {
    return (
        <>
            <Head>
                <title>Courses | Bevolved </title>
                <meta name="description" content="Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation
                coursesUrl={{ href: "/courses" }}
                homeUrl={{ href: "/" }} />
            <Tree />
            <Recommended openCourseUrl={{ href: "/course" }} />
            <Footer />
        </>
    )
}