import '../App.css'
import {Button, Card, Container} from 'react-bootstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from './Header'
import Spline from '@splinetool/react-spline';
import {motion, useScroll, useTransform} from 'framer-motion'




function Intro(){
    let {scrollY} = useScroll()
    let y = useTransform(scrollY, [0,1000], ["0%", "-100%"])

    return(
        <motion.div className='intro-page' style={{ y }}>
            <div className='intro-content'>
                <Container className='intro-section'>
                    <Container className='text-light'>
                        <h1 style={{fontSize:`150px`}}>Ali Siddiqui</h1>
                        <h5>Full Stack Developer | Indie Game Developer</h5>
                    </Container>
                    <Container className='text-light'>
                        <p className='my-3'> Delivering powerful user experiences across diverse disciplines.</p>
                    </Container>
                </Container>
                <Spline className='macbook'scene="https://prod.spline.design/b8L-D0RCKd9YOiT6/scene.splinecode" />
            </div>
            
        </motion.div>
    )
}

function Overview(){
    let {scrollY} = useScroll()
    let y = useTransform(scrollY, [500,1000], ["0%", "-100%"])
    return(
        <motion.div className='skills-page text-light' style={{ y }}>
            <Container>
                <h1 style={{fontSize:`150px`, marginRight:`100rem`}} className='pb-5 mb-5'>Skills</h1>
                <Container className='row'>
                    <Card style={{width: `20rem`}} className='py-4'>
                        <h1>Front End</h1>
                        <Card.Text>JavaScript, React, Tailwind, and many more..</Card.Text>
                    </Card>
                    <Card style={{width: `20rem`}} className='py-4'>
                        <Card.Title>Video-Game Development</Card.Title>
                        <Card.Text>Using in-demand skills such as React and JS.</Card.Text>
                    </Card>
                    <Card style={{width: `20rem`}} className='py-4'>
                        <Card.Title>Back End</Card.Title>
                        <Card.Text>Django, Express, NodeJS, and Monogoose.</Card.Text>
                    </Card>
                </Container>
            </Container>
            
        </motion.div>
    )
}

export default function Home() {
  return (
    <div className='home'>
        <Intro/>
        <Overview/>
    </div>
  )
}
