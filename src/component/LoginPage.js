import React, { useState } from 'react';

const LoginPage = ({changeMode}) => {

    const [userId, setUserID] = useState('');
    const [userPwd, setUserPwd] = useState('');

    const onChangeId = (e) => {
        console.log('ID : ' + e.target.value);
        setUserID(e.target.value);
    }

    const onChangePwd = (e) => {
        console.log('PW : ' + e.target.value);
        setUserPwd(e.target.value);
    }


    const loginFunction = () => {

        changeMode({'userId' : userId, 'userPwd' : userPwd});

    }

    return(

        <>
            <div className="loginBody">
            <header>
                <h1>Portal de Login</h1>
            </header>
            <main>
                <div id="login_form" className="form_class" onSubmit="return false;">
                    <div className="form_div">
                        <label>Login:</label>
                        <input className="field_class" name="login_txt" type="text" placeholder="Insert ID"
                               autoFocus
                               value={userId}
                               onChange={onChangeId}
                        />
                            <label>Password:</label>
                            <input id="pass" className="field_class" name="password_txt" type="password"
                                   placeholder="Insert Password"
                                   value={userPwd}
                                   onChange={onChangePwd}
                            />
                                <button className="submit_class" onClick={loginFunction}>Login</button>
                    </div>
                    <div className="info_div">
                        <p>Ainda não é um usuário registrado? Cadastre-se!</p>
                    </div>
                </div>
            </main>
            <footer>
                <p>Desenvolvido por <a href="#">JM_Code&trade;</a></p>
            </footer>
            </div>
        </>

    )
}
export default LoginPage