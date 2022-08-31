import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>Brian's Bistro</h1>
      <h2>Le Menu</h2>
      <Menu dishName="Grilled Cheese" price={35.00}>
        <p>Classic grilled brie and meunster on sourdough</p>
        <em>*This is not a vegan or gluten free option</em>
      </Menu>
      <Menu dishName="Steak" price={65.00}>
        <p>Grilled Porterhouse</p>
        <em>Includes roasted peppercorn bernaise sauce</em>
      </Menu>
      <Menu dishName="Sashimi" price={27.00}>
        <p>A sample of 10 different fish</p>
        <em>*Consuming raw or undercooked seafood might cause death</em>
      </Menu>
    </div>
  );
}

export default App;
