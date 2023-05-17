import React, { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Button,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
  FormFeedback,
  Form,
} from "reactstrap";

// Redux
import { useDispatch } from "react-redux";
import {
  addNewProduct as onAddNewProduct,
  updateProduct as onUpdateProduct,
} from "../../store/ecommerce/action";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link, useNavigate } from "react-router-dom";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";

//Import Images
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const EcommerceAddProduct = (props) => {
  document.title = "Create Product | Velzon - React Admin & Dashboard Template";

  const history = useNavigate();
  const dispatch = useDispatch();

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const [selectedVisibility, setselectedVisibility] = useState(null);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleSelectStatus(selectedStatus) {
    setselectedStatus(selectedStatus);
  }

  function handleSelectVisibility(selectedVisibility) {
    setselectedVisibility(selectedVisibility);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const productCategory = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Appliances", value: "Kitchen Storage & Containers" },
        { label: "Fashion", value: "Clothes" },
        { label: "Electronics", value: "Electronics" },
        { label: "Grocery", value: "Grocery" },
        { label: "Home & Furniture", value: "Furniture" },
        { label: "Kids", value: "Kids" },
        { label: "Mobiles", value: "Mobiles" },
      ],
    },
  ];

  const dateFormat = () => {
    let d = new Date(),
      months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    let h = d.getHours() % 12 || 12;
    let ampm = d.getHours() < 12 ? "AM" : "PM";
    return (
      d.getDate() +
      " " +
      months[d.getMonth()] +
      ", " +
      d.getFullYear() +
      ", " +
      h +
      ":" +
      d.getMinutes() +
      " " +
      ampm
    ).toString();
  };

  const [date, setDate] = useState(dateFormat());

  const dateformate = (e) => {
    const dateString = e.toString().split(" ");
    let time = dateString[4];
    let H = +time.substr(0, 2);
    let h = H % 12 || 12;
    h = h <= 9 ? (h = "0" + h) : h;
    let ampm = H < 12 ? "AM" : "PM";
    time = h + time.substr(2, 3) + " " + ampm;

    const date = dateString[2] + " " + dateString[1] + ", " + dateString[3];
    const orderDate = (date + ", " + time).toString();
    setDate(orderDate);
  };

  const productStatus = [
    {
      options: [
        { label: "ABC Events", value: "ABC Events" },
        { label: "XYZ Events", value: "XYZ Events" },
      ],
    },
  ];

  const supplierStatus = [
    {
      options: [
        { label: "Al Tayer Motors", value: "Al Tayer Motors" },
        { label: "ABC Car Rentals", value: "ABC Car Rentals" },
      ],
    },
  ];

  const productVisibility = [
    {
      options: [
        { label: "Hidden", value: "Hidden" },
        { label: "Public", value: "Public" },
      ],
    },
  ];

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: "",
      price: "",
      stock: "",
      orders: "",
      category: "",
      publishedDate: "",
      status: "",
      rating: 4.5,
      manufacturer_name: "",
      manufacturer_brand: "",
      product_discount: "",
      meta_title: "",
      meta_keyword: "",
      product_tags: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter a Product Title"),
      price: Yup.string().required("Please Enter a Product Price"),
      stock: Yup.string().required("Please Enter a Product stock"),
      orders: Yup.string().required("Please Enter a Product orders"),
      category: Yup.string().required("Please Enter a Product category"),
      status: Yup.string().required("Please Enter a Product status"),
      manufacturer_name: Yup.string().required(
        "Please Enter a Manufacturer Name"
      ),
      manufacturer_brand: Yup.string().required(
        "Please Enter a Manufacturer Brand"
      ),
      product_discount: Yup.string().required(
        "Please Enter a Product Discount"
      ),
      meta_title: Yup.string().required("Please Enter a Meta Title"),
      meta_keyword: Yup.string().required("Please Enter a Meta Keyword"),
      product_tags: Yup.string().required("Please Enter a Product Tags"),
    }),
    onSubmit: (values) => {
      const newProduct = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        name: values.name,
        price: values.price,
        stock: values.stock,
        orders: values.orders,
        category: values.category,
        publishedDate: date,
        status: values.status,
        rating: 4.5,
      };
      // save new product
      dispatch(onAddNewProduct(newProduct));
      history("/apps-ecommerce-products");
      validation.resetForm();
    },
  });
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Event" pageTitle="Events" />

        <Row>
          <Col lg={8}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Event Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter product title"
                      name="name"
                      value={validation.values.name || ""}
                      onBlur={validation.handleBlur}
                      onChange={validation.handleChange}
                      invalid={
                        validation.errors.name && validation.touched.name
                          ? true
                          : false
                      }
                    />
                    {validation.errors.name && validation.touched.name ? (
                      <FormFeedback type="invalid">
                        {validation.errors.name}
                      </FormFeedback>
                    ) : null}
                  </div>
                  <div>
                    <Col lg={12} style={{ marginBottom: "1rem" }}>
                      <div>
                        <Label htmlFor="formFile" className="form-label">
                          Thumbnail Image
                        </Label>
                        <Input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                    </Col>
                  </div>
                  <div>
                    <Label>Event Description</Label>

                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>
                      It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                    </p>
                    <ul>
                      <li>Product Design, Figma (Software), Prototype</li>
                      <li>Four Dashboards : Ecommerce, Analytics, Project etc.</li>
                      <li>Create calendar, chat and email app pages.</li>
                      <li>Add authentication pages</li>
                    </ul>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                    />
                  </div>
                  <div className="row g-4 p-2">
                    <Col xxl={3} md={6}>
                      <div>
                        <Label
                          htmlFor="placeholderInput"
                          className="form-label"
                        >
                          Event Start Date
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="placeholderInput"
                          placeholder="Enter event start date"
                        />
                      </div>
                    </Col>
                    <Col xxl={3} md={6}>
                      <div>
                        <Label
                          htmlFor="placeholderInput"
                          className="form-label"
                        >
                          Event End Date
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="placeholderInput"
                          placeholder="Enter event end date"
                        />
                      </div>
                    </Col>
                  </div>

                  <div className="row g-4 p-2">
                    <Col xxl={3} md={6}>
                      <div>
                        <Label
                          htmlFor="placeholderInput"
                          className="form-label"
                        >
                          Booking Start Date
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="placeholderInput"
                          placeholder="Enter booking start date"
                        />
                      </div>
                    </Col>
                    <Col xxl={3} md={6}>
                      <div>
                        <Label
                          htmlFor="placeholderInput"
                          className="form-label"
                        >
                          Booking End Date
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          id="placeholderInput"
                          placeholder="Enter booking end date"
                        />
                      </div>
                    </Col>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Attached files</h5>
                </CardHeader>
                <CardBody>
                  <div>
                    <p className="text-muted">Add Attached files here.</p>

                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone dz-clickable">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                            </div>
                            <h5>Drop files here or click to upload.</h5>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </CardBody>
              </Card>

              <div className="d-flex flex-wrap gap-2 justify-content-end pb-3">
                <Button color="danger"> Delete </Button>
                <Button color="primary"> Draft </Button>
                <Button color="secondary"> Create </Button>
              </div>
            </Form>
          </Col>

          <Col lg={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0" style={{ display: "inline" }}>
                  Client Details
                </h5>
                <a href="" style={{ display: "inline", float: "right" }}>
                  Add New
                </a>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    Client
                  </Label>
                  <Input
                    name="status"
                    type="select"
                    className="form-select"
                    id="choices-publish-status-input"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.status || ""}
                  >
                    {productStatus.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.options.map((item, key) => (
                          <option value={item.value} key={key}>
                            {item.label}
                          </option>
                        ))}
                      </React.Fragment>
                    ))}
                  </Input>
                  {validation.touched.status && validation.errors.status ? (
                    <FormFeedback type="invalid">
                      {validation.errors.status}
                    </FormFeedback>
                  ) : null}
                </div>
                <Label className="text-muted">ABC Events</Label>
                <p>#512, Wellington Street, Park City, Country Name</p>

                <div className="mb-3">
                  <Label htmlFor="choices-lead-input" className="form-label">
                    Login Required Users
                  </Label>
                  <select
                    className="form-select"
                    data-choices
                    data-choices-search-false
                    id="choices-lead-input"
                  >
                    <option defaultValue="Brent Gonzalez">
                      Brent Gonzalez
                    </option>
                    <option value="Darline Williams">Darline Williams</option>
                    <option value="Sylvia Wright">Sylvia Wright</option>
                    <option value="Ellen Smith">Ellen Smith</option>
                    <option value="Jeffrey Salazar">Jeffrey Salazar</option>
                    <option value="Mark Williams">Mark Williams</option>
                  </select>
                </div>

                <div>
                  <Label className="form-label">Team Members</Label>
                  <div className="avatar-group">
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
                      to="#"
                      className="avatar-group-item"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      title="Add Members"
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
                </div>
              </CardBody>
            </Card>
            {/* **************************************************************************** */}
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0" style={{ display: "inline" }}>
                  Supplier Details
                </h5>
                <a href="" style={{ display: "inline", float: "right" }}>
                  Add New
                </a>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    Supplier
                  </Label>
                  <Input
                    name="status"
                    type="select"
                    className="form-select"
                    id="choices-publish-status-input"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.status || ""}
                  >
                    {supplierStatus.map((item, key) => (
                      <React.Fragment key={key}>
                        {item.options.map((item, key) => (
                          <option value={item.value} key={key}>
                            {item.label}
                          </option>
                        ))}
                      </React.Fragment>
                    ))}
                  </Input>
                  {validation.touched.status && validation.errors.status ? (
                    <FormFeedback type="invalid">
                      {validation.errors.status}
                    </FormFeedback>
                  ) : null}
                </div>
                <Label className="text-muted">Details</Label>
                <p>#512, Wellington Street, Park City, Country Name</p>
                <p>+971 56 654758</p>
                <div className="mb-3">
                  <Label htmlFor="choices-lead-input" className="form-label">
                    Login Required Users
                  </Label>
                  <select
                    className="form-select"
                    data-choices
                    data-choices-search-false
                    id="choices-lead-input"
                  >
                    <option defaultValue="Brent Gonzalez">
                      Brent Gonzalez
                    </option>
                    <option value="Darline Williams">Darline Williams</option>
                    <option value="Sylvia Wright">Sylvia Wright</option>
                    <option value="Ellen Smith">Ellen Smith</option>
                    <option value="Jeffrey Salazar">Jeffrey Salazar</option>
                    <option value="Mark Williams">Mark Williams</option>
                  </select>
                </div>

                <div>
                  <Label className="form-label">Team Members</Label>
                  <div className="avatar-group">
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
                      to="#"
                      className="avatar-group-item"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      title="Add Members"
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
                </div>
              </CardBody>
            </Card>

            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Privacy</h5>
              </div>
              <CardBody>
                <div>
                  <Label
                    htmlFor="choices-privacy-status-input"
                    className="form-label"
                  >
                    Status
                  </Label>
                  <select
                    className="form-select"
                    data-choices
                    data-choices-search-false
                    id="choices-privacy-status-input"
                  >
                    <option defaultValue="Private">Project Status</option>
                    <option value="Team">Team</option>
                    <option value="Public">Public</option>
                  </select>
                </div>
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcommerceAddProduct;
