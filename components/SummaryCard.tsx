const SummaryCard = (props) => {
    return (
        <div className={'container'}>
            <div className={'title'}>{props.title}</div>
            <div className={'count'}>{props.count}</div>
            <div className={'subtitle'}>{'+ ' + props.subtitle}</div>
            <style jsx>{`
                .container {
                    background: rgba(33, 33, 33, 0.95);
                    padding: 32px;
                    margin-top: 32px;
                    margin-right: 32px;
                    margin-left: 32px;
                }
                .title {
                    /* Body 1 / Roboto Regular */
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 28px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.7);
                }
                .count {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 60px;
                    line-height: 70px;
                    letter-spacing: -0.5px;

                    color: #ffffff;
                }
                .subtitle {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 28px;
                    /* or 156% */
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.7);
                }
            `}</style>
        </div>
    );
};

export default SummaryCard;
