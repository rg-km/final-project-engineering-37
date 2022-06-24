import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Row, Col, Card} from 'react-bootstrap'
import poster from '../assets/Poster-1.jpg'

function Seminar(){
    return(
        <Container className='mt-4' style={{marginLeft:'150px'}}>
            <Button style={{backgroundColor:'white', borderColor:'black', color:'black', borderRadius:'20px', fontWeight:'bold', boxShadow:'3px 3px black', width:'250px'}}>Seminar</Button>

            <Container style={{marginTop:'80px', marginLeft:'-23px'}}>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                    <Card style={{borderRadius:'20px', borderColor:'black'}}>
                        <Card.Img style={{width:'90%', marginLeft:'15px', marginTop:'10px'}} variant="top" src={poster} />
                        <Card.Body>
                        <Card.Title style={{marginLeft:'85px'}}>More Info</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </Container>
    )
}

export default body