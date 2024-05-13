import React from "react";
import DemoNavbar from "../../components/Navbar/DemoNavbar";

class Landing extends React.Component{
componentDidMount(){

}
render(){
    return(
        <>
        <DemoNavbar/>
        <main class="bg-primary">
            <div>
             <span/>
               <span/>
               <span/>
               <span/>
               <span/>
               <span/>
               <span/>
               <span/>
               <span/>
               <span/>

            </div>
            <div class="container d-flex ms-5">
                      <div class="row">
                         <div class="col-6 mt-5 ">
                             <h1 class="fs-1 text-white fw-normal"> A beautiful Design System{" "}
                               <span class="d-block fw-light mt-2">completed with examples</span>
                             </h1>
                             <p class="text-white fs-5 fw-lighter mt-5">The design system comes with four pre-built pages to
                             help you get started faster. You can change the text and
                             images and you're good to go.</p>
                         </div>
                         <div class="mt-4">
                             <button type="button" class="btn btn-info py-2 px-4 text-white" 
                             href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page">

                             <span><i class="fa fa-code fa"/> </span>
                               <span class="p-1">COMPONENTS</span></button>
    
                              <button type="button" class="btn btn-light ms-3 py-2 px-4">
                              <span><i className="ni ni-cloud-download-95 mt-2" /></span>
                             <span class="p-1"> DOWNLOAD REACT</span></button>
    
                          </div>
                     </div>
            </div>
            {/* <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
              <div class="mt-5">
              <div class="container ms-5 ">
   <div class="col-lg-12 ">
    <div class="row">
        <div class="col-lg-4 ">
            <div class="card animate__slideOutUp">
                <div class="card-body">
                <div class="badge rounded-circle bg-info">
                <i className="ni ni-check-bold fs-1" />
                    </div>
                    <h6 class="text-primary mt-3 text-uppercase">Download Argon</h6>
                    <p class="text-muted">
                    Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                    </p>
                    <div>
                    <div class="badge bg-success text-uppercase rounded-pill py-2 px-3">design</div>
              <div class="badge bg-warning text-uppercase rounded-pill ms-2 py-2 px-3">system</div>
             <div class="badge bg-danger text-uppercase rounded-pill ms-2 py-2 px-3">creative</div>
              </div>
              <button class="btn btn-info mt-4 py-2 px-3 text-uppercase text-white mb-5" type="button">Learn more</button>
                </div>
                
            </div>
        </div>
        <div class="col-lg-4 ">
            <div class="card animate__slideOutUp ">
                <div class="card-body">
                <div class="badge rounded-circle bg-danger">
                <i className="ni ni-istanbul ni fs-1" />
                    </div>
                    <div>
                        <h6 className="text-primary mt-3 text-uppercase">Build Something</h6>
                        <p class="text-muted">Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.</p>
                            <div>
                                <div class="badge bg-success text-uppercase rounded-pill py-2 px-3">business</div>
                                <div class="badge bg-warning text-uppercase rounded-pill py-2 px-3 ms-2">vision</div>
                            <div class="badge bg-danger text-uppercase rounded-pill py-2 px-3 ms-2">success</div>
                            </div>
                            <button type="button" class="btn btn-danger mt-4 mb-5 text-uppercase py-2 px-3">learn more</button>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="col-lg-4 ">
            <div class="card animate__slideOutUp">
                <div class="card-body">
                <div class="badge rounded-circle bg-success">
                <i className="ni ni-planet ni fs-1" />
                    </div>
                    <div>
                        <h6 class="text-uppercase text-primary mt-3"> Prepare Launch</h6>
                        <p class="text-muted">   Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.</p>

                    </div>
                    <div>
                    <div class="badge rounded-pill bg-success text-uppercase py-2 px-2">marketing</div>
                    <div class="badge rounded-pill bg-warning text-uppercase py-2 px-2 ms-2">product</div>
                    <div class="badge rounded-pill bg-danger text-uppercase py-2 px-2 ms-2">launch</div>
                    </div>
                
                <button type="button" class="btn btn-success text-uppercase py-2 px-3 mt-4 mb-5">learn more</button>

                </div>
            </div>
        </div>
    </div>
    </div>
</div>
              </div>
        <div class="bg-light ">
            <div class="container mt-5 ms-5 ">
                <div class="col mt-5">
                <div class="row ">
                    <div class="col-lg-7 ">
                        <img src={require("../../assets/img/theme/promo-1.png")} class="mt-5" alt="..."/>
                    </div>
                    <div class="col ms-5 d-flex align-items-center">
    <div class="mt-5">
    <div class="badge rounded-circle bg-success mt-5">
    <i className="ni ni-settings-gear-65 fs-1 text-white" />
</div>
        <h6 class="mt-5 fs-1">Awesome features</h6>
        <p class="fst-italic text-muted mt-2 fs-5">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
      
        <ul class= "list-unstyled mt-5">
            <li class="d-flex align-items-center">
                <div class="badge rounded-circle bg-danger fs-6">
                    <i className="ni ni-settings-gear-65"/>
                </div>
               <div>
               <h6 class="ms-2">Carefully crafted components</h6>
               </div>
            </li>
            <li class="d-flex align-items-center mt-3">
                  <div class="badge rounded-circle bg-success fs-6">
                     <i class="ni ni-html5 "/>         
                  </div>
                  <div>
                    <h6 class="ms-2">Amazing page examples</h6>
                  </div>
            </li>
            <li class="d-flex align-items-center mt-3">
                <div class="badge rounded-circle bg-success fs-6">
                    <i className="ni ni-satisfied"/>
                </div>
                <div>
                    <h6 class="ms-2">Super friendly support team</h6>
                </div>
            </li>
        </ul>
    </div>
</div>
                   </div>
                   </div>                  
                    </div>
                    </div>
                    <div class=" bg-warning">
                        <div class="container ">
                            <div class="row">
                                <div class="col-6">
<div class="card bg-dark mt-5 ">
    <img src={require("../../assets/img/theme/img-1-1200x1000.jpg")} alt="..." class="card-img-top" />
    <div className="body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <div class="justify-content-center ms-3 mt-3">
                      <h5 class="title text-white fw-bold fs-1">Design System</h5>
                           <div class="card-text fst-italic text-white mb-5 fs-4"> The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.</div></div>
</div>
                                </div>
                            </div>
                            <div class="col-6 mt-5 fs-1 px-5">
                              <div class="badge rounded-circle bg-danger ">
                                <i class="ni ni-settings"/>
                              </div>
                              <div>
                                <h1 class="mt-5">Our customers</h1>
                                   <p class="fs-4 fw-lighter">Don't let your uses guess by attaching tooltips and
                      popovers to any element. Just make sure you enable them
                      first via JavaScript.</p>
                       <p class="fs-5 fw-light">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                         <p class="fs-5 fw-lighter">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                         <a class="text-danger fs-5 fw-bold text-decoration-none mt-2" href="#pablo" onClick={(e) => e.preventDefault()}>A beautiful UI Kit for impactful websites</a>

                         </div>
                            </div>
                        </div>
                    </div>

             </div>
   <div className="bg-secondary">
      <div className="container">
          <div className="row">
             <div className="col-6 mt-5">
                   <picture class="mt-5">
                       <source srcSet="..." type="image/svg"/>
                       <img src={require("../../assets/img/ill/ill-2.svg")} className="img-fluid img-thumbnail mt-5" alt="..."/>
                  </picture> 
             </div>
                   <div class="col-6 mt-5 d-flex align-items-center">
                      <div class="badge rounded-circle bg-white mb-5 me-3 ">
                         <i class="ni ni-building ni fs-1 bg-primary"/>
                     </div>
                      <div className="mt-5">
                         <h4 class="text-white fs-1 mt-5">Modern Interface</h4>
                         <p class="text-white fs-5 fw-lighter">The Arctic Ocean freezes every winter and much of the
                         sea-ice then thaws every summer, and that process will
                         continue whatever.</p>
                     </div>      
         
                 </div>

                 
                     <div class="card">
                         <div class="card-body">
                             <div class="badge rounded-circle">
                                <i class=""/>
                             </div>
                         </div>
                    
                     </div>
             </div>
    
    </div>
</div>

        </main>
        </>
    )
}
}
export default Landing
// import React from "react";
// import DemoNavbar from "../../components/Navbar/DemoNavbar.js";
// import classnames from 'classnames';

// // import {
// //   Container,
// //   Row,
// //   Col,
// //   Button,
// //   Card,
// //   CardBody,
// //   Badge,
// //   CardImg,
// //   FormGroup,
// //   InputGroup,
// //   InputGroupAddon,
// //   InputGroupText,
// //   Input

// // } from "reactstrap";
// // import classNames from "classnames";


// class landing extends React.Component{
//     componentDidMount(){

//     }
//     render(){
//         return(
//             <>
//             <DemoNavbar/>
//             <main rfc="main">
//                 <div >
//                     <section className="section"></section>
//                 </div>
//                 <div>
//                     <span/>
//                     <span/>
//                     <span/>
//                     <span/>
//                     <span/>
//                     <span/>
//                     <span/>
//                     <span/>
//                     <span/>  
//                 </div>
//                 <Container className="d-flex">
//                     <div>
//                         <Row>
//                             <Col>
//                             <h1 className="display-3">
//                                 A beautiful Design System {""}
//                                 <span>completed with example</span>
//                             </h1>
//                             <p className="lead">
//                                 The design system comes with four pre-built pages 
//                         to help you get started faster.Ypu can change the text and image and your good to go.
//                             </p>
//                             <div className="btn-wrapper">
//                                 <Button color="info" className="btn-icon"
//                 href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"

//                                 >
//                                     <span className="btn-inner--icon">
//                                      <i className="fa fa-code "></i>   
//                                     </span>
//                                            <span className="btn-inner--text">Component</span>

//                                 </Button>
//                                 <Button className="btn-white btn-icon ml-1 mb-sm-0 mb-3" color="default"
//                                     href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
//                                 >
//                                         <span className="btn-inner-icon mr-1"> <i className="ni ni-cloud-download-95" ></i></span>
//                                           <span className="btn-inner--text">Download React</span>
//                                 </Button>
//                             </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Container>
//                 <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   preserveAspectRatio="none"
//                   version="1.1"
//                   viewBox="0 0 2560 100"
//                   x="0"
//                   y="0"
//                 >
//                   <polygon
//                     className="fill-white"
//                     points="2560 0 2560 100 0 100"
//                   />
//                 </svg>
//                 </div>
//                 <section >
//                     <Container>
//                         <Row>
//                             <Col>
//                             <Card className="card-lift--hover shadow border-0">
//                                 <CardBody className="py-5">
//                                     <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
//                                     <i className="ni ni-check-bold" />
//                                     </div>
//                                  <h6 className="text-primary text-uppercase">Download</h6>
//                               <p className="description mt-3">
//                                 Argon is a great UI package based on Bootstrap 4
//                            that includes the most important components and features 
//                               </p>
//                               <div>
//                                 <Badge color="primary" pill className="mr-1">
//                                     design
//                                 </Badge>
//                                 <Badge color="primary" pill className="mr-1">
//                                     system
//                                 </Badge>
//                                 <Badge color="primary" pill className="mr-1">creative</Badge>
//                               </div>
//                               <Button className="mt-4" color="primary" href="#pablo" onClick={(e) => e.defaultPrevented()}>Learn more</Button>
//                                 </CardBody>
//                             </Card>
//                             </Col>
//                             <Col>
//                             <Card className="card-lift--hover shadow border-0">
//                                 <CardBody className="py-5">
//                                 <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
//                                     <i className="ni ni-istanbul" />
  
//                                     </div>
//                               <h6 className="text-success text-uppercase">Build Something</h6>
//                               <p className="description ">
//                                 Argon is a great free UI package based  on Bootstrap 4
//                                 that includes the most important components and features.
//                               </p>
//                               <div>
//                                 <Badge color="success" pill className="mr-1">Business</Badge>
//                                 <Badge color="success" pill className="mr-1">vision</Badge>
//                                 <Badge color="success" pill className="mr-1">success</Badge>  
//                               </div>
//                               <Button className="mt-4" color="success" href="#pablo" onClick={(e)=> e.preventDefault()}>learn more</Button>
//                                 </CardBody>
//                             </Card>
//                             </Col>

//                             <Col lg="4">
//                       <Card className="card-lift--hover shadow border-0">
//                         <CardBody className="py-5">
//                           <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
//                             <i className="ni ni-planet" />
//                           </div>
//                           <h6 className="text-warning text-uppercase">
//                             Prepare Launch
//                           </h6>
//                           <p className="description mt-3">
//                             Argon is a great free UI package based on Bootstrap
//                             4 that includes the most important components and
//                             features.
//                           </p>
//                           <div>
//                             <Badge color="warning" pill className="mr-1">
//                               marketing
//                             </Badge>
//                             <Badge color="warning" pill className="mr-1">
//                               product
//                             </Badge>
//                             <Badge color="warning" pill className="mr-1">
//                               launch
//                             </Badge>
//                           </div>
//                           <Button
//                             className="mt-4"
//                             color="warning"
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Learn more
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>                   
//                         </Row>
//                     </Container>
//                 </section>
//             <section className="section section-lg">
// <Container>
//     <Row className="row-grid align-items-center">
//         <Col className="order-md-2" md="6">
//         <img src={require("../../assets/img/theme/promo-1.png")} alt="..." className="img-fluid floating"/>
//         </Col>
//         <Col className="order-md-1" md="6">
//         <div >
//             <div className="icon icon-shape icon-shape-warning" >
//             <i class="fa fa-cog"></i> 
//             </div>
//             <h3>Awesome features</h3>
//             <p>The kit comes with three pre-built pages to help you get
//                       started faster. You can change the text and images and
//                       you're good to go.</p>
//                       <ul className="list-unstyled mt-5">
//                         <li>
//                             <div className="d-flex align-items-center">
//                             <div>
//                                 <Badge color="success" ><i className="fa fa-cog"></i></Badge>
//                             </div>
                            
//                             <div>
//                             <h6> Carefully crafted components</h6>
//                             </div>
//                             </div>
//                         </li>
//                         <li className="py-2">
//                             <div className="d-flex align-items-center">
//                                 <div>
//                                     <Badge color="success" className="badge-circle mr-3"><i className="fa fa-html5"></i></Badge>
//                                     </div>

//                                 <div>
//                                     <h6 className="mb-0">Amazing page examples</h6>
//                                 </div>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="d-flex align-items-center">
//                                 <div>
//                                     <Badge color="success"><i className="ni ni-satisfied"></i></Badge>
//                                 </div>
//                                 <div>
//                                     <h6> Super friendly support team</h6>
//                                 </div>
//                             </div>
//                         </li>
//                       </ul>
//         </div>
//         </Col>
//     </Row>
// </Container>
//             </section>
//             <section className="section bg-secondary">
//                 <Container>
//                     <Row>
//                     <Col md="6">
//                   <Card className="bg-default shadow border-0">
//                     <CardImg
//                       alt="..."
//                       src={require("../../assets/img/theme/img-1-1200x1000.jpg")}
//                       top
//                     />
//                     <blockquote className="card-blockquote">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="svg-bg"
//                         preserveAspectRatio="none"
//                         viewBox="0 0 583 95"
//                       >
//                         <polygon
//                           className="fill-default"
//                           points="0,52 583,95 0,95"
//                         />
//                         <polygon
//                           className="fill-default"
//                           opacity=".2"
//                           points="0,42 583,95 683,0 0,95"
//                         />
//                       </svg>
//                       <h4 className="display-3 font-weight-bold ">
//                         Design System
//                       </h4>
//                       <p className="lead text-italic ">
//                         The Arctic Ocean freezes every winter and much of the
//                         sea-ice then thaws every summer, and that process will
//                         continue whatever happens.
//                       </p>
//                     </blockquote>
//                   </Card>
//                 </Col>
//                         <Col md="6">
//                         <div className="pl-md-6">
//                             <div>
//                               <i className="ni ni-settings"></i>
//                               </div>
//                     <h3>Our customers</h3>
//                         <p className="lead">
//                         Don't let your uses guess by attaching tooltips and
//                       popovers to any element. Just make sure you enable them
//                       first via JavaScript.  
//                         </p>
//                         <p>
//                         The kit comes with three pre-built pages to help you get
//                       started faster. You can change the text and images and
//                       you're good to go.
//                         </p>
//                         <p>The kit comes with three pre-built pages to help you get
//                       started faster. You can change the text and images and
//                       you're good to go.</p>
//                        <a className="font-Weight-bold text-warning mt-5" href="#pablo" onClick={(e)=> e.preventDefault()}>
//                         A beautiful UI kit impactful website
//                        </a>
//                         </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
// <section className="section bg-gradient-warning">
//   <Container>
//     <Row className="row-grid align-items-center">
//     <Col className="order-lg-2 ml-lg-auto" md="6">
//                   <div className="position-relative pl-md-5">
//                     <img
//                       alt="..."
//                       className="img-center img-fluid"
//                       src={require("../../assets/img/ill/ill-2.svg")}
//                     />
//                   </div>
//                 </Col>

//                <Col className="order-lg-1" lg="6">
//                <div className="d-flex px-3">
//                 <div>
//                 <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
//                   <i className="ni ni-building text-primary"></i>
//                   </div>
//                </div>
//                <div className="pl-4">
//                 <h4 className="display-3">Modern Interface</h4>
//                 <p> The Arctic Ocean freezes every winter and much of the
//                         sea-ice then thaws every summer, and that process will
//                         continue whatever.
//                         </p>
//                </div>
               
//                </div>
//                <Card className="shadow shadow-lg--hover mt-5">
//                <CardBody>
//                       <div className="d-flex px-3">
//                         <div>
//                           <div className="icon icon-shape bg-gradient-success rounded-circle ">
//                             <i className="ni ni-satisfied" ></i>
//                           </div>
//                         </div>
//                         <div className="pl-4">
//                           <h5 className="title text-success">
//                             Awesome Support
//                           </h5>
//                           <p>
//                             The Arctic Ocean freezes every winter and much of
//                             the sea-ice then thaws every summer, and that
//                             process will continue whatever.
//                           </p>
//                           <a
//                             className="text-success"
//                             href="#pablo"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             Learn more
//                           </a>
//                         </div>
//                       </div>
//                     </CardBody>
//                 </Card>

//                 <Card>
//                 <CardBody>
//                     <div>
//                         <div>
//                          <div className="icon icon-shape bg-gradient-success rounded-circle ">
//                             <i className="ni ni-active-40"></i>
//                             </div>
//                               </div>
//                                  <div>
//                                     <h5 className="title text-warning"> Modular Components</h5>                           
//                                         <p>   The Arctic Ocean freezes every winter and much of
//                                            the sea-ice then thaws every summer, and that
//                                                 process will continue whatever.</p>
//                                                 <a className="text-warning" href="#pablo" onClick={(e)=> e.preventDefault()}>Learn more</a>
//                                      </div>
//                        </div>
//                 </CardBody>
//                 </Card>
//                </Col>

//     </Row>
//   </Container>
//   <div className="separator separator-bottom separator-skew zindex-100">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//                 version="1.1"
//                 viewBox="0 0 2560 100"
//                 x="0"
//                 y="0"
//               >
//                 <polygon
//                   className="fill-white"
//                   points="2560 0 2560 100 0 100"
//                 />
//               </svg>
//               </div>

//             </section>
// <section className="section section-lg">
// <Container>
//   <Row className="justify-content-center text-center">
//     <Col>
//     <h2 className="display-3">The amazing Team</h2>
//                        <p className="lead text-muted"> According to the National Oceanic and Atmospheric
//                     Administration, Ted, Scambos, NSIDClead scentist, puts the
//                     potentially record maximum.</p>
//     </Col>
//   </Row>

//   <Row>
//     <Col className="mb-5 mb-lg-0" lg="3" md="6">
     
//      <div className="px-4">
//                     <div className="pt-4 text-center">
//                     <img className=" img-center img-fluid rounded-circle shadow shadow-lg--hover mb-1" src={require("../../assets/img/theme/team-1-800x800.jpg")} style={{ width: "200px" }} alt="..." />

//                       <h5 className="title">
//                         <span className="d-block mb-1 ">Ryan Tompson</span>
//                         <small className="h6 text-muted">Web Developer</small>
//                       </h5>
//                       <div className="mt-3">
//   <Button className="rounded-circle btn-icon-only me-2" href="#pablo" color="warning" onClick={(e)=> e.preventDefault()}><i className="fa fa-twitter text-white"></i></Button>
// <Button className="rounded-circle btn-icon-only me-2" href="#pablo" color="warning" onClick={(e)=>e.preventDefault()}><i className="fa fa-facebook text-white"></i></Button>
// <Button className="btn-icon-only rounded-circle me-2" color="warning" href="#pablo" onClick={(e) =>e.preventDefault()}><i className="fa fa-dribbble fa text-white"></i></Button>
// </div>
//      </div>

// </div>
//      </Col>
//   <Col className="mb-5 mb-lg-0" lg="3" md='6'>
//  <div className="px-4">
//   <div className="text-center pt-4">
//   <img src={require("../../assets/img/theme/team-2-800x800.jpg")} style={{width:"200px"}} alt="..." className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-1"/>

//   <h5 className="title mb-3">
//     <span className="d-block mb-1">Romina Hadid</span>
//     <small className="h6 text-muted">Marketing Strategist</small>
//   </h5>
//   <div>
//   <Button className="btn-icon-only rounded-circle me-2" href="#pablo"  color="primary" onClick={(e) =>e.defaultPrevented()}><i className="fa fa-twitter text-white"></i></Button>
// <Button className="btn-icon-only rounded-circle me-2" href="#pablo" color="primary" onClick={(e)=>e.preventDefault()}><i className="fa fa-facebook text-white"></i></Button>
//   <Button className="btn-icon-only rounded-circle me-2" href="#pablo"  color="primary" onClick={(e) => e.preventDefault()}><i className="fa fa-dribbble text-white"></i></Button>
//   </div>
//   </div>
//  </div>
//   </Col>
//   <Col className="mb-5 mb-lg-0" lg="3" md="6">
//   <div className="px-4">
//   <div className="text-center pt-4">
//     <img src={require("../../assets/img/theme/team-3-800x800.jpg")} style={{ width: "200px" }} className="rounded-circle img-center img-fluid shadow shadow-lg--hover" alt="..."/>
//   <h5 className="title mb-4">
//     <span className="d-block mb-1">Alexander Smith</span>
//     <small className="h6 text-muted">UI/UX Designer</small>
//   </h5>
//   <div>
//     <Button className="btn-icon-only rounded-circle me-2" href="#pablo" color="info"><i className="fa fa-twitter text-white"></i></Button>
//     <Button className="btn-icon-only rounded-circle me-2" href="#pablo" color="info"><i className="fa fa-facebook text-white"></i></Button>
//     <Button className="btn-icon-only rounded-circle me-2" href="#pablo" color="info"><i className="fa fa-dribbble text-white"></i></Button>
//   </div>
//   </div>
//   </div>
//   </Col>
//   <Col className="mb-5 mb-lg-0" lg="3" md="6">
//   <div className="px-4"> 
//     <div className="text-center pt-4">
//       <img className="rounded-circle img-center img-fluid shadow shadow-lg--hover " style={{width:"200px"}} src={require("../../assets/img/theme/team-4-800x800.jpg")} alt="..."/>
//   <h5 className="title mb-4">
//     <span className="d-block">John Doe</span>
//   <small className="h6 text-muted">Founder and CEO</small>
//   </h5>
//   <div>
//     <Button className="rounded-circle btn-icon-only me-2" href="#pablo"  color="success"><i className="fa fa-twitter text-white"></i></Button>
//     <Button className="rounded-circle btn-icon-only me-2" href="#pablo" color="success"><i className="fa fa-facebook text-white" ></i></Button>
//     <Button className="rounded-circle btn-icon-only me-2" href="#pablo" color="success"><i className="fa fa-dribbble text-white"></i></Button>
//   </div>
//     </div>
//       </div>


//   </Col>
//   </Row>
// </Container>
// </section>
// <section className="section section-lg pt-0 mt-5">
//             <Container>
//               <Card className="bg-warning shadow-lg border-0">
//                 <div className="p-5">
//                   <Row className="align-items-center">
//                     <Col lg="8">
//                       <h3 className="text-white">
//                         We made website building easier for you.
//                       </h3>
//                       <p className="lead text-white mt-3">
//                         I will be the leader of a company that ends up being
//                         worth billions of dollars, because I got the answers. I
//                         understand culture.
//                       </p>
//                     </Col>
//                     <Col className="ml-lg-auto" lg="3">
//                       <Button
//                         block
//                         className="btn-white"
//                         color="default"
//                         href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
//                         size="lg"
//                       >
//                         Download React
//                       </Button>
//                     </Col>
//                   </Row>
//                 </div>
//               </Card>
//             </Container>
//           </section>
// <section className="section bg-dark section-lg mt-5">
//   <Container className="pt-lg pb-300">
//     <Row className="text-center justify-content-center">
//       <Col lg="10">
//     <h2 className="display-3 text-white">Build something</h2>   
//       <p className="text-white lead">
//       According to the National Oceanic and Atmospheric
//       Administration, Ted, Scambos, NSIDClead scentist, puts the
//       potentially record low maximum sea ice extent tihs year down
//       to low ice.
//       </p>
//       </Col>
//     </Row>
//     <Row className="row-grid mt-5">
//       <Col lg="4">
//       <div className="icon icon-lg icon-shape rounded-circle text-primary bg-gradient-white shadow">
//       <i className="ni ni-settings text-primary" />
//        </div>

//       <h5 className="text-white mt-3">Building tools</h5>
//       <p className="text-white mt-3">
//       Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//       </p>
//       </Col>
//       <Col lg="4">
//       <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
//         <i className="ni ni-ruler-pencil text-primary"/>
//       </div>
//       <h5 className="text-white mt-3">Grow your market</h5>
//       <p className="text-white mt-3">
//       Some quick example text to build on the card title and make
//                     up the bulk of the card's content. 
//       </p>
//       </Col>
//       <Col lg="4">
//       <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
//         <i className="ni ni-atom text-primary" />

//           </div>
//         <h5 className="text-white mt-3">Launch time</h5>
//         <p className="text-white mt-3">
//         Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//         </p>
//       </Col>
//     </Row>
//   </Container>
//   <div className="separator separator-bottom separator-skew z-index-100">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//                 version="1.1"
//                 viewBox="0 0 2560 100"
//                 x="0"
//                 y="0"
//               >
//                 <polygon
//                   className="fill-white"
//                   points="2560 0 2560 100 0 100"
//                 />
//               </svg>
//             </div>
// </section>
// <section>
//   <Container>
//     <Row className="justify-content-center">
//       <Col>
//       <Card className="bg-gradient-secondary shadow">
//         <CardBody className="p-lg-5">
//          <h4>Want to work with us?</h4> 
//        <p> Your project is very important to us.</p>
//        <FormGroup
//                         className={classnames("mt-5", {
//                           focused: this.state.nameFocused,
//                         })}
//                       > 
                      
//                       <InputGroup className="input-group-alternative">                       <InputGroupAddon></InputGroupAddon>
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                           <i className="ni ni-user-run"></i>
//                           </InputGroupText>
//                         </InputGroupAddon>
//                         <Input placeholder="Your name" type="text" onFocus={(e) =>this.setState({nameFocused:true})} onBlur={(e) =>this.setState({nameFocused:false})}/>
//                          </InputGroup>
// </FormGroup>
// <FormGroup className={classnames({focused:this.state.emailFocused})}>
  
// </FormGroup>
//         </CardBody>
//       </Card>
//       </Col>
//     </Row>
//   </Container>
// </section> 

// {/* <section className="section section-lg pt-lg-0 section-contact-us">
//             <Container>
//               <Row className="justify-content-center mt--300">
//                 <Col lg="8">
//                   <Card className="bg-gradient-secondary shadow">
//                     <CardBody className="p-lg-5">
//                       <h4 className="mb-1">Want to work with us?</h4>
//                       <p className="mt-0">
//                         Your project is very important to us.
//                       </p>
//                       <FormGroup
//                         className={classnames("mt-5", {
//                           focused: this.state.nameFocused,
//                         })}
//                       >
//                         <InputGroup className="input-group-alternative">
//                           <InputGroupAddon addonType="prepend">
//                             <InputGroupText>
//                               <i className="ni ni-user-run" />
//                             </InputGroupText>
//                           </InputGroupAddon>
//                           <Input
//                             placeholder="Your name"
//                             type="text"
//                             onFocus={(e) =>
//                               this.setState({ nameFocused: true })
//                             }
//                             onBlur={(e) =>
//                               this.setState({ nameFocused: false })
//                             }
//                           />
//                         </InputGroup>
//                       </FormGroup>
//                       <FormGroup
//                         className={classnames({
//                           focused: this.state.emailFocused,
//                         })}
//                       >
//                         <InputGroup className="input-group-alternative">
//                           <InputGroupAddon addonType="prepend">
//                             <InputGroupText>
//                               <i className="ni ni-email-83" />
//                             </InputGroupText>
//                           </InputGroupAddon>
//                           <Input
//                             placeholder="Email address"
//                             type="email"
//                             onFocus={(e) =>
//                               this.setState({ emailFocused: true })
//                             }
//                             onBlur={(e) =>
//                               this.setState({ emailFocused: false })
//                             }
//                           />
//                         </InputGroup>
//                       </FormGroup>
//                       <FormGroup className="mb-4">
//                         <Input
//                           className="form-control-alternative"
//                           cols="80"
//                           name="name"
//                           placeholder="Type a message..."
//                           rows="4"
//                           type="textarea"
//                         />
//                       </FormGroup>
//                       <div>
//                         <Button
//                           block
//                           className="btn-round"
//                           color="default"
//                           size="lg"
//                           type="button"
//                         >
//                           Send Message
//                         </Button>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>
//             </Container>
//           </section> */}


//             </main>
//             </> 
//         )
//     }
// }

// export default landing

