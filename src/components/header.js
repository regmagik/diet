import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button, Collapse, Container, Row, Col, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export function NavMenu(props) {
  
	const [state, setState] = React.useState({
		collapsed: true
	});

	function toggleNavbar () {
	  setState(s => ({...s,
		collapsed: !s.collapsed
	  }));
	}
  
	  return (
		<header>
		  <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
			<Container>
			  <NavbarBrand href="/">Lena Gabinskaya</NavbarBrand>
			  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
			  <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
				<Nav>
				  <NavItem>
					<NavLink className="text-dark" href="/">Home</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className="text-dark" href="/dietitian">Dietitian</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className="text-dark" href="/services">Services</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className="text-dark" href="/contact">Contact</NavLink>
				  </NavItem>
				</Nav>
			  </Collapse>
			</Container>
		  </Navbar>
		</header>
	  );
}

const Header = ({ siteTitle }) => (
<>  <header
    style={{
      background: `rgb(110,141,63)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
<h2>Registered Dietitian</h2>
    </div>
  </header>
<NavMenu/>
</>)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
