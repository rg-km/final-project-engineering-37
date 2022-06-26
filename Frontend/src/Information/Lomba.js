import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import poster from '../assets/Poster-2.jpg';

function Lomba() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container className='mt-4' style={{ marginLeft: '150px' }}>
                <Button style={{ backgroundColor: 'white', borderColor: 'black', color: 'black', borderRadius: '20px', fontWeight: 'bold', boxShadow: '3px 3px black', width: '250px' }}>Lomba</Button>

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

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Lomba Poster Digital “Hari Anak Nasional”</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="velocity-postcontent clearfix">
                        <h2>Halo <em><strong>#SobatTOSS</strong></em>,</h2>
                        <p>&nbsp;</p>
                        <h3>Ada kabar baik nih, buat kalian yang sudah menunggu-nunggu para SobatTOSS..</h3>
                        <p>&nbsp;</p>
                        <h3>        Pada kesempatan kali ini, Admin mau memberikan sebuah informasi penting nih buat kalian Sobat. Dalam rangka menyambut hari anak nasional, kami bersama Kementerian Kesehatan RI dan Mitra TBC akan menyelenggarakan Lomba Poster Digital TBC dengan tema &#8220;<em>Anak Sehat Bebas TBC, Ciptakan Bangsa Sehat dan Berprestasi</em>&#8220;. Lomba ini sangat menarik dan wajib kalian ikuti Sobat, karena disinilah karya terbaik kalian bisa di tuangkan dan menangkan hadiahnya. Kalian ingin tahu apa saja informasi lengkapnya? Yuk mari kita simak penjelasan Admin, berikut ini..</h3>
                        <p>&nbsp;</p>

                        <h4><strong>KATEGORI LOMBA</strong></h4>
                        <h5>Lomba Poster Elektronik terdiri atas tiga kategori dan masing-masing terdiri atas tiga pemenang:</h5>
                        <ul>
                            <li>
                                <h5>Kategori SD Kelas 4-6</h5>
                            </li>
                            <li>
                                <h5>Kategori SMP</h5>
                            </li>
                            <li>
                                <h5>Kategori SMA</h5>
                            </li>
                        </ul>
                        <p>&nbsp;</p>

                        <h4><strong>CARA MENGIKUTI LOMBA</strong></h4>
                        <ol>
                            <li>
                                <h5>Peserta membuat poster edukasi dan memuat pesan sesuai dengan tema</h5>
                            </li>
                            <li>
                                <h5>Peserta bebas membuat poster dengan media aplikasi digital apapun</h5>
                            </li>
                            <li>
                                <h5>Referensi bacaan: <em> <a href="https://tbindonesia.or.id/informasi/teknis/tb-anak/">https://tbindonesia.or.id/informasi/teknis/tb-anak/</a></em></h5>
                            </li>
                            <li>
                                <h5>Karya berukuran A3 satu sisi (42 cm x 29,7 cm)</h5>
                            </li>
                            <li>
                                <h5>Karya dikirim dalam format jpg, png, atau pdf dengan resolusi 300 dpi (maksimum 25mb)</h5>
                            </li>
                            <li>
                                <h5>Poster Elektronik dibuat dengan pewarnaan full colour</h5>
                            </li>
                            <li>
                                <h5>Daftar dan kirimkan karya online melalui link formulir <em>online: <a href="https://sr.tbindonesia.or.id/form/pendaftaran-lomba-poster-han/">https://sr.tbindonesia.or.id/form/pendaftaran-lomba-poster-han/</a></em></h5>
                            </li>
                            <li>
                                <h5>Follow akun Instagram @tbc.Indonesia @kncvindonesia @stoptbindonesia @mudauntuktbc.id untuk informasi mengenai pengumuman pemenang</h5>
                            </li>
                        </ol>

                        <p>&nbsp;</p>
                        <h4><strong>PERATURAN LOMBA</strong></h4>
                        <ul>
                            <li>
                                <h5>Format pewarnaan poster adalah Full Colour</h5>
                            </li>
                            <li>
                                <h5>Tidak mengandung konten vulgar / pornografi / SARA / menyingung pihak-pihak tertentu.</h5>
                            </li>
                            <li>
                                <h5>Setiap kata dalam poster sesuai EYD dan tidak disingkat-singkat</h5>
                            </li>
                            <li>
                                <h5>Pemenang poster TERPILIH akan dihubungi panitia untuk pengiriman karya asli dalam format yang dapat diedit</h5>
                            </li>
                            <li>
                                <h5>Karya tidak mengandung merek dagang, logo, ciptaan yang dilindungi hak cipta, atau Hak Kekayaan Intelektual dalam bentuk apapun milik pihak lain;</h5>
                            </li>
                            <li>
                                <h5>Peserta sepakat untuk hanya akan menyerahkan karya poster yang berupa karya asli yang sepenuhnya dihasilkan dan dimiliki oleh Peserta sendiri, dan bukan merupakan hasil peniruan, penjiplakan, perbanyakan, plagiat, dan/atau pelanggaran Hak Kekayaan Intelektual atas karya milik pihak lain; di mana panitia tidak dapat dikenai pertanggung jawaban dalam bentuk apapun dalam hal timbul klaim atau tuntutan dari pihak manapun;</h5>
                            </li>
                            <li>
                                <h5>Peserta sepakat bahwa segala bentuk plagiat dan/atau pelanggaran Hak Kekayaan Intelektual terkait dengan karya yang diikut-sertakan dalam Lomba ini akan menimbulkan konsekuensi baik perdata maupun pidana sesuai ketentuan perundang-undangan yang berlaku;</h5>
                            </li>
                            <li>
                                <h5>Peserta sepakat untuk hanya akan menyerahkan karya desain yang belum pernah diikut-sertakan dalam kompetisi, sayembara dan/atau perlombaan apapun, baik yang dilangsungkan di dalam maupun di luar negeri.</h5>
                            </li>
                            <li>
                                <h5>Dengan mengikuti lomba ini, peserta sepakat untuk memberikan hak sepenuhnya kepada Kementerian Kesehatan dan Kemendikbudristek untuk digunakan sebagai media edukasi dalam Penanggulangan TBC (termasuk namun tidak terbatas mengedit dan memodifikasi).</h5>
                            </li>
                            <li>
                                <h5>Pengumuman pemenang akan dilakukan melalui akun Instagram @tbc.Indonesia @kncvindonesia @stoptbindonesia @mudauntuktbc.id</h5>
                            </li>
                            <li>
                                <h5>Pajak Hadiah ditanggung pemenang;</h5>
                            </li>
                            <li>
                                <h5>Peraturan dapat berubah sewaktu – waktu;</h5>
                            </li>
                            <li>
                                <h5>Keputusan panitia dan dewan juri mengikat, tidak dapat diganggu gugat dan tidak ada surat menyurat.</h5>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Lomba