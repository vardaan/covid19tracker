import SummaryCard from './SummaryCard';
import { CovidDatav2 } from '../data/CovidData2';
const SumarryView = ({ data }: { data: CovidDatav2 }) => {
    const countryData = data.data[0];

    return (
        <div className={'container'}>
            <SummaryCard
                title={'Total Cases'}
                count={countryData.confirmed}
                subtitle={countryData.new_confirmed + ' new cases'}
                color={'#F33460'}
            />
            <SummaryCard title={'Total Active Cases'} count={countryData.active} color={'#F33460'} />
            <SummaryCard
                title={'Total deaths'}
                count={countryData.deaths}
                subtitle={countryData.new_deaths + ' new deaths'}
                color={'#F33460'}
            />
            <SummaryCard
                title={'Total Recovery'}
                count={countryData.recovered}
                subtitle={countryData.new_recovered + ' newly recovered'}
                color={'#02EEAB'}
            />
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: space-around;
                    width: 90%;
                    margin-top: 64px;
                }
            `}</style>
        </div>
    );
};
export default SumarryView;
