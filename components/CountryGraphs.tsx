import { CountryDetailResponse } from '../data/CountryDetail';
import Graph from './Graph';
import React from 'react';

export default function CountryGraphs({ data }: { data: CountryDetailResponse }) {
    const confirmedCases =
        data &&
        data.data.timeline.map(({ date, confirmed }) => {
            return { x: new Date(date), y: confirmed };
        });

    const totalDeaths =
        data &&
        data.data.timeline.map(({ date, deaths }) => {
            return { x: new Date(date), y: deaths };
        });
    return data ? (
        <div className={'container'}>
            <Graph graphData={confirmedCases} label={'Total Confirmed cases'} />
            <Graph graphData={totalDeaths} label={'Total Deaths'} />
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
                    column-gap: 10px;
                    row-gap: 10px;
                    width: 80%;
                    justify-content: center;
                }
            `}</style>
        </div>
    ) : null;
}
