import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { get, map } from "lodash";

import { Link, useNavigate } from "react-router-dom";

import ksa from "../../assets/images/flags/sa.svg";
import uae from "../../assets/images/flags/ae.svg";

//i18n
import i18n from "../../i18n";
import flags from "./Flags";

const FlagDrop = () => {
  // Declare a new state variable, which we'll call "menu"
  const [selectedLang, setSelectedLang] = useState("");

  useEffect(() => {
    const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
    setSelectedLang(currentLanguage);
  }, []);

  const changeLanguageAction = (lang) => {
    //set language as i18n
    i18n.changeLanguage(lang);
    localStorage.setItem("I18N_LANGUAGE", lang);
    setSelectedLang(lang);
  };

  const [isLanguageDropdown, setIsLanguageDropdown] = useState(false);
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdown(!isLanguageDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown isOpen={isLanguageDropdown} toggle={toggleLanguageDropdown}>
        <DropdownToggle
          className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
          tag="button"
        >
          <div className="d-flex justify-content between w-100 me-4">
            <div>
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
                    src={uae}
                    width="25px"
                    height="25px"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </div>
              </Link>
            </div>{" "}
            <div className="me-4">
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
                    src={ksa}
                    width="25px"
                    height="25px"
                    alt=""
                    className="rounded-circle img-fluid me-4"
                  />
                </div>
              </Link>
              {/* <Link
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
              ></div>
            </Link> */}
            </div>{" "}
          </div>
        </DropdownToggle>
        <DropdownMenu className="notify-item language py-2">
          {Object.keys(flags).map((key) => (
            <DropdownItem
              key={key}
              className={`notify-item ${
                selectedLang === key ? "active" : "none"
              }`}
            >
              <img
                src={get(flags, `${key}.flag`)}
                alt="Skote"
                className="me-2 rounded"
                height="18"
              />
              <span className="align-middle">
                {get(flags, `${key}.label`)}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default FlagDrop;
