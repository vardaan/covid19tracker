const NavBar = () => (
    <div>
        <div className={'container'}>
            <div className={'title'}>Covid19 Live stats</div>
        </div>
        <style jsx>{`
            .container {
                position: absolute;
                width: 100%;
                height: 80px;
                left: 0px;
                top: 0px;
                background: rgba(33, 33, 33, 0.95);
            }
            .title {
                position: absolute;
                font-family: Roboto;
                font-style: normal;
								font-weight: 300;
								font-size: 42px;
								margin-left:32px;
								line-height: 70px;
								color: #FFFFFF;
            }
        `}</style>
    </div>
);

export default NavBar;
