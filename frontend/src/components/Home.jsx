import '../App.css'
import {Button, Card, Container, Row, Col, Carousel} from 'react-bootstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from './Header'
import Spline from '@splinetool/react-spline';
import {motion, useScroll, useTransform} from 'framer-motion'
import ContactPage from '../components/Contact'
import dd1 from '../assets/dd1.png'
import dd2 from '../assets/dd2.png'
import dd3 from '../assets/dd3.png'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'
import l7 from '../assets/l7.png'
import lun2 from '../assets/2.png'
import lun3 from '../assets/3.png'
import lunaris from '../assets/lunaris.gif'



function Intro(){
    let {scrollY} = useScroll()
    let y = useTransform(scrollY, [0,1000], ["0%", "-100%"])

    return(
        <motion.div className='intro-page' style={{ y }}>
            <Row className='intro-content'>
                <Col>
                    <Container className='text-light' style={{paddingTop:`12rem`}}>
                        <h1 style={{fontSize:`150px`}}>Ali Siddiqui</h1>
                        <h5>Full Stack Developer | Indie Game Developer</h5>
                    </Container>
                    <Container className='text-light'>
                        <p className='my-3'> Delivering powerful user experiences across diverse disciplines.</p>
                    </Container>
                </Col>
                <Col>
                    <Spline className='macbook'scene="https://prod.spline.design/b8L-D0RCKd9YOiT6/scene.splinecode" />
                </Col>
            </Row>
            
        </motion.div>
    )
}

function About(){
    let {scrollY} = useScroll()
    let y = useTransform(scrollY, [1000,1500], ["0%", "-100%"])
    return(
        <motion.div className='skills-page text-light' style={{ y }}>
            <Container>
                <h1 style={{fontSize:`150px`, marginRight:`40rem`}} className='pb-5 mb-5'>About Me</h1>
                <Row>
                    <Col>
                        <p>I am the founder of NervCorp, a one-man videogame development company, and a versatile Full Stack Developer with a background in indie game development. Demonstrated ability to deliver high-quality projects by leveraging extensive experience in both the scientific and video game development fields. Armed with international exposure and scientific knowledge to create immersive, user-friendly digital experiences. I'm passionate about integrating a science background and diverse cultural perspective to drive innovation and inclusivity in the software development field.</p>

                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

function Projects(){
    let {scrollY} = useScroll()
    let y = useTransform(scrollY, [2000,2500], ["0%", "-100%"])
    return(
        <motion.div className='skills-page text-light' style={{ y }}>
            <Container>
                <h1 style={{fontSize:`150px`, marginRight:`100rem`}} className='pb-5 mb-5'>Projects</h1>
                <Container className='left'>
                    <Row>
                        <Col>
                            <h1 style={{fontSize: `70px`}}>DailyDish</h1>
                            <p>A professional mock subscription-service website that offers users fully customizable meal plans based on a subscription, incorportating functioning payment system with Stripe API and a strong security system with password hashing with salts.</p>
                            <p>Built with <em>React, Bootstrap, MongoDB, Express, and Stripe API.</em></p>
                            <p>Visit the <a href='https://daily-dish.netlify.app/'>live site!</a></p>
                            <p>Check out the project github <a href='https://github.com/alisid-0/dailydish'>here.</a></p>
                        </Col>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={dd1} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={dd2} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={dd3} className='project-img'></img>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
                <Container className='right py-5'>
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={l1} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={l2} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={l3} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={l4} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={l5} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={l6} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={l7} className='project-img'></img>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col>
                            <h1 style={{fontSize: `70px`}}>NervCorp</h1>
                            <p>A professional and user-friendly website to represent NervCorp's digital presence, showcasing portfolio, and project updates using React, MongoDB, and smart authentication with Google oAuth.</p>
                            <p>Built with <em>React, Bootstrap, MongoDB, and Express.</em></p>
                            <p>Check out the project github <a href='https://github.com/alisid-0/nervcorp'>here.</a></p>
                        </Col>
                    </Row>
                </Container>
                <Container className='left'>
                    <Row>
                        <Col>
                            <h1 style={{fontSize: `70px`}}>Lunaris</h1>
                            <p>An engaging and immersive videogame in development using Unreal Engine. Focused on creating a captivating user experience with unique gameplay mechanics and visually appealing design.</p>
                            <p>Built with <em>Unreal Engine 5 and Blender.</em></p>
                            <p>Project is still in development but you can check out the <a href='https://nervcorp.itch.io/lunaris'>itch.io site here.</a> and view updates on <a href=''>NervCorp.</a></p>
                        </Col>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={lun2} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={lun3} className='project-img'></img>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={lunaris} className='project-img'></img>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </motion.div>
    )
}

function Connect(){
    let {scrollY} = useScroll()
    let y = useTransform(scrollY, [3000,3500], ["0%", "-100%"])
    return(
        <motion.div className='skills-page text-light' style={{ y }}>
            <Container>
                <h1 style={{fontSize:`150px`, marginRight:`100rem`}} className='pb-5 mb-5'>Connect</h1>
                <Row>
                    <Col>
                        <h4><a href='https://github.com/alisid-0'>GitHub </a></h4>
                    </Col>
                    <Col> 
                        <h4><a href='https://www.linkedin.com/in/ali-a-siddiqui/'>LinkedIn </a></h4>
                    </Col>
                    <Col>
                        <h4><a href='https://docs.google.com/document/d/12f_UXOE62wORrinK8Omz-RXakGQ88tWkpCdL0Mt92pQ/edit?usp=sharing'>Resume</a></h4>
                    </Col>
                </Row>
                <Row className='py-5'>
                    <Col>
                        <h1 className='mb-5'>Send me a message!</h1>
                        <ContactPage/>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}



export default function Home() {
  return (
    <div className='home'>
        <Intro/>
        <About/>
        <Projects/>
        <Connect/>
    </div>
  )
}
