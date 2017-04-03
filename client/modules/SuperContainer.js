import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'




class SuperContainer extends Component {
	constructor(props){
		//call to super() should be the first statement in the constructor
		super(props)
	}

	render(){
		return(
			<div style={{'border':'1px solid #f1efef'}}>
				<div>Super Container Layout</div>
				<div style = {{'padding':'25px'}}>{this.props.children}</div>
			</div>
			)
	}

}

function mapStateToProps(state,ownParams){
	return {
		test: state
	}
}

export default connect(mapStateToProps)(withRouter(SuperContainer))

