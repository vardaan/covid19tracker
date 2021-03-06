import { formatNumber } from '../utils/utils';

interface Props {
    title: string;
    subtitle?: string;
    count: number;
    color: string;
    className: string;
}
const SummaryCard = (props: Props) => {
    return (
        <div className={'container'}>
            <div className={'title'}>{props.title}</div>
            <div className={'count'}>{formatNumber(props.count)}</div>
            {props.subtitle && (
                <div className={'subtitle'} style={{ color: props.color }}>
                    {'+ ' + props.subtitle}
                </div>
            )}
            <style jsx>{`
                .container {
                    background: #282B33;
                    padding: 32px;
                    margin-top: 32px;
                    margin-right: 32px;
                    margin-left: 32px;
                    border-radius: 8px;
                    min-width: 300px;
                }
                .title {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 200;
                    font-size: 18px;
                    line-height: 28px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.7);
                }
                .count {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 48px;
                    line-height: 70px;
                    letter-spacing: -0.5px;

                    color: #ffffff;
                }
                .subtitle {
                    font-family: Roboto;
                    font-style: light;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 28px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.7);
								}
								@media only screen and (max-width: 600px) {
									.container {
                    min-width: 200px;
                }
                .title {
                    font-size: 14px;
                }
                .count {
                    font-size: 32px;
                }
                .subtitle {
                    font-size: 12px;
								}
            `}</style>
        </div>
    );
};

export default SummaryCard;
