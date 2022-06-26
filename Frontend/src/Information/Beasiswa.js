import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Card, Modal } from 'react-bootstrap'
import poster from '../assets/Poster-1.jpg'

function Beasiswa() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container className='mt-4' style={{ marginLeft: '150px' }}>
                <Button style={{ backgroundColor: 'white', borderColor: 'black', color: 'black', borderRadius: '20px', fontWeight: 'bold', boxShadow: '3px 3px black', width: '250px' }}>Beasiswa</Button>

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
                    <Modal.Title>EduHope Scholarship</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="velocity-postcontent clearfix">
                        <p>Scholarship Batch-1:</p>
                        <p>INFO Beasiswa “EduHope Scholarship”</p>
                        <p>Dibuka kesempatan mendapatkan Beasiswa Prestasi dari EduHope. Syarat dan Ketentuan dapat dilihat di poster dan caption dibawah ini atau follow IG @eduhope19:&nbsp;</p>
                        <p>Detail persyaratan:</p>
                        <p>1.Scan Rapor 2 semester terakhir</p>
                        <p>2.Scan Kartu Keluarga, Kartu Tanda Siswa</p>
                        <p>3.Essay 300-600 kata tentang visi, cita-cita dan motivasi pribadi terhadap lingkungan masyarakat</p>
                        <p>4.Essay 300 kata tentang kondisi ekonomi keluarga (EduHope tidak membutuhkan Surat Keterangan Tidak Mampu)</p>
                        <p>5.Scan Surat Keterangan Berprestasi Baik dari sekolah (Ttd, Cap, email, telepon pihak sekolah)</p>
                        <p>6. Batch-1 diperuntukan untuk Kawasan di Purwakarta</p>
                        <p>Cover email dan attachment dokumen dikirim paling lambat 31 Oktober 2019 ke : <a href="mailto:eduhope@edumatech.com">eduhope@edumatech.com</a></p>
                        <p>Calon beasiswa yang lolos administrasi akan lanjut proses Interview.</p>
                        <p>Peserta yang lolos tahap akhir berhak mendapatkan program beasiswa selama 1 tahun</p>
                        <p><img loading="lazy" class="aligncenter  wp-image-497"  src="https://www.edumatech.com/wp-content/uploads/2019/10/Poster-Edit-1.jpg" alt="" width="724" height="1020" srcset="https://www.edumatech.com/wp-content/uploads/2019/10/Poster-Edit-1.jpg 822w, https://www.edumatech.com/wp-content/uploads/2019/10/Poster-Edit-1-53x75.jpg 53w, https://www.edumatech.com/wp-content/uploads/2019/10/Poster-Edit-1-213x300.jpg 213w, https://www.edumatech.com/wp-content/uploads/2019/10/Poster-Edit-1-768x1082.jpg 768w, https://www.edumatech.com/wp-content/uploads/2019/10/Poster-Edit-1-426x600.jpg 426w" sizes="(max-width: 724px) 100vw, 724px" /></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Beasiswa