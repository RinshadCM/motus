import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardHeader,
  Collapse,
} from "reactstrap";

import classnames from "classnames";
import { Link } from "react-router-dom";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import { productDetails } from "../../common/data/ecommerce";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import suv from "../../assets/images/cars/suv.svg";

const BookingDetails = (props) => {
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(true);
  const [col3, setcol3] = useState(true);
  const [col4, setcol4] = useState(true);

  function togglecol1() {
    setcol1(!col1);
  }

  function togglecol2() {
    setcol2(!col2);
  }

  function togglecol3() {
    setcol3(!col3);
  }

  function togglecol4() {
    setcol4(!col4);
  }

  document.title = "Order Details | Velzon - React Admin & Dashboard Template";
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Booking Details" pageTitle="Bookings" />

        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader>
                <div className="d-sm-flex align-items-center">
                  <h5 className="card-title flex-grow-1 mb-0">
                    <span className="text-primary">#RDE 2057</span> - Team
                    Ambigo + 2
                  </h5>
                  <div className="flex-shrink-0 mt-2 mt-sm-0">
                    <Link
                      to="#"
                      className="btn btn-soft-info btn-sm mt-2 mt-sm-0"
                    >
                      <i className="ri-sticky-note-line align-middle me-1"></i>{" "}
                      Notes
                    </Link>{" "}
                    <Link
                      to="#"
                      className="btn btn-soft-primary btn-sm mt-2 mt-sm-0"
                    >
                      <i className="mdi mdi-map-marker-multiple-outline align-middle me-1"></i>{" "}
                      Modify Trip
                    </Link>{" "}
                    <Link
                      to="#"
                      className="btn btn-soft-secondary btn-sm mt-2 mt-sm-0"
                    >
                      <i className="ri-route-line align-middle me-1"></i>{" "}
                      Trip Status
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="profile-timeline">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div
                      className="accordion-item border-0"
                      onClick={togglecol1}
                    >
                      <div className="accordion-header" id="headingOne">
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
                                <i className="mdi mdi mdi-taxi"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-0 fw-semibold">
                                Driver on the Way to Pickup (DOW)
                              </h6>
                              <p className="text-muted">Start Point</p>
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
                            The driver started from{" "}
                            <span className="text-info">
                              Exotic Cars Garage Dubai - 22nd Street - Dubai -
                              United Arab Emirates
                            </span>{" "}
                            on
                          </h6>
                          <p className="text-muted">
                            Wed, 15 Dec 2021 - 05:34PM
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="accordion-item border-0"
                      onClick={togglecol2}
                    >
                      <div className="accordion-header" id="headingTwo">
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
                                <i className="mdi mdi-source-commit-start"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-1 fw-semibold">
                                Airport Terminal 3 - Dubai - United Arab
                                Emirates
                              </h6>
                              <p className="text-muted">Pickup Point</p>
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
                            The driver reached pickup point{" "}
                            <span className="text-info">(DPP)</span> on
                          </h6>
                          <p className="text-muted mb-0">
                            Fri, 17 Dec 2021 - 9:45AM
                          </p>
                        </div>

                        <div className="accordion-body ms-2 ps-5 pt-0">
                          <h6 className="mb-1">
                            The passenger onboarded{" "}
                            <span className="text-info">(POB)</span> and Trip
                            started on
                          </h6>
                          <p className="text-muted mb-0">
                            Fri, 17 Dec 2021 - 9:45AM
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="accordion-item border-0"
                      onClick={togglecol3}
                    >
                      <div className="accordion-header" id="headingThree">
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
                                <i className="mdi mdi-source-commit"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-1 fw-semibold">
                                Espada Business Center - Dubai - United Arab
                                Emirates
                              </h6>
                              <p className="text-muted">Stop 1</p>
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
                          <h6 className="mb-1">
                            The driver reached at stop 1 on
                          </h6>
                          <p className="text-muted mb-0">
                            Sat, 18 Dec 2021 - 4.54PM
                          </p>
                        </div>
                      </Collapse>
                    </div>
                    <div
                      className="accordion-item border-0"
                      onClick={togglecol4}
                    >
                      <div className="accordion-header" id="headingThree">
                        <Link
                          to="#"
                          className={classnames(
                            "accordion-button",
                            "p-2",
                            "shadow-none",
                            { collapsed: !col4 }
                          )}
                          href="#collapseThree"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-primary rounded-circle">
                                <i className="mdi mdi-source-commit-end"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-1 fw-semibold">
                                Grand Hyatt Dubai - Sheikh Rashid Road - Dubai -
                                United Arab Emirates
                              </h6>
                              <p className="text-muted">Drop Point</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Collapse
                        id="collapseThree"
                        className="accordion-collapse"
                        isOpen={col4}
                      >
                        <div className="accordion-body ms-2 ps-5 pt-0">
                          <h6 className="mb-1">
                            The passenger dropped off{" "}
                            <span className="text-info">(PDO)</span> on
                          </h6>
                          <p className="text-muted mb-0">
                            Sat, 18 Dec 2021 - 4.54PM
                          </p>
                        </div>
                      </Collapse>
                    </div>

                    <div className="accordion-item border-0">
                      <div className="accordion-header" id="headingThree">
                        <Link
                          to="#"
                          className={classnames(
                            "accordion-button",
                            "p-2",
                            "shadow-none",
                            { collapsed: !col4 }
                          )}
                          href="#collapseThree"
                        >
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs">
                              <div className="avatar-title bg-primary rounded-circle">
                                <i className="mdi mdi-source-commit-next-local"></i>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-15 mb-1 fw-semibold">
                                Trip Completed
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3}>
            <Card>
              <CardHeader>
                <div className="d-flex">
                  <h5 className="card-title flex-grow-1 mb-0">
                    <i className="ri-taxi-line align-middle me-1 text-muted"></i>
                    Vehicle Details
                  </h5>
                  <div className="flex-shrink-0">
                    <Link to="#" className="badge badge-soft-primary fs-11">
                      <span className="fs-5">+</span> Add
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="text-center">
                  <img
                    src={suv}
                    style={{ width: "80px", height: "80px" }}
                  ></img>
                  <br />
                  <span className="badge badge-outline-dark fs-6">
                    SAR 6582
                  </span>
                  <p>
                    <span className="text-muted mb-0">Ford </span>
                    <span className="fw-bold">
                      {" "}
                      EXPEDITION 3.5 ECO TIMBERLINE
                    </span>
                  </p>
                  <p className="text-muted mb-0">
                    2022 STAR WHITE METALLIC TRI-COAT
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="d-flex">
                  <h5 className="card-title flex-grow-1 mb-0">
                  <i className="ri-steering-2-line align-middle me-1 text-muted"></i>
                    Driver Details
                  </h5>
                  <div className="flex-shrink-0">
                    <Link to="#" className="badge badge-soft-primary fs-11">
                      <span className="fs-5">+</span> Add
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled mb-0 vstack gap-3">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar3}
                          alt=""
                          className="avatar-sm rounded"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="fs-14 mb-1">Joseph Parkers</h6>
                        <p className="text-muted mb-0">South Africa</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                    +(256) 245451 441
                  </li>
                  <li>
                    <i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                    josephparker@gmail.com
                  </li>
                  <li>
                    <i className="ri-message-3-line me-2 align-middle text-muted fs-16"></i>
                    English, Arabic
                  </li>
                  <li>
                    <i className="ri-sticky-note-line me-2 align-middle text-muted fs-16"></i>
                    Driver notes to be shown here
                  </li>
                  
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingDetails;
