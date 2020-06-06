import { Country } from '../data/CovidData';
const CountryView = ({ data }: { data: Country[] }) => {
    const headers = ['Countries', 'Total Cases', 'Total Deaths', 'Total Recovered'];
    return (
        <div className={'maincontainer'}>
            <table className="table">
                <tbody>
                    {headers.map((it) => (
                        <th className={'header'}>{it}</th>
                    ))}
                    <div className={'line'}></div>
                    {data.map((it) => (
                        <tr>
                            <td>{it.Country}</td>
                            <td>{it.TotalConfirmed}</td>
                            <td>{it.TotalDeaths}</td>
                            <td>{it.TotalRecovered}</td>
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
                    align-self: flex-start;
                    justify-content: flex-star;
                    color: rgba(255, 255, 255, 0.6);
                }
                td {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 28px;
                    line-height: 33px;
                    letter-spacing: -0.5px;
                    color: rgba(255, 255, 255, 0.6);
                }
                .line {
                }

                .maincontainer {
                    display: flex;
                    width: 100%;
                    margin-top: 64px;
                }
                .table {
                    width: 100%;
                    justify-content: space-between;
                    margin-top: 48px;
                }
            `}</style>
        </div>
    );
};

export default CountryView;
