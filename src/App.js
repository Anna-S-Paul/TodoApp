import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Search from './components/Search';
import DeleteT from './components/DeleteT';
import ViewT from './components/ViewT';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddTodo/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/delete" element={<DeleteT/>}/>
      <Route path="/viewall" element={<ViewT/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
