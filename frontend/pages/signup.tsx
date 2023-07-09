import { Footer, Join, Navigation } from '@/devlink';
import React, { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Head from 'next/head';

export default function Signup(): any {
    const { address } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
  const { disconnect } = useDisconnect()

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
                        
                        // Connect to web3 provider usiing wagmi
                        connect();
                        // convert the form data to JSON
                        const formData = new FormData(e.target);
                        const data = Object.fromEntries(formData.entries());
                        console.log(data);

                        await fetch("http://127.0.0.1:5000/users/signup", {
                            body: JSON.stringify({
                                email: data.email,
                                wallet: "0x6b81844Basdfasdf5Ad23EFE48A8",
                                first_name: data.first_name,
                                last_name: data.last_name,
                            }),
                            method: "POST",
                            headers: {
                              'Content-Type': 'application/json'
                            },
                        });
                        window.location.href = "/courses";
                    },
                }}
            />
            <Footer></Footer>
        </>
    )
}
