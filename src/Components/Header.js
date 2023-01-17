import React from 'react'
import { FaFacebookMessenger, FaSearch } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { Badge, Col, Container, Row } from 'reactstrap'
import user from "./../assets/ppt.jpg"

function Header() {
    return (
        <header>
            <Container>
                <Row className='align-items-center justify-content-between'>
                    <Col xs={6} md={3} className="order-1 order-md-1">
                        <a href="">facebook</a>
                    </Col>

                    <Col xs={12} md={6} className="order-3 order-md-2 ">
                        <div className='search'>
                            <FaSearch color='grey' />
                            <input type="text" className='' placeholder='Search Facebook' />
                        </div>
                    </Col>

                    <Col xs={6} md={3} className="order-2 order-md-3 ">
                        <div className="icons">
                           <div className='position-relative'>
                           <Badge className='notify' color='danger' pill>5</Badge>
                            <FaFacebookMessenger size={32} className='header-icon' />
                           </div>

                           <div className='position-relative'>
                           <Badge className='notify' color='danger' pill>5</Badge>
                            <IoIosNotifications  size={32} className='header-icon' />
                           </div>
                           
                            <img src={user} className='header-icon' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header