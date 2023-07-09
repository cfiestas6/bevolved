import { Exam, Footer, Join, Navigation, Recommended, Tree } from '@/devlink';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Course(): JSX.Element {
    async function startExam() {
        // call sc (go exam)
        await fetch("http://127.0.0.1:5000/exam/start", {
            body: JSON.stringify({
                student_id: 1, // to change
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
                <title>Course | Bevolved </title>
                <meta name="description" content="Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation
                coursesUrl={{ href: "/courses" }}
                homeUrl={{ href: "/" }} />
            <Exam startExamUrl={{ onClick: () => (startExam()), href: "/exam"}} />
            <Footer />
        </>
    )
}