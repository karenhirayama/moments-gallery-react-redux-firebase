import './App.css';
import Feed from './components/Feed/Feed';
import { Header } from './components/Header/Header';
import { Insides } from './components/Insides/Insides';
import { LoginApp } from './components/Login/LoginApp';

function App() {

  const user = false;

  return (
    <div className="App">

      {/* Login */}

      {!user ?
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
