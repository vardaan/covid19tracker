import Head from 'next/head';
import NavBar from '../components/NavBar';
import SumarryView from '../components/SumarryView';
import CountryView from '../components/CountryView';
import React from 'react';
import { CountryDataResponse } from '../data/CountryData';
import { CovidDatav2 } from '../data/CovidData2';
import * as firebase from 'firebase';

interface State {
    data: CovidDatav2;
    countryData: CountryDataResponse;
}
export default class Home extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.state = { data: null, countryData: null };
    }

    async componentDidMount() {
        try {
            const timelineRes = await fetch('https://corona-api.com/timeline');
            const data = (await timelineRes.json()) as CovidDatav2;
            data && this.setState({ data });
        } catch (e) {}
        this.getCountryData();

        const isProduction = process.env.NODE_ENV === 'production';
        isProduction && this.initialiseFirebase();
    }

    initialiseFirebase() {
        var firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_API_DOMAIN,
            databaseURL: process.env.FIREBASE_API_DB_URL,
            projectId: process.env.FIREBASE_API_PROJECT_ID,
            storageBucket: process.env.FIREBASE_API_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_API_APP_ID,
            measurementId: process.env.FIREBASE_API_MEASUREMENT_ID,
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const app = firebase.analytics();
        app.logEvent('page_view', {});
    }

    getCountryData = async () => {
        try {
            const res = await fetch('https://corona-api.com/countries');
            const data = (await res.json()) as CountryDataResponse;
            data && this.setState({ countryData: data });
        } catch (e) {}
    };
    render() {
        const { data, countryData } = this.state;
        return (
            <div className="container">
                <Head>
                    <title>Covid19 Live Statistics</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Live statistics and coronavirus news tracking the number of confirmed cases, recovered patients, tests, and death toll due to the COVID-19 coronavirus from Wuhan, China. Coronavirus counter with new cases, deaths, and number of tests per 1 Million population. Historical data and info. Daily charts, graphs, news and updates"
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <NavBar />
                <main>
                    {data && countryData && (
                        <>
                            <SumarryView data={data} />
                            <CountryView data={countryData} />
                        </>
                    )}
                </main>

                <footer />

                <style jsx>{`
                    .container {
                        min-height: 100vh;
                        padding: 0 0.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    main {
                        padding: 5rem 0;
                        flex: 1;
                        display: flex;
                        width: 100%;
                        flex-direction: column;
                        align-items: center;
                    }

                    footer {
                        width: 100%;
                        height: 100px;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    footer img {
                        margin-left: 0.5rem;
                    }

                    footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}</style>

                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        background: #121212;
                        font-family: Roboto 100 200 300 400, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu,
                            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    }

                    * {
                        box-sizing: border-box;
                    }
                `}</style>
            </div>
        );
    }
}
