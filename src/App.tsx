import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>;
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Connor Buckley. Hello World
            </p>
            <ul>
                <li>One item</li>
                <li>Two item</li>
                <li>Three item</li>
            </ul>
            <img
                src="https://media.tenor.com/DK--JTi4oQMAAAAm/smiley-face.webp"
                alt="A picture of a smiley face"
            />
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
