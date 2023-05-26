import React from "react";

import { Row, Col, Label, Input } from "reactstrap";

import sedanImage from "../../assets/images/cars/sedan.png";
import suvImage from "../../assets/images/cars/suv.svg";

function VehicleTypes() {
  return (
    <div>
      <h5 className="card-title mt-2 pb-3">Aminities</h5>
      <Row>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Baby Seat
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Sanitizer
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Water
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Baby Seat
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Sanitizer
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Water
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Baby Seat
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Sanitizer
              </Label>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <div className="form-check mb-2">
              <Input
                className="form-check-input"
                type="checkbox"
                id="formCheck1"
              />
              <Label className="form-check-label" htmlFor="formCheck1">
                Water
              </Label>
            </div>
          </div>
        </Col>
      </Row>

      <div className="mt-4">
        <h5 className="mb-1">Vehicle Types</h5>
        <p className="text-muted mb-4">Please select Vehicles</p>
      </div>

      <Row className="p-2">
        <div className="col-lg-3 col-sm-6">
          <div
            className="p-2 rounded form-check card-radio"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <input
              id="vehicleType1"
              name="vehicleselect"
              type="radio"
              className="form-check-input"
            />
            <label
              className="d-flex align-items-center form-check-label border border-1 border-dashed"
              htmlFor="vehicleType1"
            >
              <div className="flex-grow-1 d-grid" style={{ height: "100%" }}>
                <div className="car_image">
                  <img
                    src={sedanImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted mb-1">Car</p>
                <h5 className="mb-0 fs-13">Sedan</h5>
              </div>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="p-2 rounded form-check card-radio"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <input
              id="vehicleType2"
              name="vehicleselect"
              type="radio"
              className="form-check-input"
            />
            <label
              className="d-flex align-items-center form-check-label border border-1 border-dashed"
              htmlFor="vehicleType2"
            >
              <div className="flex-grow-1 d-grid" style={{ height: "100%" }}>
                <div className="car_image">
                  <img
                    src={suvImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted mb-1">Car</p>
                <h5 className="mb-0 fs-13">22 Seater</h5>
              </div>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="p-2 rounded form-check card-radio"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <input
              id="vehicleType3"
              name="vehicleselect"
              type="radio"
              className="form-check-input"
            />
            <label
              className="d-flex align-items-center form-check-label border border-1 border-dashed"
              htmlFor="vehicleType3"
            >
              <div className="flex-grow-1 d-grid" style={{ height: "100%" }}>
                <div className="car_image">
                  <img
                    src={sedanImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted mb-1">Car</p>
                <h5 className="mb-0 fs-13">SUV/Crossover</h5>
              </div>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="p-2 rounded form-check card-radio"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <input
              id="vehicleType4"
              name="vehicleselect"
              type="radio"
              className="form-check-input"
            />
            <label
              className="d-flex align-items-center form-check-label border border-1 border-dashed"
              htmlFor="vehicleType4"
            >
              <div className="flex-grow-1 d-grid" style={{ height: "100%" }}>
                <div className="car_image">
                  <img
                    src={suvImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted mb-1">Car</p>
                <h5 className="mb-0 fs-13">22 Seater</h5>
              </div>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="p-2 rounded form-check card-radio"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <input
              id="vehicleType5"
              name="vehicleselect"
              type="radio"
              className="form-check-input"
            />
            <label
              className="d-flex align-items-center form-check-label border border-1 border-dashed"
              htmlFor="vehicleType5"
            >
              <div className="flex-grow-1 d-grid" style={{ height: "100%" }}>
                <div className="car_image">
                  <img
                    src={sedanImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted mb-1">Car</p>
                <h5 className="mb-0 fs-13">Sedan</h5>
              </div>
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div
            className="p-2 rounded form-check card-radio"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <input
              id="vehicleType6"
              name="vehicleselect"
              type="radio"
              className="form-check-input"
            />
            <label
              className="d-flex align-items-center form-check-label border border-1 border-dashed"
              htmlFor="vehicleType6"
            >
              <div className="flex-grow-1 d-grid" style={{ height: "100%" }}>
                <div className="car_image">
                  <img
                    src={suvImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p className="text-muted mb-1">Car</p>
                <h5 className="mb-0 fs-13">SUV/Crossover</h5>
              </div>
            </label>
          </div>
        </div>
         </Row>
    </div>
  );
}

export default VehicleTypes;
