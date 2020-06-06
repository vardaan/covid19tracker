const NavBar = () => (
    <div>
        <div className={'container'}>
            <img className={'applogo'} src={'/app-logo.png'} />
            <div className={'title'}>Covid19 Live stats</div>
        </div>
        <style jsx>{`
            .container {
                position: absolute;
                width: 100%;
                height: 80px;
                display: flex;
                left: 0px;
                top: 0px;
                background: rgba(33, 33, 33, 0.95);
            }
            .title {
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 42px;
                margin-left: 32px;
                line-height: 70px;
                color: #ffffff;
            }
            .applogo {
                height: 72px;
                margin-left: 24px;
            }
        `}</style>
    </div>
);

export default NavBar;
