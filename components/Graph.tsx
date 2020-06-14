import React from 'react';
import { Chart } from 'react-charts';
interface GraphData {
    x: number;
    y: number;
}

interface Props {
    graphData: GraphData[];
    label: string;
}
function Graph(props: Props) {
    const data = React.useMemo(() => {
        return [
            {
                label: props.label,
                data: [...props.graphData],
            },
        ];
    }, [props.graphData]);

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        [],
    );

    const series = React.useMemo(
        () => ({
            showPoints: false,
        }),
        [],
    );

    return (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '450px',
                height: '300px',
                background: '#1c1f25',
                marginTop: '60px',
                marginLeft: '40px',
            }}
        >
            <div className={'label'}>{props.label}</div>
            <Chart
                data={data}
                axes={axes}
                series={series}
                dark
                getSeriesStyle={() => ({
                    color: '#F33460',
                })}
            />

            <style jsx>{`
                .label {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 200;
                    font-size: 18px;
                    line-height: 28px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.7);
                    margin-top: 16px;
                    margin-left: 170px;
                }
            `}</style>
        </div>
    );
}

export default Graph;
