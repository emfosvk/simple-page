import logo from './logo.svg';
import {useRef, useState} from "react";
import './App.css';
import LoginPage from "./component/LoginPage";
import MainPage from "./component/MainPage";
import './css/loginPage.css';
import './css/w3.css';
import './css/w3Font.css';


function App() {

  const [loginMode, setLoginMode] = useState(true);
  const [loginInfo, setLoginInfo] = useState({'userId' : 'aaa', 'userPwd' : 'bbb'})


  const changeMode = (loginInfo) => {
    console.log('changeMode');
    console.log(loginInfo);
    setLoginMode(!loginMode);
    setLoginInfo(loginInfo);
    console.log({loginInfo});
  }

  return (
      <>
        <div className="App">
          {
            loginMode ?
                <LoginPage changeMode={changeMode}/>
                : <MainPage changeMode={changeMode} loginInfo={loginInfo}/>
          }

        </div>
      </>

  );
}

export default App;
