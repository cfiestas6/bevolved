import { Footer, Join, Navigation, Recommended, Test, Tree } from '@/devlink';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Exam(): JSX.Element {
    async function endExam() {
        await fetch("http://127.0.0.1:5000/exam/end", {
            body: JSON.stringify({
                student_id: 1, // to change
                exam_id: 1, // to change
                repository: "https://github.com/Noeljarillo/bevolvedExam",

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
                <title>Exam | Bevolved </title>
                <meta name="description" content="Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation
                coursesUrl={{ href: "/courses" }}
                homeUrl={{ href: "/" }} />
            <Test submitTest={{ onClick: endExam }} />
            <Footer />
        </>
    )
}