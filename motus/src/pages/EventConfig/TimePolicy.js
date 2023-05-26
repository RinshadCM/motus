import React from "react";
import { Row, Col, Label, Input } from "reactstrap";

function TimePolicy() {
  return (
    <div>
      <div className="mt-4">
        <h5 className="mb-1">Time Policy</h5>
      </div>
      <Row>
        <Col md={12}>
          <div className="mt-3">
            <Label for="time-policy">Change Time</Label>
          </div>{" "}
          <div className="d-flex gap-2">
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
                <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 24 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Hours
                </Label>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
              <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 60 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Minutes
                </Label>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="mt-3">
            <Label for="time-policy">Cancellation Time</Label>
          </div>{" "}
          <div className="d-flex gap-2">
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
                <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 24 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Hours
                </Label>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
              <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 60 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Minutes
                </Label>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="mt-3">
            <Label for="time-policy">Driver Arrival</Label>
          </div>{" "}
          <div className="d-flex gap-2">
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
                <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 24 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Hours
                </Label>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
              <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 60 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Minutes
                </Label>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
        <Row>
        <Col md={12}>
          <div className="mt-3">
            <Label for="time-policy">Waiting Time</Label>
          </div>{" "}
          <div className="d-flex gap-2">
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
                <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 24 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Hours
                </Label>
              </div>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <div className="input-group">
              <select className="form-select" id="inputGroupSelect01">
                  <option>Choose...</option>
                  {Array.from({ length: 60 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
                <Label
                  className="input-group-text"
                  htmlFor="inputGroupSelect02"
                >
                  Minutes
                </Label>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TimePolicy;
