
import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'




class Repos extends Component {
	constructor(props){
		//call to super() should be the first statement in the constructor
		super(props)
	}

	render(){
		return(
			<div>
				<div><p>Repos</p>
				<li><Link to="/" activeStyle={{ color: 'red' }}>Navigate to home</Link></li>
    			</div>
			</div>
			)
		
		
	}

}

function mapStateToProps(state,ownParams){
	return {
		test: state
	}
}

export default connect(mapStateToProps)(withRouter(Repos))

