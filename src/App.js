import logo from './logo.svg';
import './App.css';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

const App = () => {
 
   (
    <div className="App">
        <h1>Hackers Stories</h1>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text"/>
        <hr />

        <List/>
        
    </div>
  );
}
const List = () =>
  list.map(item =>(
   <div key={item.objectID}>
      <h3>
      <a href={item.url}>{item.title}</a>
      </h3>
      <h4>{item.author}</h4>
      <p>{item.num_comments}</p>
      <p>{item.points}</p>

      </div>
      )
    )



export default App;
