import SummaryCard from './SummaryCard';
import { Global } from '../data/CovidData';
const SumarryView = ({ data }: { data: Global }) => {
    return (
        <div className={'container'}>
            <SummaryCard
                title={'Total Cases'}
                count={data.TotalConfirmed}
                subtitle={data.NewConfirmed + ' new cases'}
                color={'#F33460'}
            />
            <SummaryCard
                title={'Total deaths'}
                count={data.TotalDeaths}
                subtitle={data.NewDeaths + ' new deaths'}
                color={'#F33460'}
            />
            <SummaryCard
                title={'Total Recovery'}
                count={data.TotalRecovered}
                subtitle={data.NewRecovered + ' newly recovered'}
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
