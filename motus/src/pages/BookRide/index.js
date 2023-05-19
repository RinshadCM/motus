import React from "react";
import { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import {
  Card,
  CardBody,
  Collapse,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Container,
  Button,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";
// import { Link } from 'react-router-dom';
import classnames from "classnames";

import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";
import img8 from "../../assets/images/small/img-8.jpg";

import sedanImage from "../../assets/images/cars/sedan.png";
import suvImage from "../../assets/images/cars/suv.svg";
import busImage from "../../assets/images/cars/bus.svg";

function BookRide() {
  const [customverticalTab, setcustomverticalTab] = useState("1");
  const customtoggleVertical = (tab) => {
    if (customverticalTab !== tab) {
      setcustomverticalTab(tab);
    }
  };

  // Collapse with Icon

  const [coll7, setcoll7] = useState(false);

  const t_coll7 = () => {
    setcoll7(!coll7);
  };

  const [coll8, setcoll8] = useState(false);

  const t_coll8 = () => {
    setcoll8(!coll8);
  };

  const [coll9, setcoll9] = useState(false);

  const t_coll9 = () => {
    setcoll9(!coll9);
  };

  const [modal_standard, setmodal_standard] = useState(false);
  function tog_standard() {
      setmodal_standard(!modal_standard);
  }

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Event" pageTitle="Events" />
        <Row>
          <Col xxl={6}>
            <h5 className="mb-3">Custom Vertical Tabs</h5>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={3}>
                    <Nav
                      pills
                      className="nav nav-pills flex-column nav-pills-tab custom-verti-nav-pills text-center"
                    >
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            "mb-2": true,
                            active: customverticalTab === "1",
                          })}
                          onClick={() => {
                            customtoggleVertical("1");
                          }}
                          id="custom-v-pills-home-tab"
                        >
                          <i className="ri-plane-line d-block fs-20 mb-1"></i>
                          Airport Transfers
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            "mb-2": true,
                            active: customverticalTab === "2",
                          })}
                          onClick={() => {
                            customtoggleVertical("2");
                          }}
                          id="custom-v-pills-profile-tab"
                        >
                          <i className="ri-timer-line d-block fs-20 mb-1"></i>
                          Hourly Hires
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            "mb-2": true,
                            active: customverticalTab === "3",
                          })}
                          onClick={() => {
                            customtoggleVertical("3");
                          }}
                          id="custom-v-pills-messages-tab"
                        >
                          <i className="ri-arrow-left-right-line d-block fs-20 mb-1"></i>
                          Shuttle Service
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <CardBody className="card-body">
                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "5px",
                        }}
                        className=""
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66832.49697237734!2d55.32890373891556!3d25.221170258855782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f677ee7aee0fd%3A0x9ca6e961d7706272!2sDubai%20Festival%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1678446759936!5m2!1sen!2sus"
                          width="100%"
                          height="700"
                          style={{ border: "0", borderRadius: "5px" }}
                          allowFullScreen="no"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </CardBody>
                  </Col>
                  <Col lg={9}>
                    <TabContent
                      activeTab={customverticalTab}
                      className="text-muted mt-3 mt-lg-0"
                    >
                      <TabPane tabId="1" id="custom-v-pills-home">
                        <div className="my-3">
                          <div
                            className="d-flex justify-content-between"
                            style={{ height: "1.4rem" }}
                          >
                            <div>
                              <div className="form-check form-check-inline">
                                <Input
                                  id="credit"
                                  name="paymentMethod"
                                  type="radio"
                                  className="form-check-input"
                                  defaultChecked
                                  checked
                                  required
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="credit"
                                >
                                  One Way
                                </Label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Input
                                  id="debit"
                                  name="paymentMethod"
                                  type="radio"
                                  className="form-check-input"
                                  required
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="debit"
                                >
                                  Two Way
                                </Label>
                              </div>
                            </div>
                            <div>
                              <div className="live-preview">
                                <div className="hstack gap-3 mb-3">
                                  <div className="form-check form-switch mb-3">
                                    <Label
                                      className="form-check-label"
                                      htmlFor="SwitchCheck1"
                                    >
                                      Arrival flight details
                                    </Label>
                                    <Input
                                      className="form-check-input link-success"
                                      type="checkbox"
                                      role="switch"
                                      id="SwitchCheck1"
                                      onClick={t_coll7}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Collapse isOpen={coll7} id="collapseWithicon2">
                            <div className="card mb-0">
                              <CardBody>
                                <Row className="">
                                  <Col lg={3}>
                                    <div>
                                      <Label
                                        htmlFor="labelInput"
                                        className="form-label"
                                      >
                                        Flight Name
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="labelInput"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2}>
                                    <div>
                                      <Label
                                        htmlFor="labelInput"
                                        className="form-label"
                                      >
                                        Flight No
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="labelInput"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2}>
                                    <div>
                                      <Label
                                        htmlFor="exampleInputdate"
                                        className="form-label"
                                      >
                                        Arrival Date
                                      </Label>
                                      <Input
                                        type="date"
                                        className="form-control"
                                        id="exampleInputdate"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={2}>
                                    <div>
                                      <Label
                                        htmlFor="exampleInputtime"
                                        className="form-label"
                                      >
                                        Pickup Time
                                      </Label>
                                      <Input
                                        type="time"
                                        className="form-control"
                                        id="exampleInputtime"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={3}>
                                    <div>
                                      <Label
                                        htmlFor="labelInput"
                                        className="form-label"
                                      >
                                        Departing City Name
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="labelInput"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </CardBody>
                            </div>
                          </Collapse>

                          <br />
                          <Row>
                            <Col lg={6} className="mb-3">
                              <div>
                                <label htmlFor="">
                                  Select the pickup location
                                </label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option>Choose...</option>
                                  <option value="1">Declined Payment</option>
                                  <option value="2">Delivery Error</option>
                                  <option value="3">Wrong Amount</option>
                                </select>
                              </div>
                              <div className="live-preview">
                                <div>
                                  <a
                                    className="text-primary"
                                    onClick={() => tog_standard()}
                                  >
                                    Add other location
                                  </a>
                                </div>
                              </div>
                            </Col>

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
                                Modal Heading
                              </ModalHeader>
                              <ModalBody>
                                <h5 className="fs-15">
                                  Overflowing text to show scroll behavior
                                </h5>
                                <p className="text-muted">
                                  One morning, when Gregor Samsa woke from
                                  troubled dreams, he found himself transformed
                                  in his bed into a horrible vermin. He lay on
                                  his armour-like back, and if he lifted his
                                  head a little he could see his brown belly,
                                  slightly domed and divided by arches into
                                  stiff sections.
                                </p>
                                <p className="text-muted">
                                  The bedding was hardly able to cover it and
                                  seemed ready to slide off any moment. His many
                                  legs, pitifully thin compared with the size of
                                  the rest of him, waved about helplessly as he
                                  looked. "What's happened to me?" he thought.
                                </p>
                                <p className="text-muted">
                                  It wasn't a dream. His room, a proper human
                                  room although a little too small, lay
                                  peacefully between its four familiar walls.
                                </p>
                              </ModalBody>
                              <div className="modal-footer">
                                <Button
                                  color="light"
                                  onClick={() => {
                                    tog_standard();
                                  }}
                                >
                                  Close
                                </Button>
                                <Button color="primary">Save changes</Button>
                              </div>
                            </Modal>

                            <Col lg={6} className="mb-3">
                              <div>
                                <label htmlFor="">
                                  Select the dropoff location
                                </label>
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option>Choose...</option>
                                  <option value="1">Declined Payment</option>
                                  <option value="2">Delivery Error</option>
                                  <option value="3">Wrong Amount</option>
                                </select>
                              </div>
                              <div className="live-preview">
                                <div>
                                  <a
                                    className="text-primary"
                                    onClick={() => tog_standard()}
                                  >
                                    Add other location
                                  </a>
                                </div>
                              </div>
                            </Col>

                            <Col lg={4}>
                              <div>
                                <Label
                                  htmlFor="exampleInputdate"
                                  className="form-label"
                                >
                                  Pickup Date
                                </Label>
                                <Input
                                  type="date"
                                  className="form-control"
                                  id="exampleInputdate"
                                />
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div>
                                <Label
                                  htmlFor="exampleInputtime"
                                  className="form-label"
                                >
                                  Pickup Time
                                </Label>
                                <Input
                                  type="time"
                                  className="form-control"
                                  id="exampleInputtime"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div>
                                <Label
                                  htmlFor="labelInput"
                                  className="form-label"
                                >
                                  Delegation/Group Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="labelInput"
                                />
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div>
                                <Label
                                  htmlFor="labelInput"
                                  className="form-label"
                                >
                                  No of Pax
                                </Label>
                                <Input
                                  type="number"
                                  className="form-control"
                                  id="labelInput"
                                />
                              </div>
                            </Col>
                            <Col>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-wrap gap-2 my-4">
                                  <Button
                                    className="btn btn-soft-primary waves-effect waves-light"
                                    outline
                                  >
                                    {" "}
                                    Add Stops{" "}
                                  </Button>
                                  <Button
                                    className="btn btn-soft-info waves-effect waves-light"
                                    outline
                                  >
                                    {" "}
                                    Add Notes{" "}
                                  </Button>
                                  <Button
                                    className="btn btn-soft-secondary waves-effect waves-light"
                                    outline
                                  >
                                    {" "}
                                    Passenger Details{" "}
                                  </Button>
                                </div>
                                <div>
                                  <div className="live-preview">
                                    <div className="hstack gap-3">
                                      <div className="form-check form-switch">
                                        <Label
                                          className="form-check-label"
                                          htmlFor="SwitchCheck1"
                                        >
                                          Have flight details?
                                        </Label>
                                        <Input
                                          className="form-check-input link-success"
                                          type="checkbox"
                                          role="switch"
                                          id="SwitchCheck1"
                                          onClick={t_coll8}
                                          style={{ cursor: "pointer" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Collapse isOpen={coll8} id="collapseWithicon2">
                          <div className="card mb-0">
                            <CardBody>
                              <Row className="">
                                <Col lg={3}>
                                  <div>
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label"
                                    >
                                      Flight Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="labelInput"
                                    />
                                  </div>
                                </Col>
                                <Col lg={2}>
                                  <div>
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label"
                                    >
                                      Flight No
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="labelInput"
                                    />
                                  </div>
                                </Col>
                                <Col lg={2}>
                                  <div>
                                    <Label
                                      htmlFor="exampleInputdate"
                                      className="form-label"
                                    >
                                      Arrival Date
                                    </Label>
                                    <Input
                                      type="date"
                                      className="form-control"
                                      id="exampleInputdate"
                                    />
                                  </div>
                                </Col>
                                <Col lg={2}>
                                  <div>
                                    <Label
                                      htmlFor="exampleInputtime"
                                      className="form-label"
                                    >
                                      Pickup Time
                                    </Label>
                                    <Input
                                      type="time"
                                      className="form-control"
                                      id="exampleInputtime"
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div>
                                    <Label
                                      htmlFor="labelInput"
                                      className="form-label"
                                    >
                                      Departing City Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="labelInput"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </div>
                        </Collapse>

                        <div className="row mt-4">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h6>VEHICLE DETAILS</h6>
                            </div>
                            <div>
                              <div className="live-preview">
                                <div className="hstack gap-3 mb-3">
                                  <div className="form-check form-switch mb-3">
                                    <Label
                                      className="form-check-label"
                                      htmlFor="SwitchCheck1"
                                    >
                                      Vehicle Info
                                    </Label>
                                    <Input
                                      className="form-check-input link-success"
                                      type="checkbox"
                                      role="switch"
                                      id="SwitchCheck1"
                                      onClick={t_coll9}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Collapse isOpen={coll9} id="collapseWithicon2">
                            <div className="card mb-0">
                              <CardBody>
                                <Row className="">
                                  <Col lg={3}>
                                    <label htmlFor="">Make</label>
                                    <select
                                      className="form-select mb-3"
                                      aria-label="Default select example"
                                    >
                                      <option>Choose...</option>
                                      <option value="1">
                                        Declined Payment
                                      </option>
                                      <option value="2">Delivery Error</option>
                                      <option value="3">Wrong Amount</option>
                                    </select>
                                  </Col>
                                  <Col lg={3}>
                                    <label htmlFor="">Modal</label>
                                    <select
                                      className="form-select mb-3"
                                      aria-label="Default select example"
                                    >
                                      <option>Choose...</option>
                                      <option value="1">
                                        Declined Payment
                                      </option>
                                      <option value="2">Delivery Error</option>
                                      <option value="3">Wrong Amount</option>
                                    </select>
                                  </Col>
                                  <Col lg={3}>
                                    <label htmlFor="">Year</label>
                                    <select
                                      className="form-select mb-3"
                                      aria-label="Default select example"
                                    >
                                      <option>Choose...</option>
                                      <option value="1">
                                        Declined Payment
                                      </option>
                                      <option value="2">Delivery Error</option>
                                      <option value="3">Wrong Amount</option>
                                    </select>
                                  </Col>
                                  <Col lg={3}>
                                    <label htmlFor="">Colour</label>
                                    <select
                                      className="form-select mb-3"
                                      aria-label="Default select example"
                                    >
                                      <option>Choose...</option>
                                      <option value="1">
                                        Declined Payment
                                      </option>
                                      <option value="2">Delivery Error</option>
                                      <option value="3">Wrong Amount</option>
                                    </select>
                                  </Col>
                                  <Col lg={3}>
                                    <div className="form-check mb-2">
                                      <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="formCheck1"
                                      />
                                      <Label
                                        className="form-check-label"
                                        htmlFor="formCheck1"
                                      >
                                        Baby Seat
                                      </Label>
                                    </div>
                                  </Col>
                                  <Col lg={3}>
                                    <div className="form-check mb-2">
                                      <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="formCheck1"
                                      />
                                      <Label
                                        className="form-check-label"
                                        htmlFor="formCheck1"
                                      >
                                        Sanitizer
                                      </Label>
                                    </div>
                                  </Col>
                                  <Col lg={3}>
                                    <div className="form-check mb-2">
                                      <Input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="formCheck1"
                                      />
                                      <Label
                                        className="form-check-label"
                                        htmlFor="formCheck1"
                                      >
                                        Water
                                      </Label>
                                    </div>
                                  </Col>
                                </Row>
                              </CardBody>
                            </div>
                          </Collapse>
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
                                <div
                                  className="flex-grow-1 d-grid"
                                  style={{ height: "100%" }}
                                >
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
                                  <h5 className="mb-0">Sedan</h5>
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
                                <div
                                  className="flex-grow-1 d-grid"
                                  style={{ height: "100%" }}
                                >
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
                                  <h5 className="mb-0">22 Seater</h5>
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
                                <div
                                  className="flex-grow-1 d-grid"
                                  style={{ height: "100%" }}
                                >
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
                                  <h5 className="mb-0">SUV/Crossover</h5>
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
                                <div
                                  className="flex-grow-1 d-grid"
                                  style={{ height: "100%" }}
                                >
                                  <div className="car_image">
                                    <img
                                      src={busImage}
                                      alt=""
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                  <p className="text-muted mb-1">Car</p>
                                  <h5 className="mb-0">SUV/Crossover</h5>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="custom-v-pills-profile">
                        <div className="d-flex mb-4">
                          <div className="flex-shrink-0">
                            <img
                              src={img3}
                              alt=""
                              width="150"
                              className="rounded"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p className="mb-0">
                              In some designs, you might adjust your tracking to
                              create a certain artistic effect. It can also help
                              you fix fonts that are poorly spaced to begin
                              with. A wonderful serenity has taken possession of
                              my entire soul, like these sweet mornings of
                              spring which I enjoy with my whole heart.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3">
                            <p className="mb-0">
                              Each design is a new, unique piece of art birthed
                              into this world, and while you have the
                              opportunity to be creative and make your own style
                              choices. For that very reason, I went on a quest
                              and spoke to many different professional graphic
                              designers.
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <img
                              src={img6}
                              alt=""
                              width="150"
                              className="rounded"
                            />
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="3" id="custom-v-pills-messages">
                        <div className="d-flex mb-4">
                          <div className="flex-shrink-0">
                            <img
                              src={img7}
                              alt=""
                              width="150"
                              className="rounded"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <p className="mb-0">
                              Trust fund seitan letterpress, keytar raw denim
                              keffiyeh etsy art party before they sold out
                              master cleanse gluten-free squid scenester freegan
                              cosby sweater. Fanny pack portland seitan DIY, art
                              party locavore wolf cliche high life echo park
                              Austin. Cred vinyl keffiyeh DIY salvia PBR.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3">
                            <p className="mb-0">
                              They all have something to say beyond the words on
                              the page. They can come across as casual or
                              neutral, exotic or graphic. That's why it's
                              important to think about your message, then choose
                              a font that fits. Cosby sweater eu banh mi, qui
                              irure terry richardson ex squid.
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <img
                              src={img8}
                              alt=""
                              width="150"
                              className="rounded"
                            />
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BookRide;
