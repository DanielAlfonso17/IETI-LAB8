import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import ResponsiveDrawer from './components/Drawer';
import OutlinedCard from './components/Card';
import NewTask from './components/NewTask';
import UserList from './components/UserList'

const LoginView = () => (
  <Login />
);

let cardList = [

  	{"description" : "actividad 1" ,
  	"responsable" : {
  		"nombre" : "Santiago Carrillo" ,
  		"email" : "sancarbar@gmail"
  	} ,
  	"status" : "ready" ,
  	"dueDate" : 156464645646},
    {"description" : "actividad 2" ,
  	"responsable" : {
  		"nombre" : "Daniel Alfonso" ,
  		"email" : "danielalfonso.29@hotmail.com"
  	} ,
  	"status" : "ready" ,
  	"dueDate" : 1211564},
    {"description" : "actividad 3" ,
  	"responsable" : {
  		"nombre" : "Felipe Bueno" ,
  		"email" : "danielalfonso.29@hotmail.com"
  	} ,
  	"status" : "Stop" ,
  	"dueDate" : 1211564}
]



class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      isLogginIn: false,
      task: cardList,
      userList: []
    }
    this.handleTask = this.handleTask.bind(this);
  }

  componentWillMount(){
    this.setState({
        isLogginIn: localStorage.getItem("isLogginIn")
    })
  }

  handleTask(testValue) {
    const list= this.state.task.concat(testValue);
    this.setState({
      task: list
    })
  }

  componentDidMount(){
    fetch('http://ietilab.southcentralus.azurecontainer.io:8080/user')
            .then(response => response.json())
            .then(data => {
                let userList = [];
                data.forEach((user) => {
                  userList.push(user);
                });

                this.setState({userList: userList});
            });
  }

  handleProfile(profile){
    this.setState({
      user: profile
    })
  }

  render(){
    return (
          <Router>

              <div className="App">
              <Switch>
              <Route exact path="/login" exact component={LoginView}/>
                <Route exact path="/task" exact component={NewTask}/>
              </Switch>
                  <br/>

                  {this.state.isLogginIn && (
                    <div>
                      <UserList list={this.state.userList}/>
                      <NewTask newTask={this.handleTask}/>
                      <ResponsiveDrawer profileUser={this.handleProfile}/>
                      <OutlinedCard items={this.state.task}/>
                    </div>)}
                  <ul>
                      {!this.state.isLogginIn && (
                        <div>
                          <li><Link to="/login">Login</Link></li>

                        </div>
                      )}
                  </ul>


              </div>
          </Router>
      );
  }
}

export default App;
