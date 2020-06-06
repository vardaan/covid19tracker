import Head from 'next/head';
import NavBar from '../components/NavBar';
import SumarryView from '../components/SumarryView';
import CountryView from '../components/CountryView';
import React from 'react';
import { CovidData } from '../data/CovidData';
import { TimeLineData, CovidDatav2 } from '../data/CovidData2';
import { CountryDataResponse } from '../data/CountryData';

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
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <NavBar />
                <main>
                    {data &&
                        countryData &&(
                            <>
                                <SumarryView data={data} />
                                <CountryView data={countryData} />
                            </>
                        )}
                </main>

                <footer></footer>

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
