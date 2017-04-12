
import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { withRouter ,Link} from 'react-router'
import styled from 'styled-components';

import {getRepoNames,setRepoNames,resetRepos} from './Actions'
import {Offline,Image} from '../styleComponents'

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
		const repoName = ['Client side rendered -1','CSR -2','CSR -3','CSR -4']
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
				<div><p>Repo</p>
				<li style = {margin}> If you directly reload this page - you will see server rendered Page</li>
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
				<Offline>
					<p>This image works offline
						<li>Want to test -</li>
						<li>Go offline and open in incognito mode </li>
						<li>It wont work(display), but in normal mode it will work while being offline</li> </p>
					<Image src = "https://brightonsc.vic.edu.au/images/Offline.png"/>
				</Offline>
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

