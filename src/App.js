import React,{useState} from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
const App = () => {
  const [sort,setSort]=useState("");
  return (
    <div>
      <Header sort={sort} setSort={setSort} />
      <Home sort={sort} setSort={setSort} />
    </div>
  )
}

export default App;