import React from "react";
import { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
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
            <p className="text-muted">
              Use <code>custom-verti-nav-pills</code> class to create custom
              vertical tabs.
            </p>
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
                      <i className="ri-home-4-line d-block fs-20 mb-1"></i>
                      Home
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
                      <i className="ri-user-2-line d-block fs-20 mb-1"></i>
                      Profile
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
                      <i className="ri-mail-line d-block fs-20 mb-1"></i>
                      Messages
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
                    <div className="d-flex mb-4">
                      <div className="flex-shrink-0">
                        <img
                          src={img4}
                          alt=""
                          width="150"
                          className="rounded"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p className="mb-0">
                          Experiment and play around with the fonts that you
                          already have in the software you’re working with
                          reputable font websites. commodo enim craft beer
                          mlkshk aliquip jean shorts ullamco ad vinyl cillum
                          PBR. Homo nostrud organic, assumenda labore aesthetic
                          magna delectus.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-grow-1 me-3">
                        <p className="mb-0">
                          Always want to make sure that your fonts work well
                          together and try to limit the number of fonts you use
                          to three or less. Experiment and play around with the
                          fonts that you already have in the software you’re
                          working with reputable font websites.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          src={img5}
                          alt=""
                          width="150"
                          className="rounded"
                        />
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
                          create a certain artistic effect. It can also help you
                          fix fonts that are poorly spaced to begin with. A
                          wonderful serenity has taken possession of my entire
                          soul, like these sweet mornings of spring which I
                          enjoy with my whole heart.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-grow-1 me-3">
                        <p className="mb-0">
                          Each design is a new, unique piece of art birthed into
                          this world, and while you have the opportunity to be
                          creative and make your own style choices. For that
                          very reason, I went on a quest and spoke to many
                          different professional graphic designers.
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
                          keffiyeh etsy art party before they sold out master
                          cleanse gluten-free squid scenester freegan cosby
                          sweater. Fanny pack portland seitan DIY, art party
                          locavore wolf cliche high life echo park Austin. Cred
                          vinyl keffiyeh DIY salvia PBR.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-grow-1 me-3">
                        <p className="mb-0">
                          They all have something to say beyond the words on the
                          page. They can come across as casual or neutral,
                          exotic or graphic. That's why it's important to think
                          about your message, then choose a font that fits.
                          Cosby sweater eu banh mi, qui irure terry richardson
                          ex squid.
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
