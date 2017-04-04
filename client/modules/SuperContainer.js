import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'
import {LayoutBorder,Title,LayoutPadding} from './styleComponents'


class SuperContainer extends Component {
	constructor(props){
		//call to super() should be the first statement in the constructor
		super(props)
	}

	render(){
		return(
			<LayoutBorder>
				<Title>Super Container Layout</Title>
				<LayoutPadding>
					{ this.props.children }
				</LayoutPadding>
			</LayoutBorder>
			)
	}

}

function mapStateToProps(state,ownParams){
	return {
		test: state
	}
}

export default connect(mapStateToProps)(withRouter(SuperContainer))

