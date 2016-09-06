import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Leads from './leads'
import Accounts from './accounts'
import Appointments from './appointments'

var tabData = [
  { name: 'Leads', isActive: true },
  { name: 'Accounts', isActive: false },
  { name: 'Appointments', isActive: false }
];

var Tabs = React.createClass({
  render: function() {
    return (
      <ul className="nav nav-tabs">
        {tabData.map(function(tab){
          return (
            <Tab key={tab.name} data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this,tab)} />
          );
        }.bind(this))}     
      </ul>
    );
  }
});

var Tab = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
        <a href="#">{this.props.data.name}</a>
      </li>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.activeTab.name === 'Leads' ? 
			<Leads />
        :null} 
        {this.props.activeTab.name === 'Accounts' ? 
			<Accounts />
        :null} 
        {this.props.activeTab.name === 'Appointments' ?
			<Appointments />
        :null} 
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      activeTab: tabData[0]
    }
  }, 
  handleClick: function(tab) {
    this.setState({activeTab: tab});
  },
  render: function() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} />
      </div>
    );
  }
});

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  reactElement
)