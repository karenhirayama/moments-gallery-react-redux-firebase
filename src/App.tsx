import './App.css';
import Feed from './components/Feed/Feed';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className="App">

      {/* Login */}

      {/* Inside */}
      <div className="momentsGallery">
        {/* Header */}
        <Header />
        <Feed />
        {/* Body */}
      </div>

    </div>
  );
}

export default App;
