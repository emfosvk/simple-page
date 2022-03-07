

const MainPage = ({changeMode}, {loginInfo}) => {

    const backToLogin = () => {

        changeMode({'userId' : '', 'userPwd' : ''});
    }

    const consoleLoginInfo = () => {
        const info = {loginInfo};
        console.log(info.userId);
    }

    return(

        <>
            <div className="mainPageBody">
                <div className="bgimg w3-display-container w3-animate-opacity w3-text-white ">
                    <div className="w3-display-topleft w3-padding-large w3-xlarge">
                        Logo
                    </div>
                    <div className="w3-display-middle">
                        <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
                        <hr className="w3-border-grey" style={{margin:"auto", width:"40%"}} />
                            <p className="w3-large w3-center">35 days left</p>
                    </div>
                    <div>
                        <h1>
                            {
                                {loginInfo} ? 'AAAA' : 'Login Info None'
                            }
                        </h1>
                        <button onClick={backToLogin}>back To Login</button>
                        <br/>
                        <button onClick={consoleLoginInfo}>Console Login Info</button>
                    </div>
                    <div className="w3-display-bottomleft w3-padding-large">
                        Powered by w3.css
                    </div>
                </div>
            </div>

        </>

    )
}

export default MainPage