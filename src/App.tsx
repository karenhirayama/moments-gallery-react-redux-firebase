import './App.css';
import Feed from './components/Feed/Feed';
import { Header } from './components/Header/Header';
import { Insides } from './components/Insides/Insides';

function App() {

  return (
    <div className="App">

      {/* Login */}

      {/* Inside */}
      <div className="momentsGallery">
        {/* Header */}
        <Header />

        <div className="momentsGallery__body">
        <Feed />
        <Insides />
        </div>

        {/* Body */}
      </div>

    </div>
  );
}

export default App;
