import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Container,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
} from "reactstrap";

import { Link, useNavigate } from "react-router-dom";

import sedanImage from "../../assets/images/cars/sedan.png";

import ksa from "../../assets/images/flags/sa.svg";
import uae from "../../assets/images/flags/ae.svg";
import FlagDrop from "./FlagDrop";

const vehicleData = [
  {
    type: "SUV",
    makes: [
      {
        name: "Nissan",
        models: ["Patrol", "T1M1Model2", "T1M1Model3"],
      },
      {
        name: "Toyota",
        models: ["Land Cruiser", "T1M2Model2", "T1M2Model3"],
      },
      {
        name: "Chevrolet",
        models: ["Tahoe", "T1M3Model2", "T1M3Model3"],
      },
    ],
  },
  {
    type: "Sedan",
    makes: [
      {
        name: "Lexus",
        models: ["ES 350", "T2M1Model2", "T2M1Model3"],
      },
      {
        name: "Ford",
        models: ["Taurus", "T2M2Model2", "T2M2Model3"],
      },
    ],
  },
];

function AddVehicle() {
  const [modal_standard_0, setmodal_standard_0] = useState(false);
  function tog_standard_0() {
    setmodal_standard_0(!modal_standard_0);
  }

  const [modal_standard, setmodal_standard] = useState(false);
  function tog_standard() {
    setmodal_standard(!modal_standard);
  }

  const [modal_standard_t, setmodal_standard_t] = useState(false);
  function tog_standard_t() {
    setmodal_standard_t(!modal_standard_t);
  }

  const [selectedType, setSelectedType] = useState(vehicleData[0].type);
  const [selectedMake, setSelectedMake] = useState(
    vehicleData[0].makes[0].name
  );

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedMake(
      vehicleData.find((type) => type.type === e.target.value).makes[0].name
    );
  };

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };

  const filteredMakes =
    vehicleData.find((type) => type.type === selectedType)?.makes || [];
  const filteredModels =
    filteredMakes.find((make) => make.name === selectedMake)?.models || [];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xxl={4} xl={4}>
              <Card className="" style={{ height: "25rem" }}>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">Choose a Type</h4>
                  <div className="flex-shrink-0">
                    <div className="form-check form-switch form-switch-right form-switch-md">
                      <a
                        className="text-primary"
                        onClick={() => tog_standard_t()}
                      >
                        Add a type
                      </a>

                      <Modal
                        id="myModal"
                        isOpen={modal_standard_t}
                        toggle={() => {
                          tog_standard_t();
                        }}
                      >
                        <ModalHeader
                          className="modal-title"
                          id="myModalLabel"
                          toggle={() => {
                            tog_standard_t();
                          }}
                        >
                          Add a Vechicle Type
                        </ModalHeader>
                        <ModalBody>
                          <CardBody>
                            <div>
                              <div>
                                <div
                                  className="tab-pane active pt-3"
                                  id="border-navs-home"
                                  role="tabpanel"
                                >
                                  <div className="d-flex gap-2">
                                    <Col lg={12}>
                                      <div>
                                        <Label
                                          htmlFor="iconInput"
                                          className="form-label"
                                        >
                                          Enter vehicle type
                                        </Label>
                                        <div className="form-icon">
                                          <Input
                                            type="email"
                                            className="form-control form-control-icon"
                                            id="iconInput"
                                            placeholder="Eg : Sedan"
                                          />
                                          <i className="ri-car-fill"></i>
                                        </div>
                                      </div>
                                    </Col>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardBody>{" "}
                        </ModalBody>
                        <div className="modal-footer">
                          <Button className="btn-soft-warning">Add</Button>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </CardHeader>

                <CardBody>
                  <div className="">
                    <p className="text-muted">
                      Select a vehicle type from the list below
                    </p>
                    <div className="car_image d-flex justify-content-center">
                      <img
                        src={sedanImage}
                        alt=""
                        style={{
                          width: "150px",
                          height: "60px",
                          objectFit: "contain",
                          padding: "0.2rem",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="live-preview"
                    style={{ overflowY: "scroll", height: "13rem" }}
                  >
                    <ListGroup>
                      {vehicleData.map((vehicleType, index) => (
                        <ListGroupItem key={index} tag="label">
                          <Input
                            className="form-check-input fs-14 mt-0 align-middle me-1"
                            name="Types"
                            type="radio"
                            value={vehicleType.type}
                            checked={selectedType === vehicleType.type}
                            onChange={handleTypeChange}
                          />
                          {vehicleType.type}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={4} xl={4}>
              <Card style={{ height: "25rem" }}>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">Choose a Make</h4>
                  <div className="flex-shrink-0">
                    <div className="form-check form-switch form-switch-right form-switch-md">
                      <a
                        className="text-primary"
                        onClick={() => tog_standard_0()}
                      >
                        Add a make
                      </a>

                      <Modal
                        id="myModal"
                        isOpen={modal_standard_0}
                        toggle={() => {
                          tog_standard_0();
                        }}
                      >
                        <ModalHeader
                          className="modal-title"
                          id="myModalLabel"
                          toggle={() => {
                            tog_standard_0();
                          }}
                        >
                          Add a Vechicle Make
                        </ModalHeader>
                        <ModalBody>
                          <CardBody>
                            <div>
                              <div>
                                <div
                                  className="tab-pane active pt-3"
                                  id="border-navs-home"
                                  role="tabpanel"
                                >
                                  <div className="d-flex gap-2">
                                    <Col lg={12}>
                                      <div>
                                        <Label
                                          htmlFor="iconInput"
                                          className="form-label"
                                        >
                                          Enter vehicle make
                                        </Label>
                                        <div className="form-icon">
                                          <Input
                                            type="email"
                                            className="form-control form-control-icon"
                                            id="iconInput"
                                            placeholder="Eg : Nissan"
                                          />
                                          <i className="ri-car-fill"></i>
                                        </div>
                                      </div>
                                    </Col>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardBody>{" "}
                        </ModalBody>
                        <div className="modal-footer">
                          <Button className="btn-soft-warning">Add</Button>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </CardHeader>{" "}
                <CardBody>
                  <p className="text-muted">
                    Select a vehicle make from the list below
                  </p>
                  <div
                    className="live-preview"
                    style={{ overflowY: "scroll", height: "17rem" }}
                  >
                    <ListGroup>
                      {filteredMakes.map((make, index) => (
                        <ListGroupItem key={index} tag="label">
                          <Input
                            className="form-check-input fs-14 mt-0 align-middle me-1"
                            name="Makes"
                            type="radio"
                            value={make.name}
                            checked={selectedMake === make.name}
                            onChange={handleMakeChange}
                          />
                          {make.name}
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xxl={4} xl={4}>
              <Card style={{ height: "25rem" }}>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">
                    Choose a Model
                  </h4>
                  <div className="flex-shrink-0">
                    <div className="form-check form-switch form-switch-right form-switch-md">
                      <a
                        className="text-primary"
                        onClick={() => tog_standard()}
                      >
                        Add a model
                      </a>

                      <Modal
                        id="myModal"
                        isOpen={modal_standard}
                        toggle={() => {
                          tog_standard();
                        }}
                      >
                        <ModalHeader
                          className="modal-title"
                          id="myModalLabel"
                          toggle={() => {
                            tog_standard();
                          }}
                        >
                          Add a Vechicle Model
                        </ModalHeader>
                        <ModalBody>
                          <CardBody>
                            <div>
                              <div>
                                <div
                                  className="tab-pane active pt-3"
                                  id="border-navs-home"
                                  role="tabpanel"
                                >
                                  <div className="gap-2">
                                    <Col lg={12}>
                                      <div>
                                        <Label
                                          htmlFor="iconInput"
                                          className="form-label"
                                        >
                                          Enter vehicle model
                                        </Label>
                                        <div className="form-icon">
                                          <Input
                                            type="email"
                                            className="form-control form-control-icon"
                                            id="iconInput"
                                            placeholder="Eg : Patrol"
                                          />
                                          <i className="ri-car-fill"></i>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col lg={12} className="mt-2">
                                      <div>
                                        <label htmlFor="">
                                          Select the country
                                        </label>
                                        <select
                                          className="form-select"
                                          aria-label="Default select example"
                                        >
                                          <option>Choose...</option>
                                          <option value="1">
                                            UAE
                                          </option>
                                          <option value="2">
                                            KSA
                                          </option>
                                          <option value="3">
                                            South Africa
                                          </option>
                                        </select>
                                      </div>
                                    </Col>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardBody>{" "}
                        </ModalBody>
                        <div className="modal-footer">
                          <Button className="btn-soft-warning">Add</Button>
                        </div>
                      </Modal>
                    </div>
                  </div>
                </CardHeader>{" "}
                <CardBody>
                  <p className="text-muted">
                    Select a vehicle model from the list below
                  </p>
                  <div
                    className="live-preview"
                    style={{ overflowY: "scroll", height: "17rem" }}
                  >
                    <ListGroup>
                      {filteredModels.map((model, index) => (
                        <ListGroupItem key={index} tag="label">
                          <div className="d-flex justify-content-between w-100">
                            <div>
                              <Input
                                className="form-check-input fs-14 mt-0 align-middle me-1"
                                name="Models"
                                type="radio"
                                value={model}
                                defaultChecked={index === 0}
                              />
                              {model}
                            </div>
                            <div>
                              <FlagDrop />
                            </div>{" "}
                          </div>
                        </ListGroupItem>
                      ))}
                    </ListGroup>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div className="d-flex justify-content-end pb-3">
            <Button color="primary">Save</Button>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default AddVehicle;
