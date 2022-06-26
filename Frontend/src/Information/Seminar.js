import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Card, Modal } from 'react-bootstrap'
import poster from '../assets/Poster-3.jpg'

function Seminar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container className='mt-4' style={{ marginLeft: '150px' }}>
                <Button style={{ backgroundColor: 'white', borderColor: 'black', color: 'black', borderRadius: '20px', fontWeight: 'bold', boxShadow: '3px 3px black', width: '250px' }}>Seminar</Button>

                <Container style={{ marginTop: '80px', marginLeft: '-23px' }}>
                    <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col>
                                <Card onClick={handleShow} style={{ borderRadius: '20px', borderColor: 'black' }}>
                                    <Card.Img style={{ width: '90%', marginLeft: '15px', marginTop: '10px' }} variant="top" src={poster} />
                                    <Card.Body>
                                        <Card.Title style={{ marginLeft: '85px' }}>More Info</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>SEMINAR NASIONAL 2018 dan Kompetisi Desain Poster “Technopreneur In Digital Era"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="velocity-postcontent clearfix">
                    <h4><strong>Tanggal :</strong> Kamis, 22 Februari 2018</h4>
                    <h4><strong>Tempat :</strong> Auditorium Grha Wira Bhakti, Universitas Darma Persada, Jakarta Timur</h4>
                    <h4><strong>Waktu :</strong> 08.00 WIB 15.40 WIB</h4>
                    <p>&nbsp;</p>
                        <h4><strong>Pembicara :</strong></h4>
                        <ul>
                            <li>
                                Menteri Koperasi dan UKM &ndash; Anak Agung Gede Ngurah Puspayoga</li>
                            <li>
                                Trainer, Motivator, Public Speaker Coach Business Owner &ndash; Teguh Awee (BukaLapak)</li>
                            <li>
                                Founder &amp; Owner CV. Mata Kehidupan, Book Author at Kompas Gramedia Group &ndash; Mahakam</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h4><strong>Menampilkan :</strong></h4>
                        <ul>
                            <li>
                                Traditional Dance</li>
                            <li>
                                Stand Up Comedy</li>
                            <li>
                                Photo Booth</li>
                        </ul>
                        <p>&nbsp;</p>
                        <h4><strong>Pendaftaran :</strong></h4>
                        <ol>
                        <p>&nbsp;</p>
                            <li>
                            <h4>Harga Tiket Masuk :</h4>
                                <ul>
                                    <li>
                                        Mahasiswa : Rp 35.000</li>
                                    <li>
                                        Umum dan OTS : Rp 50.000</li>
                                </ul>
                            </li>
                            <p>&nbsp;</p>
                            <li>
                            <h4>Fasilitas :</h4>
                                <ul>
                                    <li>
                                        New Friends</li>
                                    <li>
                                        &zwj;Knowledge</li>
                                    <li>
                                        Door Price</li>
                                    <li>
                                        Snack</li>
                                    <li>
                                        E-Certificate</li>
                                    <li>
                                        Beautiful Goody Bag</li>
                                    <li>
                                        And Many More</li>
                                </ul>
                            </li>
                            <p>&nbsp;</p>
                            <li>
                            <h4>Link Pendaftaran :</h4>
                                <ul>
                                    <li>
                                        Seminar Nasional : <a href="http://bit.ly/SemnasFT2018">http://Bit.ly/SemnasFT2018</a></li>
                                    <li>
                                        Poster Design Competition : <a href="http://bit.ly/LombaPosterSemnas">http://Bit.ly/LombaPosterSemnas</a></li>
                                </ul>
                            </li>
                        </ol>
                        <p>&nbsp;</p>
                        <strong>More Information :</strong><br />
                        <ul>
                            <li>
                                Andisti : 0896 3810 5275</li>
                            <li>
                                Fabio&nbsp; &nbsp;: 0878 7522 21950</li>
                        </ul>
                        <img alt="Name"  src="http://jakarta-tourism.go.id/2017/uploads/default/files/thumb1.jpg" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Seminar