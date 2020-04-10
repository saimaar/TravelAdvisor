import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import HeaderContainer from './HeaderContainer.jsx'
import Footer from './Footer'
import NotFound from './NotFound';

class App extends Component {

  state={
    user: {},
    destinations:[],
    search: "",
    error: ""
  }

  componentDidMount() {
    fetch(`https://travel-advisor-api.herokuapp.com/destinations`)
    .then(r => r.json())
    .then((destinations) => {
      this.setState({
        destinations
      })
    })

    if(localStorage.token){
      fetch(`https://travel-advisor-api.herokuapp.com/persist`, {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if(data.token){
          this.setState({
              user: data.user
            })
          }
        })
      }
  }

  createNewUser = (newUser) => {
    this.setState({
      user: newUser.user,
      token: newUser.token
    })
  }

  loginUser = (user) => {
    fetch('https://travel-advisor-api.herokuapp.com/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(userData => {
      if(userData.error){
        this.setState({
          error: userData.error
        })
      }else{
        localStorage.setItem("token", userData.token)
        this.setState({
          user: userData.user,
          search: ""
        })
      }
    })



  }

  updateSearchForm = (newValue) => {
    this.setState(prevState => {
      return {
        search: newValue
      }
    })
  }

  filterSearch = () => {
    let newArr = this.state.destinations.filter( destination => {
      let searchValue = this.state.search.toLowerCase()
      return destination.name.toLowerCase().includes(searchValue) || destination.trip_type.toLowerCase().includes(searchValue)
    })
    return newArr
  }

  clearSearch = (emptyValue) => {
    this.setState({
      search: emptyValue
    })
  }

  render() {
    console.log(this.state.user);
    let destinationsId = this.state.destinations.map(destination => destination.id)

    return (
      <div className="page-window">
          <HeaderContainer error={this.state.error} createNewUser={this.createNewUser} loginUser={this.loginUser} historyProps={this.props} />
          <hr className="header-separation"/>

        <Switch>
          <Route exact path='/' render={ () => <HomeContainer
          clearSearch={this.clearSearch}
          destinations={this.filterSearch()}
          search={this.state.search}
          updateSearchForm={this.updateSearchForm}
          routerProps={this.props}
          user={this.state.user}
          />} />
          <Route exact path='/profile' render={localStorage.token ? (routerProps) => <ProfileContainer routerProps={routerProps} /> : (routerProps) => <NotFound />}/>
          <Route path='/:id' render={ (routerProps) => <ShowContainer user={this.state.user} routerProps={routerProps} destinationsId={destinationsId} /> }/>
        </Switch>

        <Footer />
      </div>
    )
  }

}


export default withRouter(App);
