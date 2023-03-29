import React from 'react';
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';
import Login from './components/Login';
import LoginLoad from './components/LoginLoad';


function App() {

  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>




        {!user ? (
          !loading ? (
            <Login></Login>
          ) : (
            <LoginLoad></LoginLoad>
          )

        ) : (<>
          <Header />
          <AppBody>
            <SideBar>
            </SideBar>

            <Routes>
              <Route exact path='/' element={<><Chat></Chat></>}></Route>
            </Routes>

          </AppBody>
        </>
        )}


      </BrowserRouter>
    </div >
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  color: white;
`;
