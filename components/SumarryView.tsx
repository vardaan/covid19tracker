import SummaryCard from './SummaryCard';
import { CovidDatav2 } from '../data/CovidData2';
const SumarryView = ({ data }: { data: CovidDatav2 }) => {
    const countryData = data.data[0];

    return (
        <div className={'container'}>
            <SummaryCard
                className={'item'}
                title={'Total Cases'}
                count={countryData.confirmed}
                subtitle={countryData.new_confirmed + ' new cases'}
                color={'#F33460'}
            />
            <SummaryCard className={'item'} title={'Total Active Cases'} count={countryData.active} color={'#F33460'} />
            <SummaryCard
                className={'item'}
                title={'Total deaths'}
                count={countryData.deaths}
                subtitle={countryData.new_deaths + ' new deaths'}
                color={'#F33460'}
            />
            <SummaryCard
                className={'item'}
                title={'Total Recovery'}
                count={countryData.recovered}
                subtitle={countryData.new_recovered + ' newly recovered'}
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
export default SumarryView;
