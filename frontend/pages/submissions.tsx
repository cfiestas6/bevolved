import { Footer, Join, Navigation, Recommended, Test, Tree, Submissions } from '@/devlink';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Submission(): JSX.Element {
    return (
        <>
            <Head>
                <title>Submissions | Bevolved </title>
                <meta name="description" content="Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation
                coursesUrl={{ href: "/courses" }}
                homeUrl={{ href: "/" }} />
            <Submissions startReviewUrl={{ href: "/review" }} />
            <Footer />
        </>
    )
}