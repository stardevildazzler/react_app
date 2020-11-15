import { Carousel, Col, Row, Form, Button ,Container} from 'react-bootstrap';
import React from 'react';
import logo from '../Uploadfiles/image/yang-shuo-WLgQOKuMUCo-unsplash (1).jpg';
// import logo1 from "../Uploadfiles/image/mohammado-shokoofe-jrC11YqJjD4-unsplash.jpg";
// import logo2 from "../Uploadfiles/image/david-t-ZRJTLfRLhS4-unsplash.jpg";
import logo_1 from "../Uploadfiles/image/logo1.jpg"
import logo_2 from "../Uploadfiles/image/logo2.jpg"
class Homepage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     logovalue: logo_1
    //     // }


    // }

    // mouseoverhandler = () => {


    //     this.setState({
    //         logovalue: logo_2
    //     })

    // }

    // onmouseOuthandler = () => {
    //     this.setState({
    //         logovalue: logo_1
    //     })

    // }


    Middelepage = () => {



        return (
            <> <div className="medill_bg">
                <div className="welcome-hadding">
                    <h1 className="">DEVIL DAZZLER WORLD-	&#32;	&#32;-&#62;</h1>
                </div>


               
                <Row > <Col><div className="middle_page">

                    <h1 className="first_hedding">Hello Guys Welcome to Dazzler Studio</h1>

                </div>
                </Col>
                    <Col>
                        <div className="illestrater_imge">
                            {/* <img src={this.state.logovalue} onMouseOut={()=>this.onmouseOuthandler()}  onMouseOver={()=>this.mouseoverhandler()}></img> */}

                            <img className="bottom" src={logo_1} alt="logo9" />
                            <img className="top" src={logo_2}alt="logo5" />
                        </div>


                    </Col>


                </Row>
                <Row>
                    <Col>  <div className="illestrater_imge">
                        {/* <img src={this.state.logovalue} onMouseOut={()=>this.onmouseOuthandler()}  onMouseOver={()=>this.mouseoverhandler()}></img> */}

                        <img className="bottom" src={logo_1}  alt="logo98"/>
                        <img className="top" src={logo_2} alt="logo59" />
                    </div>


                    </Col>
                    <Col>
                        <div className="middle_page">

                            <h1 className="first_hedding">Hello Guys Welcome to Dazzler Studio</h1>

                        </div>

                    </Col>


                </Row>
                <Row> <Col><div className="middle_page">

                    <h1 className="first_hedding">Hello Guys Welcome to Dazzler Studio</h1>

                </div>
                </Col>
                    <Col>
                        <div className="illestrater_imge">
                            {/* <img src={this.state.logovalue} onMouseOut={()=>this.onmouseOuthandler()}  onMouseOver={()=>this.mouseoverhandler()}></img> */}

                            <img className="bottom" src={logo_1} alt="logo39" />
                            <img className="top" src={logo_2} alt="logo97"/>
                        </div>


                    </Col>
                </Row>




            </div>
        </>
        )

    }



    render() {


        // console.log(this.state.logovalue)


        return (
            <>
                <Carousel>
                    <Carousel.Item >
                        <img
                            className="d-block w-100 h-50 "
                            src={logo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Learn More</h3>
                            <p>“The more that you read, the more things you will know. The more that you learn, the more places you'll go.”
</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100 h-50 "
                            src={logo}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Hard work</h3>
                            <p>No matter how hard you work, someone else is working harder</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  >
                        <img
                            className="d-block w-100 h-50 "
                            src={logo}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Get Succsess</h3>
                            <p>Success usually comes to those who are too busy to be looking for it.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                < this.Middelepage />

                {/* form part  */}


                <Container className="my-2">
                    <div className></div>
                    <Row>
                        <Col>
                        
                        </Col>
                    <Col>
                    
                    <h1 className='resume'>Contect Us</h1>
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />

                        </Form.Group>

                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />

                            
                        </Form.Group>
                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="number" placeholder="Mobile No" />

                            
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
               
                 </Col>
                    </Row>
                
                

            </Container>


            </>


        );
    }
}

export default Homepage;