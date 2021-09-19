import React, { useState } from "react";
import Layout from "../components/layout";
import useSWR from "swr";

export default function random_person() {
    const [loading, setLoading] = useState(true);

    //  SWR is hook for fetching data from APIs for proper rendering on client-side.
        //  first arg is 'URL'
        //  second arg is 'function' which takes that URL and return the result/response.
        //  this hook returns 2 things, data (if req is successful) or error (if req failed or some error occured)
    const { data, error } = useSWR('https://random-data-api.com/api/users/random_user/', async url => {
        const res = await fetch(url);
        setLoading(false);
        if (res.status == 200) {
            let data = await res.json();
            return data;
        }
        return false;
    });

    return (
        <Layout home={false} title="random person">
            <div className="main">

                { !loading ? data ? 
                    // if data is loaded successfully
                    <>
                        <h1>SWR? i don't get it!!!</h1>
                        <p>Fetching data from external api thru SWR after rendering on client side.</p>
                        <table>
                            <tbody>
                            <tr>
                                <th>Username</th>
                                <td>{data.username}</td>
                            </tr>
                            <tr>
                                <th>Full Name</th>
                                <td>{data.first_name + data.last_name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <td>{data.address.country}</td>
                            </tr>
                            <tr>
                                <th>Subs status</th>
                                <td>{data.subscription.status}</td>
                            </tr>
                            <tr>
                                <th>Payment Method</th>
                                <td>{data.subscription.payment_method}</td>
                            </tr>
                            </tbody>
                        </table>
                    </>
                : <p className="err">Error Occured while fetching data from API</p> : <p>Loading ...</p> }

            </div>
            <style>{`
                .main {
                    padding: 5px;
                    display: grid;
                    place-content: center;
                }
                h1, p {
                    margin: .5em auto;
                    text-align: center;
                }
                p {
                    margin-bottom: 1em;
                }
                table {
                    margin: auto;
                }
                table, td, th {
                    width: clamp(50%, 700px, 90%);
                    border-collapse: collapse;
                    border: 1px solid black;
                    padding: 8px 12px;
                }
                td {
                    text-align: center;
                }
                .err {
                    text-align: center;
                    color: red;
                }
            `}</style>
        </Layout>
    )
}
