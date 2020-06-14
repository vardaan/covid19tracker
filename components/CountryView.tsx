import { formatNumber } from '../utils/utils';
import React from 'react';
import { CountryData, CountryDataResponse } from '../data/CountryData';
import Router from 'next/router';
import Link from 'next/link';

const CountryView = ({ data }: { data: CountryDataResponse }) => {
    const headers = ['Countries', 'Total Confirmed', 'Total Deaths', 'Total Recovered'];
    const sortedData = data.data
        .sort((a: CountryData, b: CountryData) => b.latest_data.confirmed - a.latest_data.confirmed)
        .filter((it) => it.latest_data.confirmed !== 0);
    return (
        <div className={'maincontainer'}>
            <table className="table">
                <thead>
                    {headers.map((it) => (
                        <tr key={it} className={'header'}>
                            <th id={'header-text'}>{it}</th>
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {sortedData.map((it) => (
                        <tr className={'row'} key={it.code}>
                            <td className="rowItem">
                                <Link href={`/country/${it.code}`}>
                                    <a> {it.name}</a>
                                </Link>
                            </td>
                            <td className="rowItem">{formatNumber(it.latest_data.confirmed)}</td>
                            <td className="rowItem">{formatNumber(it.latest_data.deaths)}</td>
                            <td className="rowItem">{formatNumber(it.latest_data.recovered)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
               span {
                  font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 20px;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    line-height: 33px;
                    letter-spacing: -0.5px;
                    color: rgba(255, 255, 255, 0.6);
                    text-decoration: underline;
                }
                th {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 24px;
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
                    font-size: 20px;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    line-height: 33px;
                    letter-spacing: -0.5px;
                    color: rgba(255, 255, 255, 0.6);
                }

                .maincontainer {
                    display: flex;
                    width: 85%;
                    margin-top: 64px;
                    background: #282B33;
                    padding: 24px;
                    border-radius: 8px;
								}
								a {
									color: rgba(255, 255, 255, 0.6);
								}

								a :hover{
									color: #02EEAB
								}
                .line {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
                    height: 1px;
                    width: 100%;
                }
                .table {
                    width: 100%;
                    justify-content: space-between;
                    border-collapse: collapse;
                    padding-left: 16px;
                }
                .row {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-content: flex-start;
                }
                thead {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .header {
										flex:0.25;
										color: rgba(255, 255, 255, 0.6);
								}

								#header-text {
									color: rgba(255, 255, 255, 1.0);
								}
								.rowItem{
									flex:0.25;
									color: rgba(255, 255, 255, 1.0);
								}
								@media only screen and (max-width: 600px) {
								  th {
                    font-size: 16px;
                }
                td {
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
};

export default CountryView;
