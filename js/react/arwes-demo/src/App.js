import React from 'react';
import { ThemeProvider, createTheme, Arwes, Row, Col, Frame, Words, Button, Puffs } from 'arwes';

const App = () => (
    <ThemeProvider theme={createTheme()}>
        <Arwes>
            <Puffs>
                <div style={{ width: '100%', height: 600}}>
                    <Row style={{marginTop: 20}}>
                        <Col s={2}></Col>
                        <Col s={8}>
                            <Frame animate level={2} corners={5}>
                                <div style={{paddingTop: 0, paddingLeft: 40, paddingBottom: 20, paddingRight: 40}}>
                                    <h1><Words animate>Testing</Words></h1>
                                    <p><Words animate>Web Dev Is Fun</Words></p>
                                    <Row>
                                        <Button animate>
                                            Regular
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button animate layer='primary'>
                                            Primary
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button animate layer='secondary'>
                                            Secondary
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button animate layer='header'>
                                            Header
                                        </Button>
                                    </Row>
                                    <Row>
                                        <Button animate layer='control'>
                                            Control
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button animate layer='success'>
                                            Success
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button animate layer='alert'>
                                            Alert
                                        </Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button animate layer='disabled'>
                                            Disabled
                                        </Button>
                                    </Row>
                                </div>
                            </Frame>
                        </Col>
                        <Col s={2}></Col>
                    </Row>
                </div>
            </Puffs>
        </Arwes>
    </ThemeProvider>
);

export default App;
