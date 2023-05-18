import React from "react";
import { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import {
  Card,
  CardBody,
  Col,
  Input,
  Label,
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

function BookRide() {
  const [customverticalTab, setcustomverticalTab] = useState("1");
  const customtoggleVertical = (tab) => {
    if (customverticalTab !== tab) {
      setcustomverticalTab(tab);
    }
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
                  </Col>
                  <Col lg={9}>
                    <TabContent
                      activeTab={customverticalTab}
                      className="text-muted mt-3 mt-lg-0"
                    >
                      <TabPane tabId="1" id="custom-v-pills-home">
                        <div className="my-3">
                          <div className="form-check form-check-inline">
                            <Input
                              id="credit"
                              name="paymentMethod"
                              type="radio"
                              className="form-check-input"
                              defaultChecked
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
                            <Label className="form-check-label" htmlFor="debit">
                              Two Way
                            </Label>
                          </div>
                          <br />
                          <Row className="my-3">
                            <Col lg={6}>
                              <label htmlFor="">
                                Select the pickup location
                              </label>
                              <select
                                className="form-select mb-3"
                                aria-label="Default select example"
                              >
                                <option>Choose...</option>
                                <option value="1">Declined Payment</option>
                                <option value="2">Delivery Error</option>
                                <option value="3">Wrong Amount</option>
                              </select>
                            </Col>
                            <Col lg={6}>
                              <label htmlFor="">
                                Select the dropoff location
                              </label>
                              <select
                                className="form-select mb-3"
                                aria-label="Default select example"
                              >
                                <option>Choose...</option>
                                <option value="1">Declined Payment</option>
                                <option value="2">Delivery Error</option>
                                <option value="3">Wrong Amount</option>
                              </select>
                            </Col>
                            <Col lg={4}>
                              <div>
                                <Label className="form-label">
                                  Pickup Date
                                </Label>
                                <Flatpickr
                                  className="form-control"
                                  options={{
                                    dateFormat: "d M, Y",
                                  }}
                                />
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div>
                                <Label className="form-label">
                                  Pickup Time
                                </Label>
                                <Flatpickr
                                  className="form-control"
                                  options={{
                                    enableTime: true,
                                    noCalendar: true,
                                    dateFormat: "H:i",
                                    time_24hr: true,
                                  }}
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
                            <div className="d-flex flex-wrap gap-2 my-4">
                              <Button className="btn btn-soft-primary waves-effect waves-light" outline>
                                {" "}
                                Add Stops{" "}
                              </Button>
                              <Button className="btn btn-soft-info waves-effect waves-light" outline>
                                {" "}
                                Add Notes{" "}
                              </Button>
                              <Button className="btn btn-soft-secondary waves-effect waves-light" outline>
                                {" "}
                                Passenger Details{" "}
                              </Button>
                            </div>
                          </Row>
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
