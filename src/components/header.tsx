import * as React from "react";

// components
import { IconButton } from "./iconButton";

// images
import { HiUser, HiOutlinePencil } from "react-icons/hi";
import {} from "@material-ui/icons";
import { ReactComponent as EditLogo } from "../images/icons/edit.svg";
const DcardLogo: string = require("../images/dcardLogo2.png");
// const Edit: string = require("../images/icons/edit.svg");

export default function Header() {
  return (
    <div className="appBar">
      <div className="appContainer">
        <div className="appLogoAndSearchBar">
          <a className="appLogo" href="https://www.dcard.tw/f">
            <img className="appLogoImage" src={DcardLogo} alt="DcardLogo"></img>
          </a>
          <div className="appSearchBarContainer">
            <div className="appSearchBar">
              <form className="appSearchBarForm">
                <label className="appSearchBarFormLabel">
                  <div className="appSearchBarFormLabelContainer">
                    <input
                      className="appSearchBarFormLabelContainerInput"
                      placeholder="搜尋 麥當勞甜甜圈"
                      type="text"
                    ></input>
                  </div>
                </label>
                <button className="appSearchBarFormButton">
                  <span className="appSearchBarFormButtonSpan"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="appIconMenuBar">
          <IconButton>
            <HiOutlinePencil size="24" className="appIconDiv" />
          </IconButton>
          <IconButton>
            <EditLogo className="appIconDiv" />
            {/* <HiUser size="24" className="appIconDiv" /> */}
          </IconButton>
          <IconButton>
            <HiUser size="24" className="appIconDiv" />
          </IconButton>
          <IconButton>
            <HiUser size="24" className="appIconDiv" />
          </IconButton>
          <IconButton>
            <HiUser size="24" className="appIconDiv" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
