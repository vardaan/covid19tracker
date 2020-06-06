import { Country } from '../data/CovidData';
import { formatNumber } from '../utils/utils';
const CountryView = ({ data }: { data: Country[] }) => {
    const headers = ['Countries', 'Total Confirmed', 'Total Deaths', 'Total Recovered'];
    const sortedData = data.sort((a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed);
    return (
        <div className={'maincontainer'}>
            <table className="table">
                <thead>
                    {headers.map((it) => (
                        <th className={'header'}>{it}</th>
                    ))}
                </thead>
                <tbody>
                    {sortedData.map((it) => (
                        <tr className={'row'} key={it.Country}>
                            <td>{it.Country}</td>
                            <td>{formatNumber(it.TotalConfirmed)}</td>
                            <td>{formatNumber(it.TotalDeaths)}</td>
                            <td>{formatNumber(it.TotalRecovered)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
                th {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 28px;
                    line-height: 33px;
                    letter-spacing: -0.5px;
                    text-align: start;
                    padding-left: 4px;
                    color: rgba(255, 255, 255, 0.6);
                }
                td {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 22px;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    line-height: 33px;
                    letter-spacing: -0.5px;
                    color: rgba(255, 255, 255, 0.6);
                }

                .maincontainer {
                    display: flex;
                    width: 80%;
                    margin-top: 64px;
                }
                .line {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
                    height: 1px;
                    width: 100%;
                }
                .table {
                    width: 100%;
                    justify-content: space-between;
                    margin-top: 48px;
                    border-collapse: collapse;
                }
                .row {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
                }
                thead {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
                }
            `}</style>
        </div>
    );
};

export default CountryView;
