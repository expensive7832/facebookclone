import React from 'react'
import { FaBookOpen, FaHome, FaImages, FaPlusCircle, FaSmileWink, FaUserFriends, FaVideo } from 'react-icons/fa'
import { BsCollectionPlayFill } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { BiWorld, BiDotsHorizontalRounded } from 'react-icons/bi'
import { SiFacebookgaming } from 'react-icons/si'
import { RxDashboard } from 'react-icons/rx'
import { Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap'
import user from "./../assets/ppt.jpg"
import Story from './Story'


function Main() {
    return (
        <main>
            <Container fluid className='mt-3'>
                <Row>

                    <Col xs={2} md={3} className="leftside">
                        <div className='d-flex align-items-center my-2'>
                            <FaHome size={32} color='#1877F2' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Home</p>
                        </div>

                        <div className='d-flex align-items-center my-2'>
                            <img src={user} alt="user" className='profilepic' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Yusuf Jimoh</p>
                        </div>
                        <hr className='my-2' />

                        <div className='d-flex align-items-center my-2'>
                            <BsCollectionPlayFill size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Watch</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FaUserFriends size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Friends</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <SiFacebookgaming size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Gaming</p>
                        </div>

                        <div className='d-flex align-items-center my-2'>
                            <RxDashboard size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Gaming</p>
                        </div>
                        <hr className="my-2" />
                        <div className='d-flex align-items-center my-2'>
                            <FaHome size={32} color='#1877F2' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Home</p>
                        </div>

                       
                        <hr className='my-2' />

                        <div className='d-flex align-items-center my-2'>
                            <BsCollectionPlayFill size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Watch</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <FaUserFriends size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Friends</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <SiFacebookgaming size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Gaming</p>
                        </div>

                        <div className='d-flex align-items-center my-2'>
                            <RxDashboard size={32} color='#AFCFE6' />
                            <p className='lead fw-bold my-1 mx-2 d-none d-md-block'>Gaming</p>
                        </div>
                        <hr className="my-2" />
                    </Col>

                    <Col xs={10} md={6} className="second">
                        <div className="middle">
                            <div className="top">
                                <Nav tabs className='topnav d-flex justify-content-between'>
                                    <NavItem>
                                        <div className='d-flex align-items-center'>
                                            <FaBookOpen color='blue' className='tabicon' size={28} />
                                            <p>Stories</p>
                                        </div>
                                    </NavItem>

                                    <NavItem>
                                        <div className='d-flex align-items-center'>
                                            <BsCollectionPlayFill color='blue' className='tabicon' size={28} />
                                            <p>Reel</p>
                                        </div>
                                    </NavItem>

                                    <NavItem>
                                        <div className='d-flex align-items-center'>
                                            <FaVideo color='blue' className='tabicon' size={28} />
                                            <p>Reel</p>
                                        </div>
                                    </NavItem>


                                </Nav>
                            </div>


                            <div className="stories d-flex my-2">
                                <div className='user'>
                                    <div className="profile position-relative">
                                        <img src={user} alt="user" />
                                        <FaPlusCircle size={32} className="plus" />

                                    </div>
                                    <p className="text-center ">Create Story</p>
                                </div>

                                <div className="uploaded_story d-flex">
                                    <Story bg={user} />
                                    <Story bg={user} />
                                    <Story bg={user} />
                                    <Story bg={user} />
                                </div>

                            </div>
                        </div>

                        <div className="post">
                            <div className="d-flex gap-3">
                                <img src={user} alt="user" />
                                <input type="text" placeholder='what is on your mind? Yusuf' />
                            </div>
                            <hr />

                            <div className="bottom d-flex justify-content-around">
                                <div className="d-flex">
                                    <FaVideo color='red' size={28} />
                                    <p className="lead">Live video</p>
                                </div>
                                <div className="d-flex">
                                    <FaImages color='green' size={28} />
                                    <p className="lead">Live video</p>
                                </div>
                                <div className="d-flex">
                                    <FaSmileWink color='orange' size={28} />
                                    <p className="lead">Live video</p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="d-flex justify-content-between p-3">
                                <div className="d-flex gap-3 align-items-center">
                                    <img src={user} alt="user" className='profilepic' />
                                    <div>
                                        <p>Mowe Ibafo Connect</p>
                                        <small>kyddy Prerty <span>30m <BiWorld /></span></small>
                                    </div>
                                </div>

                                <div>
                                    <BiDotsHorizontalRounded size={28}/>
                                    <MdOutlineCancel size={28}/>
                                </div>
                            </div>

                            <div className="timeline_info my-2">
                               <p className='px-2'> Lorem ipsum dolor sit amet.</p>
                               <div className="d-flex flex-wrap">
                                    <img src={user} alt="" className='img-thumbnail' />
                               </div>
                            </div>
                        </div>



                    </Col>
                    <Col xs={12} md={3} className="rightside"></Col>
                </Row>
            </Container>
        </main>
    )
}

export default Main