import React, { useState } from "react";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";

import {
  Container,
  Form,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";


import Select from "react-select";
import classnames from "classnames";
import { orderSummary } from "../../common/data/ecommerce";
import { Link } from "react-router-dom";
import SupplierBox from "./SupplierBox";
import TransportationOptions from "./TransportationOptions";
import VehicleTypes from "./VehicleTypes";
import TimePolicy from "./TimePolicy";

const EventConfig = () => {
  const [selectedCountry, setselectedCountry] = useState(null);
  const [selectedState, setselectedState] = useState(null);
  const [activeTab, setactiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [modal, setModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);

  const toggledeletemodal = () => {
    setDeleteModal(!deletemodal);
  };

  const togglemodal = () => {
    setModal(!modal);
  };

  function handleSelectCountry(selectedCountry) {
    setselectedCountry(selectedCountry);
  }

  function handleSelectState(selectedState) {
    setselectedState(selectedState);
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 5) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  const productState = [
    {
      options: [
        { label: "Select State...", value: "Select State" },
        { label: "Alabama", value: "Alabama" },
        { label: "Alaska", value: "Alaska" },
        { label: "American Samoa", value: "American Samoa" },
        { label: "California", value: "California" },
        { label: "Colorado", value: "Colorado" },
        { label: "District Of Columbia", value: "District Of Columbia" },
        { label: "Florida", value: "Florida" },
        { label: "Georgia", value: "Georgia" },
        { label: "Guam", value: "Guam" },
        { label: "Hawaii", value: "Hawaii" },
        { label: "Idaho", value: "Idaho" },
        { label: "Kansas", value: "Kansas" },
        { label: "Louisiana", value: "Louisiana" },
        { label: "Montana", value: "Montana" },
        { label: "Nevada", value: "Nevada" },
        { label: "New Jersey", value: "New Jersey" },
        { label: "New Mexico", value: "New Mexico" },
        { label: "New York", value: "New York" },
      ],
    },
  ];

  const productCountry = [
    {
      options: [
        { label: "Select Country...", value: "Select Country" },
        { label: "United States", value: "United States" },
      ],
    },
  ];

  document.title = "Checkout | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Event Configuration" pageTitle="Events" />

          <Row>
            <Col xl="8">
              <Card>
                <CardBody className="checkout-tab">
                  <Form action="#">
                    <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                      <Nav
                        className="nav-pills nav-justified custom-nav"
                        role="tablist"
                      >
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 1,
                                done: activeTab <= 5 && activeTab >= 0,
                              },
                              "fs-12 p-3"
                            )}
                            onClick={() => {
                              toggleTab(1);
                            }}
                          >
                            <i className="ri-user-shared-line fs-10 p-1 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Suppliers
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 2,
                                done: activeTab <= 5 && activeTab > 1,
                              },
                              "fs-12 p-3"
                            )}
                            onClick={() => {
                              toggleTab(2);
                            }}
                          >
                            <i className="ri-map-line fs-10 p-1 bg-soft-primary text-primary rounded-circle align-middle me-1"></i>
                            Event places
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 3,
                                done: activeTab <= 5 && activeTab > 2,
                              },
                              "fs-12 p-3"
                            )}
                            onClick={() => {
                              toggleTab(3);
                            }}
                          >
                            <i className="ri-flight-takeoff-line fs-10 p-1 bg-soft-primary text-primary rounded-circle align-middle me-1"></i>
                            Transfer Types
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 4,
                                done: activeTab <= 5 && activeTab > 3,
                              },
                              "fs-12 p-3"
                            )}
                            onClick={() => {
                              toggleTab(4);
                            }}
                          >
                            <i className="ri-taxi-line fs-10 p-1 bg-soft-primary text-primary rounded-circle align-middle me-1"></i>
                            Vehicle Types
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink
                            href="#"
                            className={classnames(
                              {
                                active: activeTab === 5,
                                done: activeTab <= 5 && activeTab > 4,
                              },
                              "fs-12 p-3"
                            )}
                            onClick={() => {
                              toggleTab(5);
                            }}
                          >
                            <i className="ri-time-line fs-10 p-1 bg-soft-primary text-primary rounded-circle align-middle me-1"></i>
                            Time Policies
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1} id="pills-bill-info">
                        <div>
                          <h5 className="mb-1">Suppliers</h5>
                          <p className="text-muted mb-4">
                            Please Select Suppliers
                          </p>
                        </div>

                        <div>
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
                              Is Suppliers
                            </Label>
                          </div>

                          <div className="p-2">
                            <SupplierBox />
                          </div>

                          <div className="d-flex align-items-start gap-3 mt-3">
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={() => {
                                toggleTab(activeTab + 1);
                              }}
                            >
                              <i className="ri-map-line label-icon align-middle fs-16 ms-2"></i>
                              Proceed to Event Places
                            </button>
                          </div>
                        </div>
                      </TabPane>

                      <TabPane tabId={2}>
                        <div>
                          <h5 className="mb-1">Event places</h5>
                          <p className="text-muted mb-4">
                            Please Select Event places
                          </p>
                        </div>

                        <div>
                          <div className="p-2">
                            <SupplierBox />
                          </div>

                          <div className="d-flex align-items-start gap-3 mt-4">
                            <button
                              type="button"
                              className="btn btn-light btn-label previestab"
                              onClick={() => {
                                toggleTab(activeTab - 1);
                              }}
                            >
                              <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                              Back to Suppliers
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={() => {
                                toggleTab(activeTab + 1);
                              }}
                            >
                              <i className="ri-flight-takeoff-line label-icon align-middle fs-16 ms-2"></i>
                              Proceed to Transfer Types
                            </button>
                          </div>
                        </div>
                      </TabPane>

                      <TabPane tabId={3}>
                        <TransportationOptions />
                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Event places
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-label right ms-auto nexttab"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            <i className="ri-taxi-line label-icon align-middle fs-16 ms-2"></i>
                            Continue to Vehicle Types
                          </button>
                        </div>
                      </TabPane>

                      <TabPane tabId={4}>
                        <VehicleTypes></VehicleTypes>

                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Transfer Types
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-label right ms-auto nexttab"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            <i className="ri-time-line label-icon align-middle fs-16 ms-2"></i>
                            Continue to Time Policy
                          </button>
                        </div>
                      </TabPane>

                      <TabPane tabId={5}>

                            <TimePolicy/>
                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Vehicle Types
                          </button>
                          <button
                            type="button"
                            className="btn btn-success ms-auto"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            Submit Event Configuration
                          </button>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4}>
            <Card>
            <div className="card-body">
              <Row className="mb-2">
                <Col md="12">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2 mt-2">Suppliers</h5>
                    </div>
                  </div>
                </Col>
                <Col md="12" mt="2">
                  <div className="d-flex flex-wrap gap-2 fs-16">
                    <span className="badge badge-soft-secondary">Primary</span>
                    <span className="badge badge-soft-secondary">Secondary</span>
                    <span className="badge badge-soft-secondary">Success</span>
                    <span className="badge badge-soft-secondary">Info</span>
                    <span className="badge badge-soft-secondary">Warning</span>
                    <span className="badge badge-soft-secondary">Danger</span>
                    <span className="badge badge-soft-secondary">Dark</span>
                    <span className="badge badge-soft-secondary">Light</span>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md="12">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2 mt-2">Event Places</h5>
                    </div>
                  </div>
                </Col>
                <Col md="12" mt="2">
                  <div className="d-flex flex-wrap gap-2 fs-16">
                    <span className="badge badge-soft-danger">Primary</span>
                    <span className="badge badge-soft-danger">Secondary</span>
                    <span className="badge badge-soft-danger">Success</span>
                    <span className="badge badge-soft-danger">Info</span>
                    <span className="badge badge-soft-danger">Warning</span>
                    <span className="badge badge-soft-danger">Danger</span>
                    <span className="badge badge-soft-danger">Dark</span>
                    <span className="badge badge-soft-danger">Light</span>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md="12">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2 mt-2">Transfer types</h5>
                    </div>
                  </div>
                </Col>
                <Col md="12" mt="3">
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <tbody>
                        <tr className="bg-soft-warning">
                          <td>
                            <h5 className="fs-14">
                              <a href="apps-ecommerce-product-details.html" className="text-dark">Airport</a>
                            </h5>
                          </td>
                          <td className="text-end">One way, Two way</td>
                        </tr>
                        <tr className="bg-soft-success">
                          <td>
                            <h5 className="fs-14">
                              <a href="apps-ecommerce-product-details.html" className="text-dark">Hourly</a>
                            </h5>
                          </td>
                          <td className="text-end">2hr, 4hr, 8hr, 12hr</td>
                        </tr>
                        <tr className="bg-soft-danger">
                          <td>
                            <h5 className="fs-14">
                              <a href="apps-ecommerce-product-details.html" className="text-dark">Shuttle</a>
                            </h5>
                          </td>
                          <td className="text-end">2hr, 4hr, 8hr, 12hr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md="12">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2 mt-2">Aminities</h5>
                    </div>
                  </div>
                </Col>
                <Col md="12" mt="2">
                  <div className="d-flex flex-wrap gap-2 fs-16">
                    <div className="badge badge-soft-success">Primary</div>
                    <div className="badge badge-soft-success">Secondary</div>
                    <div className="badge badge-soft-success">Success</div>
                    <div className="badge badge-soft-success">Info</div>
                    <div className="badge badge-soft-success">Warning</div>
                    <div className="badge badge-soft-success">Danger</div>
                    <div className="badge badge-soft-success">Dark</div>
                    <div className="badge badge-soft-success">Light</div>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md="12">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2 mt-2">Selected Cars</h5>
                    </div>
                  </div>
                </Col>
                <Col md="12" mt="2">
                  <div className="d-flex flex-wrap gap-2 fs-16">
                    <div className="badge fw-medium badge-soft-primary badge-border">Kushaq</div>
                    <div className="badge fw-medium badge-soft-primary badge-border">Superb</div>
                    <div className="badge fw-medium badge-soft-primary badge-border">Octavia</div>
                    <div className="badge fw-medium badge-soft-primary badge-border">Rapid</div>
                    <div className="badge fw-medium badge-soft-primary badge-border">Polo</div>
                    <div className="badge fw-medium badge-soft-primary badge-border">Taigun</div>
                    <div className="badge fw-medium badge-soft-primary badge-border">Vento</div>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md="12">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-2 mt-2">Time Policy</h5>
                    </div>
                  </div>
                </Col>
                <Col md="12" mt="2">
                  <div className="table-responsive">
                    <table className="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Change Time :</td>
                          <td className="text-end" id="cart-subtotal">12:20 AM</td>
                        </tr>
                        <tr>
                          <td>Cancellation Time :</td>
                          <td className="text-end" id="cart-discount">1:20 PM</td>
                        </tr>
                        <tr>
                          <td>Driver Arrival :</td>
                          <td className="text-end" id="cart-shipping">09:30 AM</td>
                        </tr>
                        <tr>
                          <td>Waiting Time :</td>
                          <td className="text-end" id="cart-tax">02:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* modal Delete Address */}
      <Modal
        isOpen={deletemodal}
        role="dialog"
        autoFocus={true}
        centered
        id="removeItemModal"
        toggle={toggledeletemodal}
      >
        <ModalHeader
          toggle={() => {
            setDeleteModal(!deletemodal);
          }}
        ></ModalHeader>
        <ModalBody>
          <div className="mt-2 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop"
              colors="primary:#f7b84b,secondary:#f06548"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you Sure ?</h4>
              <p className="text-muted mx-4 mb-0">
                Are you Sure You want to Remove this Address ?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button
              type="button"
              className="btn w-sm btn-light"
              onClick={() => {
                setDeleteModal(!deletemodal);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn w-sm btn-danger"
              onClick={() => {
                setDeleteModal(!deletemodal);
              }}
            >
              Yes, Delete It!
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* modal Add Address */}
      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered
        id="addAddressModal"
        toggle={togglemodal}
      >
        <ModalHeader
          toggle={() => {
            setModal(!modal);
          }}
        >
          <h5 className="modal-title" id="addAddressModalLabel">
            Address
          </h5>
        </ModalHeader>
        <ModalBody>
          <div>
            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="addaddress-Name"
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-3">
              <Label for="addaddress-textarea" className="form-label">
                Address
              </Label>
              <textarea
                className="form-control"
                id="addaddress-textarea"
                placeholder="Enter Address"
                rows="2"
              ></textarea>
            </div>

            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Phone
              </Label>
              <Input
                type="text"
                className="form-control"
                id="addaddress-Name"
                placeholder="Enter Phone No."
              />
            </div>

            <div className="mb-3">
              <Label for="state" className="form-label">
                Address Type
              </Label>
              <select className="form-select" id="state" data-plugin="choices">
                <option value="homeAddress">Home (7am to 10pm)</option>
                <option value="officeAddress">Office (11am to 7pm)</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Save
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EventConfig;
