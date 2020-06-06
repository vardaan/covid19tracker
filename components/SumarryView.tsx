import SummaryCard from './SummaryCard';
import { Global } from '../data/CovidData';
const SumarryView = ({ data }: { data: Global }) => {
    return (
        <div className={'container'}>
            <SummaryCard title={'Total Cases'} count={data.TotalConfirmed} subtitle={data.NewConfirmed} />
            <SummaryCard title={'Total deaths'} count={data.TotalDeaths} subtitle={data.NewDeaths} />
            <SummaryCard title={'Total Recovery'} count={data.TotalRecovered} subtitle={data.NewRecovered} />
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: space-between;
                    width: 80%;
                    margin-top: 64px;
                }
            `}</style>
        </div>
    );
};
export default SumarryView;
