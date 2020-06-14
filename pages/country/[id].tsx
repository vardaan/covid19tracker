import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import { CountryDetailResponse } from '../../data/CountryDetail';
import CountrySummaryView from '../../components/CountrySummaryView';
import CountryGraphs from '../../components/CountryGraphs';

interface Props {
    code: string;
}
interface State {
    data: CountryDetailResponse;
}
export default class CountryPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    async componentDidMount() {
        const res = await fetch(`https://corona-api.com/countries/${this.props.code}`);
        const data = (await res.json()) as CountryDetailResponse;
        this.setState({ data });
    }

    static getInitialProps({ query: { id } }) {
        return { code: id };
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        const graphData =
            this.state.data &&
            this.state.data.data.timeline.map(({ date, confirmed }) => {
                return { x: new Date(date), y: confirmed };
            });
        return (
            <div className="container">
                <Head>
                    <title>Covid19 Live Statistics</title>
                    <link rel="icon" href={'/favicon.ico'} />
                    <meta
                        name="description"
                        content="Live statistics and corona-virus news tracking the number of confirmed cases, recovered patients, tests, and death toll due to the COVID-19 corona-virus from Wuhan, China. Corona-virus counter with new cases, deaths, and number of tests per 1 Million population. Historical data and info. Daily charts, graphs, news and updates"
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <NavBar />
                <main>
                    <>
                        {this.state.data && <CountrySummaryView data={this.state.data} />}
                        {this.state.data && <CountryGraphs data={this.state.data} />}
                    </>
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
                        background: #1c1f25;
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
