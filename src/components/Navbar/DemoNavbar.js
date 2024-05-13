import React from "react";
import { Link, NavLink } from "react-router-dom";
class DemoNavbar extends React.Component {
  componentDidMount() {
    // let headroom = new Headroom(document.getElementById("navbar-main"));
    // // initialise
    // headroom.init();
  }
  render() {
    return (
    <header >
<nav className="navbar navbar-expand-lg bg-primary navbar-light">
  <div className="container ms-5">
    <div className="row">
      <div className="col">
      <a className="navbar-brand" href="#">
  <img src={require("../../assets/img/brand/argon-react-white.png")} className="d-inline-block align-text-top" width="130" height="70"/>
</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="col">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Components</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">
                  <div>
                    <h6>Getting started</h6>
                    <p className="text-muted">Learn how to use Argon compiling Scss, change</p>
                  </div>
                </a></li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div>
                      <h6>Foundation</h6>
                      <p className="text-muted">Learn more about colors, typography, icons and the
 grid system we used for Argon.</p>
                    </div>
                  </a>
                </li>
                <li><a className="dropdown-item" href="#">
                  <div>
                    <h6>Component</h6>
                    <p className="text-muted">  Browse our 50 beautiful handcrafted components offered in the Free version.</p>
                  </div>
                </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Examples</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Landing</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Login</a></li>
                <li><a className="dropdown-item" href="#">Register</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>   
   <div className="col-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <div>
          <a href="https://www.instagram.com/creativetimofficial" target="_blank" data-toggle="tooltip" title="follow us on Instagram" className="btn btn-primary">
  <i className="fab fa-instagram fa">
    <span className="d-none">instagram</span>
    </i> 
</a>

        <a href="https://twitter.com/creativetimofficial" target="_blank" className="btn btn-primary " data-toggle="tooltip" title="follow us on twitter" >
          <i className="fab fa-twitter fa"></i>
          <span className="d-none">twitter</span>
        </a>      

    <a target="_blank" href="https://github.com/creativetimofficial" className="btn btn-primary " data-toggle="tooltip" title="Star us on Github">
      <i className="fab fa-github fa"></i>
   <span className="d-none">Github</span>
</a>

<a target="_blank" href="https://github.com/creativetimofficial" className="btn btn-primary" data-toggle="tooltip" title="Like us on Facebook">
  <i className="fab fa-facebook fa"></i>
  <span className="d-none">Facebook</span>
</a>

<a className="text-white ms-3">
  <button className="btn btn-white bg-white">
    <span>
    <i className="fa fa-cloud-download te text-primary">
    </i>
    </span>
  <span className="text-primary ms-2">Download</span>

  </button>

</a>
  </div>

          </div>
        </div>
      </div>
    </div>

</nav>
</header>
            )}}
export default DemoNavbar;

//                 <div className="navbar-collapse-header">
//                   <Row>
//                     <Col className="collapse-brand" xs="6">
//                       <Link to="/">
//                         <img
//                           alt="..."
//                           src={require("../../assets/img/brand/argon-react.png")}
//                         />
//                       </Link>
//                     </Col>
//                     <Col className="collapse-close" xs="6">
//                       <button className="navbar-toggler" id="navbar_global">
//                         <span />
//                         <span />
//                       </button>
//                     </Col>
//                   </Row>
//                 </div>
//                 <Nav className="navbar-nav-hover align-items-lg-center" navbar>
//                   <UncontrolledDropdown nav>
//                     <DropdownToggle nav>
//                       <span className="nav-link-inner--text">Components</span>
// </DropdownToggle>
// <DropdownMenu className="dropdown-menu-xl">
// <div className="dropdown-menu-inner">
// <Media className="d-flex aline-items-center"
// href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
// target="-blank"
// >
// <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
// <i className="ni ni-spaceship" />
// </div>
// <Media body className="ml-3">
// <h6 className="heading text-primary mb-md-1">Get started</h6>
// <p className="description d-none d-md-inline-block mb-0">Learn how to use Argon compiling Scss, change
//  brand colors and more.</p>
// </Media >
// </Media>
// <Media
//     className="d-flex align-items-center"
//     href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
//      target="_blank"
//      >
//      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
//      <i className="ni ni-palette" />
//      </div>
//       <Media body className="ml-3">
//        <h6 className="heading text-primary mb-md-1">
//       Foundation
//        </h6>
//       <p className="description d-none d-md-inline-block mb-0">
//        Learn more about colors, typography, icons and the
//        grid system we used for Argon.
//          </p>
//         </Media>
//         </Media>

// <Media
//                           className="d-flex align-items-center"
//                           href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
//                           target="_blank"
//                         >
//                           <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
//                             <i className="ni ni-ui-04" />
//                           </div>
//                           <Media body className="ml-3">
//                             <h5 className="heading text-warning mb-md-1">
//                               Components
//                             </h5>
//                             <p className="description d-none d-md-inline-block mb-0">
//                               Browse our 50 beautiful handcrafted components
//                               offered in the Free version.
//                             </p>
//                           </Media>
//                         </Media></div>
// </DropdownMenu>
// </UncontrolledDropdown>
{/* <UncontrolledDropdown nav> 
<DropdownToggle nav>
<i className="ni ni-collection d-lg-none mr-1"/>
<span className="nav-link-inner--text">Examples</span>
</DropdownToggle>
<DropdownMenu>
  <DropdownItem to="/landing-page" tag={Link}>Landing</DropdownItem>
<DropdownItem to="/profile-page" tag={Link}>Profile</DropdownItem>
<DropdownItem to="/login-page" tag={Link}>Login</DropdownItem>
<DropdownItem to="/register-page" tag={Link}>Register</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown> */}
// </Nav>
//     <Nav className="align-items-center">
//     <NavItem>
//       <NavLink 
//       className="nav-link-icon"
//       href="https://www.facebook.com/creativetim"
//       id="tooltip333589074"
//       target="_blank">
// <i class="fas fa-facebook fa"></i>
// <span className="nav-link-inner--text d-lg-none ml-2">Facebook</span>
//      </NavLink>
//      <UncontrolledTooltip delay={0} target="tooltip333589074"> Like us on Facebook</UncontrolledTooltip>
//     </NavItem>

// <NavItem>
//   <NavLink className="nav-link-icon" 
//    href="https://www.instagram.com/creativetimofficial"
//    id="tooltip356693867"
// target="_blank"
// >
// <i className="fab fa-instagram fa"></i>
// <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
//   </NavLink>
//   <UncontrolledTooltip delay={0} target="tooltip356693867">follow us on Instagram</UncontrolledTooltip>
// </NavItem>
// <NavItem>
//   <NavLink className="nav-link-icon" target="_blank" 
//   href="https://twitter.com/creativetim" id="tooltip184698705"
//   >
//   <i class='fab fa-twitter fa'></i>
// <span className="nav-link-inner--text d-lg-none ml-2">Twitter</span>
//   </NavLink>
//   <UncontrolledTooltip delay={0} target="tooltip184698705" >  follow us on Twitter</UncontrolledTooltip>
// </NavItem>
// <NavItem >
// <NavLink className="nav-link-icon" target="_blank"
//  href="https://github.com/creativetimofficial/argon-design-system-react"
// id="tooltip112445449"
// >
//   <i class="fa fa-github fa"></i>
// <span className="nav-link-inner--text d-lg-none ml-2">github</span>
//   </NavLink>
//   <UncontrolledTooltip delay={0} target="tooltip112445449"> Star us on Github
// </UncontrolledTooltip>
// </NavItem>
// <NavItem>
// <Button
//                       className="btn-neutral btn-icon"
//                       color="default"
//                       href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
//                       target="_blank"
//                     >
//                       <span className="btn-inner--icon">
//                         <i className="fa fa-cloud-download mr-2" />
//                       </span>
//                       <span className="nav-link-inner--text ml-1">
//                         Download
//                       </span>
//                     </Button>
// </NavItem>
//       </Nav>  
//      </UncontrolledCollapse>
//         </Container>
//       </Navbar>
//     </header>
//     </>
//   )
// }
// }
// export default DemoNavbar


