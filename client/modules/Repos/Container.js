
import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'
import styled from 'styled-components';

import {getRepoNames,setRepoNames,resetRepos} from './Actions'

export const CompLayoutBorder = styled.div`
	border:1px solid #f1efef;
	padding:25px
	`;


class Repos extends Component {
	constructor(props){
		//call to super() should be the first statement in the constructor
		super(props)
		this.setRepos = this.setRepos.bind(this)
		this.resetRepos = this.resetRepos.bind(this)
	}

	setRepos(){
		const repoName = ['Hello','World','Repo','Made']
		this.props.dispatch(setRepoNames(repoName))
	}

	resetRepos(){
		this.props.dispatch(resetRepos())
	}


	render(){
		const repoList = this.props.repo.repoList && this.props.repo.repoList.map((item)=>{return <li key={item}>{item}</li>}),
			margin = {'marginTop':'20px'}

		return(
			<CompLayoutBorder>
				<div><p>Repos</p>
				<li><Link to="/" activeStyle={{ color: 'red' }}>Navigate to home</Link></li>
                <li style = {margin}>
					<button onClick={this.setRepos}>
							Set Repos
					</button>
					<ul>
						{repoList}
					</ul>
				</li>
				{this.props.repo.repoList.length > 0 && <li style={margin}>
					<button onClick={this.resetRepos}>
							Reset Repos
					</button>
				</li>}
    			</div>
			</CompLayoutBorder>
			)

	}

}

function mapStateToProps(state,ownParams){
	return {
		repo: state.repos
	}
}

export default connect(mapStateToProps)(withRouter(Repos))

