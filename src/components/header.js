import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

export function NavMenu({siteTitle}) {
  
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
			   <NavbarBrand>

			  <h1 style={{ margin: 0 }}>
        <Link to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
<h2>Registered Dietitian</h2>
</NavbarBrand>

			  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
			  <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
				<Nav>
				  <NavItem>
					<Link className="nav-link text-dark" to="/">Home</Link>
				  </NavItem>
				  <NavItem>
					<Link className="nav-link text-dark" to="/services">Services</Link>
				  </NavItem>
				  <NavItem>
					<Link className="nav-link text-dark" to="/contact">Contact</Link>
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
//      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
//        padding: `1.45rem 1.0875rem`,
      }}
    >
    </div>
	<NavMenu siteTitle={siteTitle}/>
  </header>
</>)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
