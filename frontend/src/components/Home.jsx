import '../App.css'
import {Button, Container} from 'react-bootstrap'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from './Header'
import Spline from '@splinetool/react-spline';
import {motion, useScroll, useTransform} from 'framer-motion'




function Intro(){
    let {scrollYProgress} = useScroll()
    let y = useTransform(scrollYProgress, [0,0.5], ["0%", "-100%"])

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
                <Spline className='macbook'scene="https://prod.spline.design/kBPVgA-a5v7IAjt0/scene.splinecode" />
            </div>
            
        </motion.div>
    )
}

function Overview(){
    let {scrollYProgress} = useScroll()
    let y = useTransform(scrollYProgress, [0.5,1], ["0%", "-500%"])
    return(
        <motion.div className='skills-page text-light' style={{ y }}>
            <Container>
                <h1 style={{fontSize:`100px`}}>Skills</h1>
                <h1 style={{fontSize:`150px`}}>Ali Siddiqui</h1>
                <h5>Full Stack Developer | Indie Game Developer</h5>
                <h1 style={{fontSize:`100px`}}>Skills</h1>
                <h1 style={{fontSize:`150px`}}>Ali Siddiqui</h1>
                <h5>Full Stack Developer | Indie Game Developer</h5>
                <h1 style={{fontSize:`100px`}}>Skills</h1>
                <h1 style={{fontSize:`150px`}}>Ali Siddiqui</h1>
                <h5>Full Stack Developer | Indie Game Developer</h5>
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
