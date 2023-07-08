import { Footer, Join, Navigation } from '@/devlink';
import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import Head from 'next/head';

export default function Signup(): JSX.Element {
    const copyYear = new Date().getFullYear();

    const [wallet, setWallet] = useState<string>("Connect Wallet");

    useEffect(() => {
        function connectWallet() {
        }
    }, []);

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
            <Join
                formProps={{
                    onSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        
                        // convert the form data to JSON
                        const formData = new FormData(e.target);
                        const data = Object.fromEntries(formData.entries());
                        console.log(data);

                        await fetch("/api/signup", {
                            body: JSON.stringify({
                                email: data.email,
                                first_name: data.first_name,
                                last_name: data.last_name,
                            }),
                            method: "POST",
                            headers: {
                              'Content-Type': 'application/json'
                            },
                        });
                    },
                }}
            />
            <Footer></Footer>
        </>
    )
}
