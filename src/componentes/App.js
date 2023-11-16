import Main from './Main';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
  let contador = 0
  return (
    <div className="App">

      <Header contador={contador} />

      <Main uno={"probando prop"} dos={"funciona el prop"} />

      <Footer />
    </div>
  );
}

export default App;
