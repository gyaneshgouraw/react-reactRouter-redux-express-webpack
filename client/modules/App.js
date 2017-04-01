import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'

import Repos from './Repos'


class App extends Component {
	constructor(props){
		//call to super() should be the first statement in the constructor
		super(props)
	}

	render(){
		return(
			<div>
				<h1>Hello World redux</h1>
				<li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
				{this.props.children}
			</div>

			)
		
		
	}

}

function mapStateToProps(state,ownParams){
	return {
		test: state
	}
}

export default connect(mapStateToProps)(withRouter(App))

