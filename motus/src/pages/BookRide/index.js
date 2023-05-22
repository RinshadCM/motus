import React from "react";
import { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
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
  Table,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledTooltip,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
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

  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(true);
  const [col3, setcol3] = useState(true);

  function togglecol1() {
    setcol1(!col1);
  }

  function togglecol2() {
    setcol2(!col2);
  }

  function togglecol3() {
    setcol3(!col3);
  }

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

  const [customNav, setcustomNav] = useState("1");
  const customNavtoggle = (tab) => {
    if (customNav !== tab) {
      setcustomNav(tab);
    }
  };

  const [isRight, setIsRight] = useState(false);

  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };

  const [isRight2, setIsRight2] = useState(false);

  const toggleRightCanvas2 = () => {
    setIsRight2(!isRight2);
  };

  const [selectedOption, setSelectedOption] = useState("oneway");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
                                <input
                                  id="oneway"
                                  name="ways"
                                  type="radio"
                                  value="oneway"
                                  className="form-check-input"
                                  checked={selectedOption === "oneway"}
                                  onChange={handleOptionChange}
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="credit"
                                >
                                  One Way
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  id="twoway"
                                  name="ways"
                                  type="radio"
                                  value="twoway"
                                  className="form-check-input"
                                  checked={selectedOption === "twoway"}
                                  onChange={handleOptionChange}
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="debit"
                                >
                                  Two Way
                                </label>
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

                          {/* ********************************** */}
                          {/* ************ONE WAY*************** */}
                          {/* ********************************** */}
                          <div
                            id="div1"
                            style={{
                              display:
                                selectedOption === "oneway" ? "block" : "none",
                            }}
                          >
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
                                  Add other Locations
                                </ModalHeader>
                                <ModalBody>
                                  <CardBody>
                                    <Nav
                                      pills
                                      className="nav-customs nav-danger mb-3"
                                    >
                                      <div className="d-flex justify-content-center  w-100">
                                        <NavItem>
                                          <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                              active: customNav === "1",
                                            })}
                                            onClick={() => {
                                              customNavtoggle("1");
                                            }}
                                          >
                                            Google Places
                                          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                          <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                              active: customNav === "2",
                                            })}
                                            onClick={() => {
                                              customNavtoggle("2");
                                            }}
                                          >
                                            Lat Long
                                          </NavLink>
                                        </NavItem>
                                      </div>
                                    </Nav>

                                    <TabContent
                                      activeTab={customNav}
                                      className="text-muted"
                                    >
                                      <TabPane tabId="1" id="border-navs-home">
                                        <div
                                          className="tab-pane active pt-3"
                                          id="border-navs-home"
                                          role="tabpanel"
                                        >
                                          <div className="d-flex gap-2">
                                            <Col lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter pickup location
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter pickup location"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col className="" lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter drop location
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter drop location"
                                                  />
                                                  <i className="ri-stop-fill"></i>
                                                </div>
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </TabPane>
                                      <TabPane
                                        tabId="2"
                                        id="border-navs-profile"
                                      >
                                        <div
                                          className="tab-pane active pt-3"
                                          id="border-navs-home"
                                          role="tabpanel"
                                        >
                                          <div className="d-flex gap-2">
                                            <Col lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter Latitude
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Latitude"
                                                  />
                                                  <i className="ri-map-pin-range-line"></i>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col className="" lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter Longitude
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder=" Longitude"
                                                  />
                                                  <i className="ri-map-pin-range-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </TabPane>
                                    </TabContent>
                                  </CardBody>{" "}
                                </ModalBody>
                                <div className="modal-footer">
                                  <Button className="btn-soft-warning">
                                    Add
                                  </Button>
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
                                      onClick={toggleRightCanvas}
                                      outline
                                    >
                                      {" "}
                                      Add Notes{" "}
                                    </Button>

                                    {/* Right offcanvas */}
                                    <Offcanvas
                                      isOpen={isRight}
                                      direction="end"
                                      toggle={toggleRightCanvas}
                                      id="offcanvasRight"
                                      className="border-bottom"
                                    >
                                      <OffcanvasHeader
                                        toggle={toggleRightCanvas}
                                        id="offcanvasRightLabel"
                                      >
                                        Add Notes
                                      </OffcanvasHeader>
                                      <OffcanvasBody className="p-3">
                                        <SimpleBar>
                                          <div>
                                            <div>
                                              <select
                                                className="form-select"
                                                aria-label="Default select example"
                                              >
                                                <option>Choose...</option>
                                                <option value="1">
                                                  Declined Payment
                                                </option>
                                                <option value="2">
                                                  Delivery Error
                                                </option>
                                                <option value="3">
                                                  Wrong Amount
                                                </option>
                                              </select>
                                            </div>{" "}
                                          </div>
                                          <div className="mt-2">
                                            <textarea
                                              className="form-control"
                                              id="message-text"
                                              placeholder="Enter your Note"
                                              rows="4"
                                            ></textarea>
                                          </div>
                                          <div className="d-flex w-100 justify-content-end mt-2">
                                            <Button className="btn-soft-secondary">
                                              Add Notes
                                            </Button>
                                          </div>
                                          <div className="profile-timeline">
                                            <div
                                              className="accordion accordion-flush"
                                              id="accordionFlushExample"
                                            >
                                              <div
                                                className="accordion-item border-0"
                                                onClick={togglecol1}
                                              >
                                                <div
                                                  className="accordion-header"
                                                  id="headingOne"
                                                >
                                                  <Link
                                                    to="#"
                                                    className={classnames(
                                                      "accordion-button",
                                                      "p-2",
                                                      "shadow-none",
                                                      { collapsed: !col1 }
                                                    )}
                                                  >
                                                    <div className="d-flex align-items-center">
                                                      <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-primary rounded-circle">
                                                          <i className="ri-shopping-bag-line"></i>
                                                        </div>
                                                      </div>
                                                      <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-0 fw-semibold">
                                                          General Notes
                                                        </h6>
                                                      </div>
                                                    </div>
                                                  </Link>
                                                </div>
                                                <Collapse
                                                  id="collapseOne"
                                                  className="accordion-collapse"
                                                  isOpen={col1}
                                                >
                                                  <div className="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 className="mb-1">
                                                      Lorem ipsum dolor sit,
                                                      amet consectetur
                                                      adipisicing elit.
                                                      Cupiditate exercitationem
                                                      dicta corrupti eius
                                                      facilis sit voluptatum est
                                                      quia praesentium
                                                    </h6>
                                                    <p className="text-muted">
                                                      Created by:Rde Admin 2021
                                                      - 05:34PM <br />@ Wed, 15
                                                      Dec
                                                    </p>
                                                  </div>
                                                </Collapse>
                                              </div>
                                              <div
                                                className="accordion-item border-0"
                                                onClick={togglecol2}
                                              >
                                                <div
                                                  className="accordion-header"
                                                  id="headingTwo"
                                                >
                                                  <Link
                                                    to="#"
                                                    className={classnames(
                                                      "accordion-button",
                                                      "p-2",
                                                      "shadow-none",
                                                      { collapsed: !col2 }
                                                    )}
                                                    href="#collapseTwo"
                                                  >
                                                    <div className="d-flex align-items-center">
                                                      <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-primary rounded-circle">
                                                          <i className="mdi mdi-gift-outline"></i>
                                                        </div>
                                                      </div>
                                                      <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-1 fw-semibold">
                                                          Locations
                                                        </h6>
                                                      </div>
                                                    </div>
                                                  </Link>
                                                </div>
                                                <Collapse
                                                  id="collapseTwo"
                                                  className="accordion-collapse"
                                                  isOpen={col2}
                                                >
                                                  <div className="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 className="mb-1">
                                                      Lorem ipsum dolor sit amet
                                                      consectetur adipisicing
                                                      elit. Blanditiis, voluptas
                                                      explicabo! Aliquid
                                                      assumenda quo nostrum
                                                      atque consequatur facere
                                                      sint
                                                    </h6>
                                                    <p className="text-muted mb-0">
                                                      Created by:Rde Admin 2021
                                                      - 05:34PM <br /> @ Wed, 15
                                                      Dec{" "}
                                                    </p>
                                                  </div>
                                                </Collapse>
                                              </div>
                                              <div
                                                className="accordion-item border-0"
                                                onClick={togglecol3}
                                              >
                                                <div
                                                  className="accordion-header"
                                                  id="headingThree"
                                                >
                                                  <Link
                                                    to="#"
                                                    className={classnames(
                                                      "accordion-button",
                                                      "p-2",
                                                      "shadow-none",
                                                      { collapsed: !col3 }
                                                    )}
                                                    href="#collapseThree"
                                                  >
                                                    <div className="d-flex align-items-center">
                                                      <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-primary rounded-circle">
                                                          <i className="ri-truck-line"></i>
                                                        </div>
                                                      </div>
                                                      <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-1 fw-semibold">
                                                          Locations
                                                        </h6>
                                                      </div>
                                                    </div>
                                                  </Link>
                                                </div>
                                                <Collapse
                                                  id="collapseThree"
                                                  className="accordion-collapse"
                                                  isOpen={col3}
                                                >
                                                  <div className="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 className="fs-14">
                                                      Lorem, ipsum dolor sit
                                                      amet consectetur
                                                      adipisicing elit. Itaque
                                                      facere rem quia eveniet
                                                      maxime ipsum quam earum
                                                      minus,{" "}
                                                    </h6>
                                                    <p className="text-muted mb-0">
                                                      Created by:Rde Admin
                                                      05:34PM <br /> @ Wed, 15
                                                      Dec 2021{" "}
                                                    </p>
                                                  </div>
                                                </Collapse>
                                              </div>
                                            </div>
                                          </div>
                                        </SimpleBar>
                                      </OffcanvasBody>
                                    </Offcanvas>
                                    <Button
                                      className="btn btn-soft-secondary waves-effect waves-light"
                                      onClick={toggleRightCanvas2}
                                      outline
                                    >
                                      {" "}
                                      Passenger Details{" "}
                                    </Button>

                                    {/* !!!!!!!!!!!!!PASSENGER DETAILS !!!!!!!!!!!!!!!!!!!*/}
                                    <Offcanvas
                                      isOpen={isRight2}
                                      direction="end"
                                      toggle={toggleRightCanvas2}
                                      id="offcanvasRight"
                                      className="border-bottom"
                                    >
                                      <OffcanvasHeader
                                        toggle={toggleRightCanvas2}
                                        id="offcanvasRightLabel"
                                      >
                                        Add Passenger Details
                                      </OffcanvasHeader>
                                      <OffcanvasBody className="p-3 overflow-hidden">
                                        <SimpleBar style={{ height: "100vh" }}>
                                          <div className="d-flex w-100 flex-wrap">
                                            <Col lg={6}>
                                              <div style={{ width: "90%" }}>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter full name"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg={6}>
                                              <div style={{ width: "90%" }}>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter Email"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col className="pt-3" lg={6}>
                                              <div style={{ width: "90%" }}>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter Phone number"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col className="pt-3" lg={6}>
                                              <div
                                                className="form-check mt-2"
                                                style={{ width: "100%" }}
                                              >
                                                <Input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="formCheck1"
                                                />
                                                <Label
                                                  className="form-check-label"
                                                  htmlFor="formCheck1"
                                                >
                                                  Lead Passenger
                                                </Label>
                                              </div>
                                            </Col>
                                          </div>
                                          <div className="d-flex w-100 justify-content-end mt-2">
                                            <Button className="btn-soft-secondary">
                                              Add Passenger
                                            </Button>
                                          </div>
                                          <div className="table-responsive">
                                            <Table className="table-sm table-nowrap mb-0">
                                              <thead>
                                                <tr>
                                                  <th scope="col">SL</th>
                                                  <th scope="col">Name</th>
                                                  <th scope="col">Email</th>
                                                  <th scope="col">Phone</th>
                                                  <th scope="col">Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="fw-medium">
                                                    1
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fw-medium">
                                                    2
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fw-medium">
                                                    3
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fw-medium">
                                                    4
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </div>
                                          <div>
                                            <OffcanvasHeader>
                                              Add Passenger Luggage Details
                                            </OffcanvasHeader>
                                          </div>
                                          <Col lg={12}>
                                            <div>
                                              <div className="form-icon">
                                                <Input
                                                  type="number"
                                                  className="form-control form-control-icon"
                                                  id="iconInput"
                                                  placeholder="No of Luggages"
                                                />
                                                <i className="ri-map-pin-line"></i>
                                              </div>
                                            </div>
                                          </Col>
                                          <Col className="pt-3" lg={12}>
                                            <div className="form-check mt-2">
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="formCheck1"
                                              />
                                              <Label
                                                className="form-check-label"
                                                htmlFor="formCheck1"
                                              >
                                                Are you carrying heavy luggage
                                              </Label>
                                            </div>
                                          </Col>
                                        </SimpleBar>
                                      </OffcanvasBody>
                                    </Offcanvas>
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
                          {/* ************************************************ */}
                          {/* ***************ONE WAY END ********************* */}
                          {/* ************************************************ */}

                          {/* ************************************************ */}
                          {/* ***************TWO WAY START********************* */}
                          {/* ************************************************ */}

                          <div
                            id="div2"
                            style={{
                              display:
                                selectedOption === "twoway" ? "block" : "none",
                            }}
                          >
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
                                  Add other Locations
                                </ModalHeader>
                                <ModalBody>
                                  <CardBody>
                                    <Nav
                                      pills
                                      className="nav-customs nav-danger mb-3"
                                    >
                                      <div className="d-flex justify-content-center  w-100">
                                        <NavItem>
                                          <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                              active: customNav === "1",
                                            })}
                                            onClick={() => {
                                              customNavtoggle("1");
                                            }}
                                          >
                                            Google Places
                                          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                          <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                              active: customNav === "2",
                                            })}
                                            onClick={() => {
                                              customNavtoggle("2");
                                            }}
                                          >
                                            Lat Long
                                          </NavLink>
                                        </NavItem>
                                      </div>
                                    </Nav>

                                    <TabContent
                                      activeTab={customNav}
                                      className="text-muted"
                                    >
                                      <TabPane tabId="1" id="border-navs-home">
                                        <div
                                          className="tab-pane active pt-3"
                                          id="border-navs-home"
                                          role="tabpanel"
                                        >
                                          <div className="d-flex gap-2">
                                            <Col lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter pickup location
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter pickup location"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col className="" lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter drop location
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter drop location"
                                                  />
                                                  <i className="ri-stop-fill"></i>
                                                </div>
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </TabPane>
                                      <TabPane
                                        tabId="2"
                                        id="border-navs-profile"
                                      >
                                        <div
                                          className="tab-pane active pt-3"
                                          id="border-navs-home"
                                          role="tabpanel"
                                        >
                                          <div className="d-flex gap-2">
                                            <Col lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter Latitude
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Latitude"
                                                  />
                                                  <i className="ri-map-pin-range-line"></i>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col className="" lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter Longitude
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder=" Longitude"
                                                  />
                                                  <i className="ri-map-pin-range-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </TabPane>
                                    </TabContent>
                                  </CardBody>{" "}
                                </ModalBody>
                                <div className="modal-footer">
                                  <Button className="btn-soft-warning">
                                    Add
                                  </Button>
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
                                      onClick={toggleRightCanvas}
                                      outline
                                    >
                                      {" "}
                                      Add Notes{" "}
                                    </Button>

                                    {/* Right offcanvas */}
                                    <Offcanvas
                                      isOpen={isRight}
                                      direction="end"
                                      toggle={toggleRightCanvas}
                                      id="offcanvasRight"
                                      className="border-bottom"
                                    >
                                      <OffcanvasHeader
                                        toggle={toggleRightCanvas}
                                        id="offcanvasRightLabel"
                                      >
                                        Add Notes
                                      </OffcanvasHeader>
                                      <OffcanvasBody className="p-3">
                                        <SimpleBar>
                                          <div>
                                            <div>
                                              <select
                                                className="form-select"
                                                aria-label="Default select example"
                                              >
                                                <option>Choose...</option>
                                                <option value="1">
                                                  Declined Payment
                                                </option>
                                                <option value="2">
                                                  Delivery Error
                                                </option>
                                                <option value="3">
                                                  Wrong Amount
                                                </option>
                                              </select>
                                            </div>{" "}
                                          </div>
                                          <div className="mt-2">
                                            <textarea
                                              className="form-control"
                                              id="message-text"
                                              placeholder="Enter your Note"
                                              rows="4"
                                            ></textarea>
                                          </div>
                                          <div className="d-flex w-100 justify-content-end mt-2">
                                            <Button className="btn-soft-secondary">
                                              Add Notes
                                            </Button>
                                          </div>
                                          <div className="profile-timeline">
                                            <div
                                              className="accordion accordion-flush"
                                              id="accordionFlushExample"
                                            >
                                              <div
                                                className="accordion-item border-0"
                                                onClick={togglecol1}
                                              >
                                                <div
                                                  className="accordion-header"
                                                  id="headingOne"
                                                >
                                                  <Link
                                                    to="#"
                                                    className={classnames(
                                                      "accordion-button",
                                                      "p-2",
                                                      "shadow-none",
                                                      { collapsed: !col1 }
                                                    )}
                                                  >
                                                    <div className="d-flex align-items-center">
                                                      <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-primary rounded-circle">
                                                          <i className="ri-shopping-bag-line"></i>
                                                        </div>
                                                      </div>
                                                      <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-0 fw-semibold">
                                                          General Notes
                                                        </h6>
                                                      </div>
                                                    </div>
                                                  </Link>
                                                </div>
                                                <Collapse
                                                  id="collapseOne"
                                                  className="accordion-collapse"
                                                  isOpen={col1}
                                                >
                                                  <div className="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 className="mb-1">
                                                      Lorem ipsum dolor sit,
                                                      amet consectetur
                                                      adipisicing elit.
                                                      Cupiditate exercitationem
                                                      dicta corrupti eius
                                                      facilis sit voluptatum est
                                                      quia praesentium
                                                    </h6>
                                                    <p className="text-muted">
                                                      Created by:Rde Admin 2021
                                                      - 05:34PM <br />@ Wed, 15
                                                      Dec
                                                    </p>
                                                  </div>
                                                </Collapse>
                                              </div>
                                              <div
                                                className="accordion-item border-0"
                                                onClick={togglecol2}
                                              >
                                                <div
                                                  className="accordion-header"
                                                  id="headingTwo"
                                                >
                                                  <Link
                                                    to="#"
                                                    className={classnames(
                                                      "accordion-button",
                                                      "p-2",
                                                      "shadow-none",
                                                      { collapsed: !col2 }
                                                    )}
                                                    href="#collapseTwo"
                                                  >
                                                    <div className="d-flex align-items-center">
                                                      <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-primary rounded-circle">
                                                          <i className="mdi mdi-gift-outline"></i>
                                                        </div>
                                                      </div>
                                                      <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-1 fw-semibold">
                                                          Locations
                                                        </h6>
                                                      </div>
                                                    </div>
                                                  </Link>
                                                </div>
                                                <Collapse
                                                  id="collapseTwo"
                                                  className="accordion-collapse"
                                                  isOpen={col2}
                                                >
                                                  <div className="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 className="mb-1">
                                                      Lorem ipsum dolor sit amet
                                                      consectetur adipisicing
                                                      elit. Blanditiis, voluptas
                                                      explicabo! Aliquid
                                                      assumenda quo nostrum
                                                      atque consequatur facere
                                                      sint
                                                    </h6>
                                                    <p className="text-muted mb-0">
                                                      Created by:Rde Admin 2021
                                                      - 05:34PM <br /> @ Wed, 15
                                                      Dec{" "}
                                                    </p>
                                                  </div>
                                                </Collapse>
                                              </div>
                                              <div
                                                className="accordion-item border-0"
                                                onClick={togglecol3}
                                              >
                                                <div
                                                  className="accordion-header"
                                                  id="headingThree"
                                                >
                                                  <Link
                                                    to="#"
                                                    className={classnames(
                                                      "accordion-button",
                                                      "p-2",
                                                      "shadow-none",
                                                      { collapsed: !col3 }
                                                    )}
                                                    href="#collapseThree"
                                                  >
                                                    <div className="d-flex align-items-center">
                                                      <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-primary rounded-circle">
                                                          <i className="ri-truck-line"></i>
                                                        </div>
                                                      </div>
                                                      <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-1 fw-semibold">
                                                          Locations
                                                        </h6>
                                                      </div>
                                                    </div>
                                                  </Link>
                                                </div>
                                                <Collapse
                                                  id="collapseThree"
                                                  className="accordion-collapse"
                                                  isOpen={col3}
                                                >
                                                  <div className="accordion-body ms-2 ps-5 pt-0">
                                                    <h6 className="fs-14">
                                                      Lorem, ipsum dolor sit
                                                      amet consectetur
                                                      adipisicing elit. Itaque
                                                      facere rem quia eveniet
                                                      maxime ipsum quam earum
                                                      minus,{" "}
                                                    </h6>
                                                    <p className="text-muted mb-0">
                                                      Created by:Rde Admin
                                                      05:34PM <br /> @ Wed, 15
                                                      Dec 2021{" "}
                                                    </p>
                                                  </div>
                                                </Collapse>
                                              </div>
                                            </div>
                                          </div>
                                        </SimpleBar>
                                      </OffcanvasBody>
                                    </Offcanvas>
                                    <Button
                                      className="btn btn-soft-secondary waves-effect waves-light"
                                      onClick={toggleRightCanvas2}
                                      outline
                                    >
                                      {" "}
                                      Passenger Details{" "}
                                    </Button>

                                    {/* !!!!!!!!!!!!!PASSENGER DETAILS !!!!!!!!!!!!!!!!!!!*/}
                                    <Offcanvas
                                      isOpen={isRight2}
                                      direction="end"
                                      toggle={toggleRightCanvas2}
                                      id="offcanvasRight"
                                      className="border-bottom"
                                    >
                                      <OffcanvasHeader
                                        toggle={toggleRightCanvas2}
                                        id="offcanvasRightLabel"
                                      >
                                        Add Passenger Details
                                      </OffcanvasHeader>
                                      <OffcanvasBody className="p-3 overflow-hidden">
                                        <SimpleBar style={{ height: "100vh" }}>
                                          <div className="d-flex w-100 flex-wrap">
                                            <Col lg={6}>
                                              <div style={{ width: "90%" }}>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter full name"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col lg={6}>
                                              <div style={{ width: "90%" }}>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter Email"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col className="pt-3" lg={6}>
                                              <div style={{ width: "90%" }}>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter Phone number"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col className="pt-3" lg={6}>
                                              <div
                                                className="form-check mt-2"
                                                style={{ width: "100%" }}
                                              >
                                                <Input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="formCheck1"
                                                />
                                                <Label
                                                  className="form-check-label"
                                                  htmlFor="formCheck1"
                                                >
                                                  Lead Passenger
                                                </Label>
                                              </div>
                                            </Col>
                                          </div>
                                          <div className="d-flex w-100 justify-content-end mt-2">
                                            <Button className="btn-soft-secondary">
                                              Add Passenger
                                            </Button>
                                          </div>
                                          <div className="table-responsive">
                                            <Table className="table-sm table-nowrap mb-0">
                                              <thead>
                                                <tr>
                                                  <th scope="col">SL</th>
                                                  <th scope="col">Name</th>
                                                  <th scope="col">Email</th>
                                                  <th scope="col">Phone</th>
                                                  <th scope="col">Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="fw-medium">
                                                    1
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fw-medium">
                                                    2
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fw-medium">
                                                    3
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="fw-medium">
                                                    4
                                                  </td>
                                                  <td>Name</td>
                                                  <td>youremail@email.com </td>
                                                  <td>0123456789</td>
                                                  <td>
                                                    <a href="">
                                                      <i className="ri-delete-bin-line ms-3"></i>
                                                    </a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </Table>
                                          </div>
                                          <div>
                                            <OffcanvasHeader>
                                              Add Passenger Luggage Details
                                            </OffcanvasHeader>
                                          </div>
                                          <Col lg={12}>
                                            <div>
                                              <div className="form-icon">
                                                <Input
                                                  type="number"
                                                  className="form-control form-control-icon"
                                                  id="iconInput"
                                                  placeholder="No of Luggages"
                                                />
                                                <i className="ri-map-pin-line"></i>
                                              </div>
                                            </div>
                                          </Col>
                                          <Col className="pt-3" lg={12}>
                                            <div className="form-check mt-2">
                                              <Input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="formCheck1"
                                              />
                                              <Label
                                                className="form-check-label"
                                                htmlFor="formCheck1"
                                              >
                                                Are you carrying heavy luggage
                                              </Label>
                                            </div>
                                          </Col>
                                        </SimpleBar>
                                      </OffcanvasBody>
                                    </Offcanvas>
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
                                  Add other Locations
                                </ModalHeader>
                                <ModalBody>
                                  <CardBody>
                                    <Nav
                                      pills
                                      className="nav-customs nav-danger mb-3"
                                    >
                                      <div className="d-flex justify-content-center  w-100">
                                        <NavItem>
                                          <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                              active: customNav === "1",
                                            })}
                                            onClick={() => {
                                              customNavtoggle("1");
                                            }}
                                          >
                                            Google Places
                                          </NavLink>
                                        </NavItem>
                                        <NavItem>
                                          <NavLink
                                            style={{ cursor: "pointer" }}
                                            className={classnames({
                                              active: customNav === "2",
                                            })}
                                            onClick={() => {
                                              customNavtoggle("2");
                                            }}
                                          >
                                            Lat Long
                                          </NavLink>
                                        </NavItem>
                                      </div>
                                    </Nav>

                                    <TabContent
                                      activeTab={customNav}
                                      className="text-muted"
                                    >
                                      <TabPane tabId="1" id="border-navs-home">
                                        <div
                                          className="tab-pane active pt-3"
                                          id="border-navs-home"
                                          role="tabpanel"
                                        >
                                          <div className="d-flex gap-2">
                                            <Col lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter pickup location
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter pickup location"
                                                  />
                                                  <i className="ri-map-pin-line"></i>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col className="" lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter drop location
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Enter drop location"
                                                  />
                                                  <i className="ri-stop-fill"></i>
                                                </div>
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </TabPane>
                                      <TabPane
                                        tabId="2"
                                        id="border-navs-profile"
                                      >
                                        <div
                                          className="tab-pane active pt-3"
                                          id="border-navs-home"
                                          role="tabpanel"
                                        >
                                          <div className="d-flex gap-2">
                                            <Col lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter Latitude
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder="Latitude"
                                                  />
                                                  <i className="ri-map-pin-range-line"></i>
                                                </div>
                                              </div>
                                            </Col>

                                            <Col className="" lg={6}>
                                              <div>
                                                <Label
                                                  htmlFor="iconInput"
                                                  className="form-label"
                                                >
                                                  Enter Longitude
                                                </Label>
                                                <div className="form-icon">
                                                  <Input
                                                    type="email"
                                                    className="form-control form-control-icon"
                                                    id="iconInput"
                                                    placeholder=" Longitude"
                                                  />
                                                  <i className="ri-map-pin-range-line"></i>
                                                </div>
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </TabPane>
                                    </TabContent>
                                  </CardBody>{" "}
                                </ModalBody>
                                <div className="modal-footer">
                                  <Button className="btn-soft-warning">
                                    Add
                                  </Button>
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
                            </Row>


                          </div>
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

                      {/* ********************HOURLY HIRES**************************** */}

                      <TabPane tabId="2" id="custom-v-pills-profile">
                        <div className="my-3">
                          <div
                            className="d-flex justify-content-between"
                            style={{ height: "1.4rem" }}
                          >
                            <div>
                              <div className="form-check form-check-inline">
                                <Input
                                  id="twohrs"
                                  name="hrs"
                                  type="radio"
                                  className="form-check-input"
                                  defaultChecked
                                  checked
                                  required
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="twohrs"
                                >
                                  2 Hrs
                                </Label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Input
                                  id="fourhrs"
                                  name="hrs"
                                  type="radio"
                                  className="form-check-input"
                                  required
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="fourhrs"
                                >
                                  4 Hrs
                                </Label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Input
                                  id="eighthrs"
                                  name="hrs"
                                  type="radio"
                                  className="form-check-input"
                                  required
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="eighthrs"
                                >
                                  8 Hrs
                                </Label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Input
                                  id="twelvehrs"
                                  name="hrs"
                                  type="radio"
                                  className="form-check-input"
                                  required
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="twelvehrs"
                                >
                                  12 Hrs
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
                                Add other Locations
                              </ModalHeader>
                              <ModalBody>
                                <CardBody>
                                  <Nav
                                    pills
                                    className="nav-customs nav-danger mb-3"
                                  >
                                    <div className="d-flex justify-content-center  w-100">
                                      <NavItem>
                                        <NavLink
                                          style={{ cursor: "pointer" }}
                                          className={classnames({
                                            active: customNav === "1",
                                          })}
                                          onClick={() => {
                                            customNavtoggle("1");
                                          }}
                                        >
                                          Google Places
                                        </NavLink>
                                      </NavItem>
                                      <NavItem>
                                        <NavLink
                                          style={{ cursor: "pointer" }}
                                          className={classnames({
                                            active: customNav === "2",
                                          })}
                                          onClick={() => {
                                            customNavtoggle("2");
                                          }}
                                        >
                                          Lat Long
                                        </NavLink>
                                      </NavItem>
                                    </div>
                                  </Nav>

                                  <TabContent
                                    activeTab={customNav}
                                    className="text-muted"
                                  >
                                    <TabPane tabId="1" id="border-navs-home">
                                      <div
                                        className="tab-pane active pt-3"
                                        id="border-navs-home"
                                        role="tabpanel"
                                      >
                                        <div className="d-flex gap-2">
                                          <Col lg={6}>
                                            <div>
                                              <Label
                                                htmlFor="iconInput"
                                                className="form-label"
                                              >
                                                Enter pickup location
                                              </Label>
                                              <div className="form-icon">
                                                <Input
                                                  type="email"
                                                  className="form-control form-control-icon"
                                                  id="iconInput"
                                                  placeholder="Enter pickup location"
                                                />
                                                <i className="ri-map-pin-line"></i>
                                              </div>
                                            </div>
                                          </Col>

                                          <Col className="" lg={6}>
                                            <div>
                                              <Label
                                                htmlFor="iconInput"
                                                className="form-label"
                                              >
                                                Enter drop location
                                              </Label>
                                              <div className="form-icon">
                                                <Input
                                                  type="email"
                                                  className="form-control form-control-icon"
                                                  id="iconInput"
                                                  placeholder="Enter drop location"
                                                />
                                                <i className="ri-stop-fill"></i>
                                              </div>
                                            </div>
                                          </Col>
                                        </div>
                                      </div>
                                    </TabPane>

                                    <TabPane tabId="2" id="border-navs-profile">
                                      <div
                                        className="tab-pane active pt-3"
                                        id="border-navs-home"
                                        role="tabpanel"
                                      >
                                        <div className="d-flex gap-2">
                                          <Col lg={6}>
                                            <div>
                                              <Label
                                                htmlFor="iconInput"
                                                className="form-label"
                                              >
                                                Enter Latitude
                                              </Label>
                                              <div className="form-icon">
                                                <Input
                                                  type="email"
                                                  className="form-control form-control-icon"
                                                  id="iconInput"
                                                  placeholder="Latitude"
                                                />
                                                <i className="ri-map-pin-range-line"></i>
                                              </div>
                                            </div>
                                          </Col>

                                          <Col className="" lg={6}>
                                            <div>
                                              <Label
                                                htmlFor="iconInput"
                                                className="form-label"
                                              >
                                                Enter Longitude
                                              </Label>
                                              <div className="form-icon">
                                                <Input
                                                  type="email"
                                                  className="form-control form-control-icon"
                                                  id="iconInput"
                                                  placeholder=" Longitude"
                                                />
                                                <i className="ri-map-pin-range-line"></i>
                                              </div>
                                            </div>
                                          </Col>
                                        </div>
                                      </div>
                                    </TabPane>
                                  </TabContent>
                                </CardBody>{" "}
                              </ModalBody>
                              <div className="modal-footer">
                                <Button className="btn-soft-warning">
                                  Add
                                </Button>
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
