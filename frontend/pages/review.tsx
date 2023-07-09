import { Footer, Navigation, Review } from '@/devlink';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Reviews(): JSX.Element {
    // call sc (pass exam)
    async function handleVerfication() {
        await fetch("http://127.0.0.1:5000/exam/verify", {
            body: JSON.stringify({
                passed: true,
                exam_id: 10, // to change
                verificator_id: 1, // to change
            }),
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
        });
    }

    return (
        <>
            <Head>
                <title>Review | Bevolved </title>
                <meta name="description" content="Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation
                coursesUrl={{ href: "/courses" }}
                homeUrl={{ href: "/" }} />
            <Review verifyExam={{ onClick: handleVerfication }} />
            <Footer />
        </>
    )
}