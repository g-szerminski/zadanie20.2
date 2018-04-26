import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class App extends Component {
	render() {
		return (
			
<Router history={hashHistory}>
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact} />
    </Route>
</Router>
		)
	}
}
const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
export default App

const Navigation = props => (
    <div>
       <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        {props.children}
    </div>
);


const PageNotFound = () => <h1>404 Not Found</h1>;
<Router history={hashHistory}>
        <Route path='/' component={Navigation}>
                <IndexRoute component={Home} />
                <Route path='/contact' component={Contact} />
        <Route path='*' component={PageNotFound} />
        </Route>
</Router>
