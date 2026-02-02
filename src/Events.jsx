import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Events = () => {
  const [input, setInput] = useState("");

  const [name, setName] = useState("");

  const handleClick = () => {
    alert("You Click Here");
  };

  const handleDoubleClick = () => {
    alert("You Double Click Me");
  };

  const handleSubmit = () => {
    alert(`Hello Dear: ${name}`);
  };

  const handleMouseEnter = () => {
    alert("Mouse Enter");
  };

  const handleMouseLeave = () => {
    alert("Mouse Leave");
  };

  const handleKeyUp = () => {
    alert("Key Up");
  };

  const handleKeyDown = () => {
    alert("Key Up");
  };

  return (
    <>
      <Container className="border my-5 p-5 rounded-4">
        <h1 className="text-center mb-4 text-white">Event Handler</h1>
        <Row className="justify-content-center align-item-center g-4">
          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>Onclick Event :</h3>
              <Button className="w-100" onClick={handleClick}>
                Click Me
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>DoubleClick Event: </h3>

              <Button variant="success" onDoubleClick={handleDoubleClick}>
                DoubleClick Me
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>Onchange Event :</h3>
              <input
                className="w-100 border rounded mb-2"
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <h3>Hello: {input}</h3>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <h3>
                    <Form.Label>Onsubmit Event :</Form.Label>
                  </h3>
                  <Form.Control
                    placeholder="Enter Your Name"
                    className="mb-3"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit">Click Me</Button>
              </Form>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>MouseEnter Event: </h3>

              <Button variant="success" onMouseEnter={handleMouseEnter}>
                MouseEnter
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>MouseLeave Event: </h3>

              <Button variant="success" onMouseLeave={handleMouseLeave}>
                MouseLEave
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>KeyUp Event: </h3>

              <Button variant="success" onKeyUp={handleKeyUp}>
                KeyUp
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="show-card bg-white p-3 rounded-4">
              <h3>KeyDown Event: </h3>

              <Button variant="success" onKeyDown={handleKeyDown}>
                KeyDown
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Events;
