import React from 'react'
import { Link } from 'react-router'

// es6 class way of creating a component
class Header extends React.Component {
  render () {
    // variable containing 1 of 2 components
    let utilSpace
    if (this.props.showSearch) {
      // on the search page, show input
      utilSpace = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      // on the details page, show back button (to return to search page)
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          {/* logo takes you back to the home page */}
          <Link to='/'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
