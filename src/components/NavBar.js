import React from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
const NavBar = ({ clearSearchBar }) => {
  return(
    <Menu>

      <Link to='/home' >  <Menu.Item header>Wine Overflow</Menu.Item></Link>
      <Link to='/winelist' onClick={clearSearchBar}><Menu.Item name='wine list'  /></Link>
      <Link to='/login' ><Menu.Item name='login'  /></Link>

    </Menu>
  )
}

export default NavBar
