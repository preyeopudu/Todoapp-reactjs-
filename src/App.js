import { BookContextProvider } from "./components/BookContext";
import {Navbar} from './components/Navbar'
import './App.css';
import { BookList } from "./components/BookList";
import { BookForm } from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
          <Navbar/>
          <BookList/>
          <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
