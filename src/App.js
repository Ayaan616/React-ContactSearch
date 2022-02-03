import React,{Component} from "react"
import CardList from './components/card-list/cardList';
import SearchBox from './components/search/search-box.components';

import "../src/App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      monster:[],
      searchField:"",
      emailSearchField:""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({monster:data}))
  }
  render(){
    const searchField = this.state.searchField
    const monster = this.state.monster
    const filteredMonster = monster.filter(monster=>monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
    <>
    <div>
      <h1 className="App">React Based People Search</h1>
      <SearchBox placeholder="Search People" props={e=>this.setState({searchField:e.target.value})} ></SearchBox>
      <CardList monsters={filteredMonster}></CardList>
    </div>
    </>
    )
  }
}

export default App;
