
import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'
import styled from 'styled-components';

import {setAuthorName,getAuthorName,resetAuthorName} from './Actions'
import {LayoutBorder} from '../styleComponents'


export const CompLayoutBorder = styled(LayoutBorder)`
	border:1px solid #f1efef;
	padding:25px
	`;




class Home extends Component {
	constructor(props){
		//call to super() should be the first statement in the constructor
		super(props)
		this.setAuthor = this.setAuthor.bind(this)
		this.resetAuthor = this.resetAuthor.bind(this)
	}

	setAuthor(){
		this.props.dispatch(setAuthorName('GG'))
	}

	resetAuthor(){
		this.props.dispatch(resetAuthorName())
	}

	render(){
		const margin = {'marginTop':'20px'}
		return(
			<CompLayoutBorder>
				<div><p>HOME</p>
				<li><Link to="/repos" activeStyle={{ color: 'red' }}>Navigate to Repos</Link></li>
                <li style = {margin}><button onClick={this.setAuthor}>
						Set Author NAme
				</button> <span>{this.props.homeState && this.props.homeState.author}</span></li>

				{this.props.homeState.author && <li style={margin}>
					<button onClick={this.resetAuthor}>
						Reset Author Name
					</button> 
				</li>}
    			</div>
			</CompLayoutBorder>
			)

	}

}

function mapStateToProps(state,ownParams){
	return {
		homeState: state.home
	}
}

export default connect(mapStateToProps)(withRouter(Home))

