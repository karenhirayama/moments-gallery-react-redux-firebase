import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Insides } from './components/Insides/Insides';
import { LoginApp } from './components/Login/LoginApp';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
    }
    )
  }, []);

  useEffect(() => {
    setLoading(false);
  },[loading, user, dispatch]);

  console.log(loading)

  return (
    <div className="App">

      {loading && <h1>Loading</h1>}

      {(user.user === null) ?
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
            <div className="momentsGallery__container">
              <Feed />
              <Insides />
            </div>
            <div className='moments__footer'>
              <Footer />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
