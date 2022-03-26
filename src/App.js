import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Products from './Component/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <h2>How React Works?</h2>
      <p>Answer: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. React will efficiently update and render just the right component when your data changes.</p>
      <h2>What is usestate?</h2>
      <p>Answer: First We have the functional component which does not support state. In other Words a functional component is a stateless component Noe with Hooks we have the functional component but stateful it is achieved by using usestate.</p>
    </div>
  );
}

export default App;
