import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { IoMdAdd } from "react-icons/io"
import { BsFillEyeSlashFill } from "react-icons/bs"
function Landing() {

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div className="landing">

            <Modal isOpen={modal} toggle={toggle} backdrop="false" size='sm' className='mymodal'>
                <ModalHeader toggle={toggle}>Login To Facebook</ModalHeader>
                <ModalBody>
                   <form >
                    <div className='my-3'>
                        <input type="email" className="form-control" />
                    </div>

                    <div className='d-flex align-items-center'>
                        <input type="password" className="form-control" />
                        <BsFillEyeSlashFill className=''/>
                    </div>

                    <button className="btn btn-primary btn-md w-100 fw-bold mt-3">Login</button>
                   </form>
                </ModalBody>
               
            </Modal>

            <Container className='w-75'>
                <Row className=''>
                    <Col xs="12" md="6" className=''>
                        <h3>facebook</h3>
                        <h5>Recent Logins</h5>
                        <p className=''>Click Your Picture or Add Account</p>
                        <Card className='w-50'>
                            <CardBody className='position-relative'>

                                <IoMdAdd
                                    onClick={toggle}
                                    className='icon position-absolute top-50 start-50 translate-middle' />

                            </CardBody>
                            <CardFooter>
                                <Link className="regbtn">Add Account</Link>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" className="" style={{backgroundColor:"#fff", borderRadius:"1rem", padding: "1.6rem", boxShadow: "0 0 2px #fefefe"}}>
                    <form className='' >
                    <div className='my-3'>
                        <input type="email" className="form-control" />
                    </div>

                    <div className='d-flex align-items-center'>
                        <input type="password" className="form-control" />
                        <BsFillEyeSlashFill className=''/>
                    </div>

                    <button className="btn btn-primary btn-md w-100 fw-bold mt-3">Login</button>
                   </form>

                   <Link className="btn btn-success mt-4 d-block w-50 m-auto">Create Account</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing