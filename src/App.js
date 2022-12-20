import React,{useState} from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
const App = () => {
  const [sort,setSort]=useState("");
  const [searchInput,searchFunction]=useState("");
  return (
    <div>
      <Header sort={sort} setSort={setSort} searchFunction={searchFunction} />
      <Home sort={sort} setSort={setSort} searchInput={searchInput}  />
    </div>
  )
}

export default App;