import '../App.css'
import {Button, Container} from 'react-bootstrap'
import Header from './Header'

function Intro(){
    return(
        <Container className='intro'>
            <Container className='text-light'>
                <h1 style={{fontSize:`100px`}}>Ali Siddiqui</h1>
                <h5>Full Stack Developer | Indie Game Developer</h5>
            </Container>
            <Container className='text-light'>
                <p className='my-3'> Delivering powerful user experiences across diverse disciplines.</p>
            </Container>
        </Container>
    )
}

function Overview(){
    return(
        <Container>
            
        </Container>
    )
}

export default function Home() {
  return (
    <Container className='home'>
        <Intro/>
    </Container>
  )
}
