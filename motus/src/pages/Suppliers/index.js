import React, { useEffect, useState, useCallback } from "react";
//Import Flatepicker
import Flatpickr from "react-flatpickr";

// Import Images
import multiUser from "../../assets/images/users/multi-user.jpg";
//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";

import Img1 from "../../assets/images/companies/img-1.png";
import Img4 from "../../assets/images/small/img-4.jpg";
import Img9 from "../../assets/images/small/img-9.jpg";
import smallImage9 from "../../assets/images/small/img-9.jpg";
import dummyImage from "../../assets/images/users/user-dummy-img.jpg";
import userdummyimg from "../../assets/images/users/user-dummy-img.jpg";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  CardBody,
  CardHeader,
  Container,
  Card,
  Row,
  Col,
  Input,
  FormFeedback,
  ModalHeader,
  Modal,
  ModalFooter,
  Button,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ModalBody,
  Offcanvas,
  OffcanvasBody,
  ListGroup,
  ListGroupItem,
  OffcanvasHeader,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
  Form,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import Select from "react-select";

//Import actions
import {
  getCompanies as onGetCompanies,
  addNewCompanies as onAddNewCompanies,
  updateCompanies as onUpdateCompanies,
  deleteCompanies as onDeleteCompanies,
} from "../../store/actions";

import * as Yup from "yup";
import { useFormik } from "formik";

import DeleteModal from "../../Components/Common/DeleteModal";

//Import actions
import {
  getContacts as onGetContacts,
  addNewContact as onAddNewContact,
  updateContact as onUpdateContact,
  deleteContact as onDeleteContact,
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
// Import actions
import { getSellers as onGetSellers } from "../../store/ecommerce/action";
import SupplierChats from "./supplierChat";

const Suppliers = (cellProps) => {
  const dispatch = useDispatch();
  const [sellerList, setSellerList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [companyType, setcompanyType] = useState(null);

  const industrytype = [
    {
      options: [
        { label: "Select industry type", value: "Select industry type" },
        { label: "Computer Industry", value: "Computer Industry" },
        { label: "Chemical Industries", value: "Chemical Industries" },
        { label: "Health Services", value: "Health Services" },
        {
          label: "Telecommunications Services",
          value: "Telecommunications Services",
        },
        {
          label: "Textiles: Clothing, Footwear",
          value: "Textiles: Clothing, Footwear",
        },
      ],
    },
  ];

  const { sellers } = useSelector((state) => ({
    sellers: state.Ecommerce.sellers,
  }));

  useEffect(() => {
    setSellerList(sellers);
  }, [sellers]);

  useEffect(() => {
    dispatch(onGetSellers());
  }, [dispatch]);

  useEffect(() => {
    if (!isEmpty(sellers)) setSellerList(sellers);
  }, [sellers]);

  const toggle = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const toggle2 = () => {
    if (modal2) {
      setModal2(false);
    } else {
      setModal2(true);
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const [isEdit2, setIsEdit2] = useState(false);
  const [company, setCompany] = useState([]);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      // img: (company && company.img) || '',
      name: (company && company.name) || "",
      owner: (company && company.owner) || "",
      industry_type: (company && company.industry_type) || "",
      star_value: (company && company.star_value) || "",
      location: (company && company.location) || "",
      employee: (company && company.employee) || "",
      website: (company && company.website) || "",
      contact_email: (company && company.contact_email) || "",
      since: (company && company.since) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Company Name"),
      desig: Yup.string().required("Please Enter Designation"),
      email: Yup.string().required("Please Enter your Email"),
      contact: Yup.string().required("Please Enter your Contact number"),
      owner: Yup.string().required("Please Enter Owner name"),
      industry_type: Yup.string().required("Please Enter Industry Type"),
      star_value: Yup.string().required("Please Enter Rating"),
      location: Yup.string().required("Please Enter Location"),
      employee: Yup.string().required("Please Enter Employee"),
      website: Yup.string().required("Please Enter Website"),
      contact_email: Yup.string().required("Please Enter Contact Email"),
      since: Yup.string().required("Please Enter Since"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateCompany = {
          _id: company ? company._id : 0,
          // img: values.img,
          name: values.name,
          owner: values.owner,
          industry_type: values.industry_type,
          star_value: values.star_value,
          location: values.location,
          employee: values.employee,
          website: values.website,
          contact_email: values.contact_email,
          since: values.since,
        };
        // update Company
        dispatch(onUpdateCompanies(updateCompany));
        validation.resetForm();
      } else {
        const newCompany = {
          _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          // img: values["img"],
          name: values["name"],
          owner: values["owner"],
          industry_type: values["industry_type"],
          star_value: values["star_value"],
          location: values["location"],
          employee: values["employee"],
          website: values["website"],
          contact_email: values["contact_email"],
          since: values["since"],
        };
        // save new Company
        dispatch(onAddNewCompanies(newCompany));
        validation.resetForm();
      }
      toggle();
    },
  });

  //Tab
  const [activeTab, setActiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const companytypes = [
    {
      options: [
        { label: "Select type", value: "Select type" },
        { label: "All", value: "All" },
        { label: "Merchandising", value: "Merchandising" },
        { label: "Manufacturing", value: "Manufacturing" },
        { label: "Partnership", value: "Partnership" },
        { label: "Corporation", value: "Corporation" },
      ],
    },
  ];

  function handlecompanyType(companyType) {
    setcompanyType(companyType);
  }

  const category = (e) => {
    if (e === "All") {
      var filter = sellers.filter((item) => item.category !== e);
    } else {
      filter = sellers.filter((item) => item.category === e);
    }
    setSellerList(filter);
  };

  // Update Data
  const handleContactClick = useCallback(
    (arg) => {
      const contact = arg;

      setContact({
        _id: contact._id,
        // img: contact.img,
        name: contact.name,
        company: contact.company,
        email: contact.email,
        designation: contact.designation,
        phone: contact.phone,
        lead_score: contact.lead_score,
        last_contacted: contact.date,
        // time: contact.time,
        tags: contact.tags,
      });

      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  const handleTeamClicks = () => {
    // setTeamMem("");
    setModal2(!modal2);
    setIsEdit2(false);
    toggle2();
  };

  const [contact, setContact] = useState([]);

  //delete Conatct
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  // SideBar Contact Deatail
  const [info, setInfo] = useState([]);

  // Delete Data
  const handleDeleteContact = () => {
    if (contact) {
      dispatch(onDeleteContact(contact._id));
      setDeleteModal(false);
    }
  };

  const onClickDelete = (contact) => {
    setContact(contact);
    setDeleteModal(true);
  };

  // Add Data
  const handleContactClicks = () => {
    setContact("");
    setIsEdit(false);
    toggle();
  };

  const [isRight2, setisRight2] = useState(false);

  const toggleRightCanvas2 = () => {
    setisRight2(!isRight2);
  };

  const actionColumn = {
    Header: "Action",
    Cell: ({ row }) => (
      <ul className="list-inline hstack d-flex justify-content-end gap-2">
        <li className="list-inline-item edit" title="Call">
          <button type="button" className="btn avatar-xs p-0 favourite-btn">
            <span className="avatar-title bg-transparent fs-15">
              <i className="ri-star-fill"></i>
            </span>
          </button>
        </li>
        <li className="list-inline-item">
          <UncontrolledDropdown>
            <DropdownToggle
              href="#"
              className="btn-soft-primary btn-sm dropdown"
              tag="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem
                className="dropdown-item"
                href="#"
                onClick={() => {
                  const contactData = row.original;
                  setInfo(contactData);
                }}
              >
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                View
              </DropdownItem>
              <DropdownItem
                className="dropdown-item edit-item-btn"
                href="#"
                onClick={() => {
                  const contactData = row.original;
                  handleContactClick(contactData);
                }}
              >
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                Edit
              </DropdownItem>
              <DropdownItem
                className="dropdown-item remove-item-btn"
                href="#"
                onClick={() => {
                  const contactData = row.original;
                  onClickDelete(contactData);
                }}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
      </ul>
    ),
  };

  document.title = "Sellers | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={handleDeleteContact}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <BreadCrumb title="Suppliers List" pageTitle="Suppliers" />
          <Card>
            <CardHeader className="border-0 rounded">
              <div className="d-lg-flex justify-content-between">
                <div className="d-flex align-items-center mt-2">
                  <Col sm={12} lg={12}>
                    <div className="hstack gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setModal(true);
                        }}
                      >
                        <i className="ri-add-fill me-1 align-bottom"></i> Add
                        Seller
                      </button>
                    </div>
                  </Col>
                </div>
                <div className="d-flex align-items-center">
                  <Col lg={12} className="mt-2">
                    <div className="search-box">
                      <Input
                        type="text"
                        className="form-control search"
                        placeholder="Search..."
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </Col>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Row className="mt-4">
            {sellerList.map((seller, key) => (
              <React.Fragment key={key}>
                <Col lg={4}>
                  <Card className="ribbon-box right overflow-hidden">
                    <CardBody className="text-center p-4">
                      {actionColumn.Cell({ row: { original: seller } })}{" "}
                      <img src={seller.img} alt="" height="45" />
                      <h5 className="mb-1 mt-4">
                        <Link to="" className="text-dark">
                          {seller.label}
                        </Link>
                      </h5>
                      <div className="d-flex flex-column gap-2">
                        <div>
                          <Col lg={12}>
                            <div className="d-flex gap-2">
                              <div className="avatar-xxs">
                                <div className="avatar-title fs-16 rounded-circle bg-soft-success text-success">
                                  <i className="ri-map-2-line fs-10 p-2"></i>
                                </div>
                              </div>
                              <span className="fs-13 text-start">
                                McLaren Technology Centre,Chertsey
                                Road,Woking,Surrey GU21 4YH.
                              </span>
                            </div>
                          </Col>
                        </div>
                        <div>
                          <Col lg={12}>
                            <div className="d-flex gap-2">
                              <div className="avatar-xxs">
                                <div className="avatar-title fs-16 rounded-circle bg-soft-success text-success">
                                  <i className="ri-mail-line fs-10 p-2"></i>
                                </div>
                              </div>
                              <span className="fs-14">youremail@mail.com</span>
                            </div>
                          </Col>
                        </div>
                        <div>
                          <Col lg={12}>
                            <div className="d-flex gap-2">
                              <div className="avatar-xxs">
                                <div className="avatar-title fs-16 rounded-circle bg-soft-success text-success">
                                  <i className="ri-phone-line fs-10 p-2"></i>
                                </div>
                              </div>
                              <span className="fs-14">0123456789</span>
                            </div>
                          </Col>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex mt-2">
                          <p className="mt-2">Team:</p>
                          <div className="avatar-group ms-2 fs-7">
                            <Link
                              to="#"
                              className="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              title="Brent Gonzalez"
                            >
                              <div className="avatar-xs">
                                <img
                                  src={avatar3}
                                  alt=""
                                  className="rounded-circle img-fluid"
                                />
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              title="Sylvia Wright"
                            >
                              <div className="avatar-xs">
                                <div className="avatar-title rounded-circle text-bg-primary">
                                  S
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              title="Ellen Smith"
                            >
                              <div className="avatar-xs">
                                <img
                                  src={avatar4}
                                  alt=""
                                  className="rounded-circle img-fluid"
                                />
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-placement="top"
                              title="Add Members"
                              onClick={() => handleTeamClicks()}
                            >
                              <div
                                className="avatar-xs"
                                data-bs-toggle="modal"
                                data-bs-target="#inviteMembersModal"
                              >
                                <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                  +
                                </div>
                              </div>
                            </Link>
                          </div>

                          <div
                            className="modal fade"
                            id="addmembers"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <Modal isOpen={modal2} toggle={toggle2} centered>
                                <ModalBody>
                                  <Form
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      validation.handleSubmit();
                                      return false;
                                    }}
                                  >
                                    <Row>
                                      <Col lg={12}>
                                        <input
                                          type="hidden"
                                          id="memberid-input"
                                          className="form-control"
                                          defaultValue=""
                                        />
                                        <div className="px-1 pt-1">
                                          <div className="modal-team-cover position-relative mb-0 mt-n4 mx-n4 rounded-top overflow-hidden">
                                            <img
                                              src={smallImage9}
                                              alt=""
                                              id="cover-img"
                                              className="img-fluid"
                                            />

                                            <div className="d-flex position-absolute start-0 end-0 top-0 p-3">
                                              <div className="flex-grow-1">
                                                <h5
                                                  className="modal-title text-white"
                                                  id="createMemberLabel"
                                                >
                                                  {!isEdit2
                                                    ? "Add New Members"
                                                    : "Edit Member"}
                                                </h5>
                                              </div>
                                              <div className="flex-shrink-0">
                                                <div className="d-flex gap-3 align-items-center">
                                                  <div>
                                                    <label
                                                      htmlFor="cover-image-input"
                                                      className="mb-0"
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Select Cover Image"
                                                    >
                                                      <div className="avatar-xs">
                                                        <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                          <i className="ri-image-fill"></i>
                                                        </div>
                                                      </div>
                                                    </label>
                                                    <input
                                                      className="form-control d-none"
                                                      defaultValue=""
                                                      id="cover-image-input"
                                                      type="file"
                                                      accept="image/png, image/gif, image/jpeg"
                                                    />
                                                  </div>
                                                  <button
                                                    type="button"
                                                    className="btn-close btn-close-white"
                                                    id="createMemberBtn-close"
                                                    data-bs-dismiss="modal"
                                                    onClick={() =>
                                                      setModal2(false)
                                                    }
                                                    aria-label="Close"
                                                  ></button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center mb-4 mt-n5 pt-2">
                                          <div className="position-relative d-inline-block">
                                            <div className="position-absolute bottom-0 end-0">
                                              <label
                                                htmlFor="member-image-input"
                                                className="mb-0"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="right"
                                                title="Select Member Image"
                                              >
                                                <div className="avatar-xs">
                                                  <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                    <i className="ri-image-fill"></i>
                                                  </div>
                                                </div>
                                              </label>
                                              <input
                                                className="form-control d-none"
                                                defaultValue=""
                                                id="member-image-input"
                                                type="file"
                                                accept="image/png, image/gif, image/jpeg"
                                              />
                                            </div>
                                            <div className="avatar-lg">
                                              <div className="avatar-title bg-light rounded-circle">
                                                <img
                                                  src={userdummyimg}
                                                  alt=" "
                                                  id="member-img"
                                                  className="avatar-md rounded-circle h-auto"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="d-flex gap-2">
                                          <div>
                                            <Col lg={12}>
                                              <div className="mb-3">
                                                <Label
                                                  htmlFor="teammembersName"
                                                  className="form-label"
                                                >
                                                  Name
                                                </Label>
                                                <Input
                                                  type="text"
                                                  className="form-control"
                                                  id="teammembersName"
                                                  placeholder="Enter name"
                                                  name="name"
                                                  validate={{
                                                    required: { value: true },
                                                  }}
                                                  onChange={
                                                    validation.handleChange
                                                  }
                                                  onBlur={validation.handleBlur}
                                                  value={
                                                    validation.values.name || ""
                                                  }
                                                  invalid={
                                                    validation.touched.name &&
                                                    validation.errors.name
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                {validation.touched.name &&
                                                validation.errors.name ? (
                                                  <FormFeedback type="invalid">
                                                    {validation.errors.name}
                                                  </FormFeedback>
                                                ) : null}
                                              </div>
                                            </Col>
                                          </div>
                                          <div>
                                            <Col lg={12}>
                                              <div className="mb-3">
                                                <Label
                                                  htmlFor="teammembersDesig"
                                                  className="form-label"
                                                >
                                                  Designation
                                                </Label>
                                                <Input
                                                  type="text"
                                                  className="form-control"
                                                  id="teammembersDesig"
                                                  placeholder="Enter Designation"
                                                  name="desig"
                                                  validate={{
                                                    required: { value: true },
                                                  }}
                                                  onChange={
                                                    validation.handleChange
                                                  }
                                                  onBlur={validation.handleBlur}
                                                  value={
                                                    validation.values.desig ||
                                                    ""
                                                  }
                                                  invalid={
                                                    validation.touched.desig &&
                                                    validation.errors.desig
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                {validation.touched.desig &&
                                                validation.errors.desig ? (
                                                  <FormFeedback type="invalid">
                                                    {validation.errors.desig}
                                                  </FormFeedback>
                                                ) : null}
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col lg={12}>
                                        <div className="d-flex gap-2">
                                          <div>
                                            <Col lg={12}>
                                              <div className="mb-3">
                                                <Label
                                                  htmlFor="teammembersEmail"
                                                  className="form-label"
                                                >
                                                  Email ID
                                                </Label>
                                                <Input
                                                  type="email"
                                                  className="form-control"
                                                  id="teammembersEmail"
                                                  placeholder="Enter email"
                                                  name="email"
                                                  validate={{
                                                    required: { value: true },
                                                  }}
                                                  onChange={
                                                    validation.handleChange
                                                  }
                                                  onBlur={validation.handleBlur}
                                                  value={
                                                    validation.values.email ||
                                                    ""
                                                  }
                                                  invalid={
                                                    validation.touched.email &&
                                                    validation.errors.email
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                {validation.touched.email &&
                                                validation.errors.email ? (
                                                  <FormFeedback type="invalid">
                                                    {validation.errors.email}
                                                  </FormFeedback>
                                                ) : null}
                                              </div>
                                            </Col>
                                          </div>
                                          <div>
                                            <Col lg={12}>
                                              <div className="mb-3">
                                                <Label
                                                  htmlFor="teammembersContact"
                                                  className="form-label"
                                                >
                                                  Contact
                                                </Label>
                                                <Input
                                                  type="text"
                                                  className="form-control"
                                                  id="teammembersContact"
                                                  placeholder="Enter phone no"
                                                  name="contact"
                                                  validate={{
                                                    required: { value: true },
                                                  }}
                                                  onChange={
                                                    validation.handleChange
                                                  }
                                                  onBlur={validation.handleBlur}
                                                  value={
                                                    validation.values.contact ||
                                                    ""
                                                  }
                                                  invalid={
                                                    validation.touched
                                                      .contact &&
                                                    validation.errors.contact
                                                      ? true
                                                      : false
                                                  }
                                                />
                                                {validation.touched.contact &&
                                                validation.errors.contact ? (
                                                  <FormFeedback type="invalid">
                                                    {validation.errors.contact}
                                                  </FormFeedback>
                                                ) : null}
                                              </div>
                                            </Col>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col lg={12}>
                                        <div className="hstack gap-2 justify-content-end">
                                          <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={() => setModal2(false)}
                                          >
                                            Close
                                          </button>
                                          <button
                                            type="submit"
                                            className="btn btn-primary"
                                            id="addNewMember"
                                          >
                                            {!isEdit2 ? "Add Member" : "Save"}
                                          </button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Form>
                                </ModalBody>
                              </Modal>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="mt-3">
                          <Link onClick={toggleRightCanvas2}>View all</Link>
                        </div>
                        <Offcanvas
                          isOpen={isRight2}
                          direction="end"
                          toggle={toggleRightCanvas2}
                          id="offcanvasRight"
                          className="border-bottom"
                        >
                          <OffcanvasBody className="offcanvas-body profile-offcanvas p-0">
                            <div className="team-cover">
                              <img src={Img4} alt="" className="img-fluid" />
                            </div>
                            <div className="p-1 pb-4 pt-0">
                              <div className="team-settings">
                                <div className="row g-0">
                                  <div className="d-flex justify-content-between w-100">
                                    <div className="p-2">
                                      <h5
                                        id="offcanvasRightLabel"
                                        className="text-white"
                                      >
                                        View All Members
                                      </h5>
                                    </div>
                                    <div>
                                      <div className="btn nav-btn">
                                        <Button
                                          onClick={toggleRightCanvas2}
                                          color=""
                                          className="btn-close btn-close-white"
                                        ></Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 text-center">
                              <img
                                src={Img1}
                                alt=""
                                className="avatar-lg img-thumbnail rounded-circle mx-auto profile-img"
                              />
                              <div className="mt-3">
                                <h5 className="fs-16 mb-1">
                                  <Link
                                    to="#"
                                    className="link-primary username"
                                  >
                                    Company name
                                  </Link>
                                </h5>
                              </div>
                              <div className="d-flex gap-2 justify-content-center">
                                <button
                                  type="button"
                                  className="btn avatar-xs p-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Message"
                                >
                                  <span className="avatar-title rounded bg-light text-body">
                                    <i className="ri-question-answer-line"></i>
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  className="btn avatar-xs p-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Favourite"
                                >
                                  <span className="avatar-title rounded bg-light text-body">
                                    <i className="ri-star-line"></i>
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  className="btn avatar-xs p-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Phone"
                                >
                                  <span className="avatar-title rounded bg-light text-body">
                                    <i className="ri-phone-line"></i>
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div>
                            <h5 className="fs-15 ms-2 ps-2 mb-3">Members List</h5>
                              <ListGroup>
                                <ListGroupItem disabled>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <img
                                        src={avatar1}
                                        alt=""
                                        className="avatar-xs rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      Member name <br /> Formula 1 Member <br />
                                      youremail@mail.com
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      0123456789
                                    </div>
                                  </div>
                                </ListGroupItem>
                                <ListGroupItem disabled>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <img
                                        src={avatar2}
                                        alt=""
                                        className="avatar-xs rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      Member name <br /> Formula 1 Member <br />
                                      youremail@mail.com
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      0123456789
                                    </div>
                                  </div>
                                </ListGroupItem>
                                <ListGroupItem disabled>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <img
                                        src={avatar3}
                                        alt=""
                                        className="avatar-xs rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      Member name <br /> Formula 1 Member <br />
                                      youremail@mail.com
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      0123456789
                                    </div>
                                  </div>
                                </ListGroupItem>
                                <ListGroupItem disabled>
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <img
                                        src={avatar3}
                                        alt=""
                                        className="avatar-xs rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      Member name <br /> Formula 1 Member <br />
                                      youremail@mail.com
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                      0123456789
                                    </div>
                                  </div>
                                </ListGroupItem>
                              </ListGroup>
                            </div>
                          </OffcanvasBody>
                        </Offcanvas>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <div>
                          <Col className="border-end-dashed border-end">
                            <h5>{seller.events}</h5>
                            <span className="text-muted">Events</span>
                          </Col>
                        </div>
                        <div>
                          <Col>
                            <h5>{seller.bookings}</h5>
                            <span className="text-muted">Bookings</span>
                          </Col>
                        </div>
                        <div>
                          <Col className="border-end-dashed border-end">
                            <h5>{seller.vehicles}</h5>
                            <span className="text-muted">Vehicles</span>
                          </Col>
                        </div>
                        <div>
                          <Col>
                            <h5>{seller.drivers}</h5>
                            <span className="text-muted">Drivers</span>
                          </Col>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </React.Fragment>
            ))}
          </Row>

          <Row className="g-0 text-center text-sm-start align-items-center mb-3">
            <Col sm={6}>
              <div>
                <p className="mb-sm-0">Showing 1 to 8 of 12 entries</p>
              </div>
            </Col>
            <Col sm={6}>
              <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <li className="page-item disabled">
                  {" "}
                  <Link to="#" className="page-link">
                    <i className="mdi mdi-chevron-left"></i>
                  </Link>{" "}
                </li>
                <li className="page-item active">
                  {" "}
                  <Link to="#" className="page-link">
                    1
                  </Link>{" "}
                </li>
                <li className="page-item ">
                  {" "}
                  <Link to="#" className="page-link">
                    2
                  </Link>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <Link to="#" className="page-link">
                    3
                  </Link>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <Link to="#" className="page-link">
                    4
                  </Link>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <Link to="#" className="page-link">
                    5
                  </Link>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <Link to="#" className="page-link">
                    <i className="mdi mdi-chevron-right"></i>
                  </Link>{" "}
                </li>
              </ul>
            </Col>
          </Row>

          <Modal
            className="zoomIn"
            id="addSeller"
            size="md"
            isOpen={modal}
            toggle={toggle}
            centered
          >
            <ModalHeader toggle={toggle}>Add Supplier</ModalHeader>
            <Row className="g-3 p-4">
              <Col lg={12}>
                <div className="text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-absolute bottom-0 end-0">
                      <Label htmlFor="company-logo-input" className="mb-0">
                        <div className="avatar-xs cursor-pointer">
                          <div className="avatar-title bg-light border rounded-circle text-muted">
                            <i className="ri-image-fill"></i>
                          </div>
                        </div>
                      </Label>
                      <Input
                        name="img"
                        className="form-control d-none"
                        id="company-logo-input"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.img || ""}
                        invalid={
                          validation.touched.img && validation.errors.img
                            ? true
                            : false
                        }
                      />
                    </div>
                    <div className="avatar-lg p-1">
                      <div className="avatar-title bg-light rounded-circle">
                        <img
                          src={multiUser}
                          alt="multiUser"
                          id="companylogo-img"
                          className="avatar-md rounded-circle object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h5 className="fs-13 mt-3">Company Logo</h5>
                </div>
              </Col>

              <Col lg={12}>
                <div>
                  <Label htmlFor="name-field" className="form-label">
                    Name
                  </Label>

                  <Input
                    name="name"
                    id="customername-field"
                    className="form-control"
                    placeholder="Enter Company Name"
                    type="text"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                    invalid={
                      validation.touched.name && validation.errors.name
                        ? true
                        : false
                    }
                  />
                  {validation.touched.name && validation.errors.name ? (
                    <FormFeedback type="invalid">
                      {validation.errors.name}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <Label htmlFor="name-field" className="form-label">
                    Address
                  </Label>

                  <Input
                    name="name"
                    id="customername-field"
                    className="form-control"
                    placeholder="Enter Address"
                    type="text"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                    invalid={
                      validation.touched.name && validation.errors.name
                        ? true
                        : false
                    }
                  />
                  {validation.touched.name && validation.errors.name ? (
                    <FormFeedback type="invalid">
                      {validation.errors.name}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>

              <Col lg={6}>
                <div>
                  <Label htmlFor="contact_email-field" className="form-label">
                    Email
                  </Label>
                  <Input
                    name="contact_email"
                    id="contact_email-field"
                    className="form-control"
                    placeholder="Enter email"
                    type="text"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.contact_email || ""}
                    invalid={
                      validation.touched.contact_email &&
                      validation.errors.contact_email
                        ? true
                        : false
                    }
                  />
                  {validation.touched.contact_email &&
                  validation.errors.contact_email ? (
                    <FormFeedback type="invalid">
                      {validation.errors.contact_email}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <Label htmlFor="website-field" className="form-label">
                    Contact
                  </Label>
                  <Input
                    name="website"
                    id="website-field"
                    className="form-control"
                    placeholder="Enter Contact Number"
                    type="text"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.website || ""}
                    invalid={
                      validation.touched.website && validation.errors.website
                        ? true
                        : false
                    }
                  />
                  {validation.touched.website && validation.errors.website ? (
                    <FormFeedback type="invalid">
                      {validation.errors.website}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
            </Row>
            <ModalFooter>
              <div className="hstack gap-2 justify-content-end">
                <Button
                  color="light"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  {" "}
                  Close{" "}
                </Button>
                <Button type="submit" color="success" id="add-btn">
                  {" "}
                  {!!isEdit ? "Update" : "Add Supplier"}{" "}
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Suppliers;
