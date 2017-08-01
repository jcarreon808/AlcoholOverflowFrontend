import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBar = ({ clearSearchBar }) => {
  return(
    <Menu className="ui top fixed menu">
      <Menu.Item header>Wine Overflow</Menu.Item>
      <Link to='/home' >  <Menu.Item name="home">Home</Menu.Item></Link>
      <Link to='/winelist' onClick={clearSearchBar}><Menu.Item name='wine list'  /></Link>
    </Menu>
  )
}

export default NavBar
