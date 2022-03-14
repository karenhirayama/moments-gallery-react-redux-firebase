import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import { Header } from './components/Header/Header';
import { Insides } from './components/Insides/Insides';
import { LoginApp } from './components/Login/LoginApp';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User in logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        // User is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="App">

      {/* Login */}

      {user.user === null ?
        (
          <>
            <LoginApp />
          </>

        ) :
        <div className="momentsGallery">
          <div className="momentsGallery__header">
            <Header />
          </div>
          <div className="momentsGallery__body">
            <Feed />
            <Insides />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
