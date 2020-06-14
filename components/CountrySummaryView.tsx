import SummaryCard from './SummaryCard';
import React from 'react';
import { CountryDetailResponse } from '../data/CountryDetail';
const CountrySummaryView = ({ data }: { data: CountryDetailResponse }) => {
    const countryData = data.data.latest_data;

    return (
        <div className={'container'}>
            <SummaryCard
                className={'item'}
                title={'Total Cases'}
                count={countryData.confirmed}
                subtitle={''}
                color={'#F33460'}
            />
            <SummaryCard
                className={'item'}
                title={'Total deaths'}
                count={countryData.deaths}
                subtitle={''}
                color={'#F33460'}
            />
            <SummaryCard
                className={'item'}
                title={'Total Recovery'}
                count={countryData.recovered}
                subtitle={''}
                color={'#02EEAB'}
            />

            <SummaryCard
                className={'item'}
                title={'Total Recovery'}
                count={countryData.critical}
                subtitle={''}
                color={'#02EEAB'}
            />
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    column-gap: 10px;
                    row-gap: 10px;
                    width: 90%;
                }
            `}</style>
        </div>
    );
};
export default CountrySummaryView;
