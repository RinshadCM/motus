import React, { Component } from "react";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const options = [
  { value: "luna", label: "Moon" },
  { value: "phobos", label: "Phobos" },
  { value: "deimos", label: "Deimos" },
  { value: "io", label: "Io" },
  { value: "europa", label: "Europa" },
  { value: "ganymede", label: "Ganymede" },
  { value: "callisto", label: "Callisto" },
  { value: "mimas", label: "Mimas" },
  { value: "enceladus", label: "Enceladus" },
  { value: "tethys", label: "Tethys" },
  { value: "rhea", label: "Rhea" },
  { value: "titan", label: "Titan" },
];

const Optgroup = [
  {
    label: "Skoda",
    options: [
      { value: "kushaq", label: "Kushaq" },
      { value: "superb", label: "Superb" },
      { value: "octavia", label: "Octavia" },
      { value: "rapid", label: "Rapid" },
    ],
  },
  {
    label: "Volkswagen",
    options: [
      { value: "polo", label: "Polo" },
      { value: "taigun", label: "Taigun" },
      { value: "vento", label: "Vento" },
    ],
  },
];

class SupplierBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ["kushaq", "superb", "octavia"],
      selectedOptGroup: ["kushaq"],
      selectedFilter: ["kushaq"],
      selectedFilterAlign: ["kushaq"],
      selectedPreserve: ["kushaq"],
      selectedRestrict: ["kushaq"],
      selectedDuplicate: ["kushaq"],
    };
  }
  onChange = (selected) => {
    this.setState({ selected });
  };

  onOptGroupChange = (selectedOptGroup) => {
    this.setState({ selectedOptGroup });
  };

  onFilterChange = (selectedFilter) => {
    this.setState({ selectedFilter });
  };

  onFilterAlignChange = (selectedFilterAlign) => {
    this.setState({ selectedFilterAlign });
  };

  onPreserveChange = (selectedPreserve) => {
    this.setState({ selectedPreserve });
  };

  onRestrictChange = (selectedRestrict) => {
    this.setState({ selectedRestrict });
  };

  onDuplicateChange = (selectedDuplicate) => {
    this.setState({ selectedDuplicate });
  };

  render() {
    const { selectedFilter } = this.state;
    const available = ["io", "europa", "ganymede", "callisto"];
    return (
      <React.Fragment>
        <DualListBox
          canFilter
          filterCallback={(Optgroup, filterInput) => {
            if (filterInput === "") {
              return true;
            }

            return new RegExp(filterInput, "i").test(Optgroup.label);
          }}
          filterPlaceholder="Search..."
          options={Optgroup}
          selected={selectedFilter}
          onChange={this.onFilterChange}
          icons={{
            moveLeft: <span className="mdi mdi-chevron-left" key="key" />,
            moveAllLeft: [
              <span className="mdi mdi-chevron-double-left" key="key" />,
            ],
            moveRight: <span className="mdi mdi-chevron-right" key="key" />,
            moveAllRight: [
              <span className="mdi mdi-chevron-double-right" key="key" />,
            ],
            moveDown: <span className="mdi mdi-chevron-down" key="key" />,
            moveUp: <span className="mdi mdi-chevron-up" key="key" />,
            moveTop: <span className="mdi mdi-chevron-double-up" key="key" />,
            moveBottom: (
              <span className="mdi mdi-chevron-double-down" key="key" />
            ),
          }}
        />
      </React.Fragment>
    );
  }
}

export default SupplierBox;
