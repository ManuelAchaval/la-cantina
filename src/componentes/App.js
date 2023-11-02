import Main from './Main';
import Header from './header/Header';
import Footer from './footer/Footer';
function App() {
  let contador = 0
  return (
    <div className="App">

      <Header contador={contador} />

      <Main uno={"hola soy un prop"} dos={"quiero trabjar de esto"} tres={true} />

      <Footer />
    </div>
  );
}

export default App;
