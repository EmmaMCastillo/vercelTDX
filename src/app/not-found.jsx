
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import fatalErrorImg from '@/assets/img/macaroni-fatal-error.png';

const Error404 = () => {
    return (
        <div className="hk-wrapper hk-pg-auth">
            <div className="hk-pg-wrapper">
                <Container>
                    <div className="hk-pg-body">
                        <Row>
                            <Col xl={7} lg={6} className="d-lg-block d-none">
                                <div className="auth-content py-md-0 py-8">
                                    <Row>
                                        <Col xl={12} className="text-center">
                                            <Image 
                                                src={fatalErrorImg} 
                                                className="img-fluid w-sm-80 w-50" 
                                                alt="404 error" 
                                                width={500}
                                                height={500}
                                                priority
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xl={5} lg={6} md={7} sm={10}>
                                <div className="auth-content py-8">
                                    <div className="w-100">
                                        <Row>
                                            <Col xxl={9} xl={8} lg={11}>
                                                <h1 className="display-4 fw-bold mb-2">404</h1>
                                                <p className="p-lg">Lo sentimos, la página que buscas no existe. Por favor, verifica la URL o regresa al inicio.</p>
                                                <Button 
                                                    variant="primary" 
                                                    as={Link} 
                                                    href="/dashboard" 
                                                    className="mt-4"
                                                >
                                                    Volver al Dashboard
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Error404;
