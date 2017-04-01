import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    	<div><p>About</p>
				<li><Link to="/repos" activeStyle={{ color: 'red' }}>Navigate to repos</Link></li>
    	</div>
    	)
  }
})
