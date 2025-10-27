import { useCallback, useState } from "react";
import localeTexts from "../../common/locales/en-us/index";
import parse from "html-react-parser";
import { useAppConfig } from "../../common/hooks/useAppConfig";
import "../index.css";
import "./StackDashboard.css";
import Icon from "../../assets/Custom-Field-Logo.svg";
import ReadOnly from "../../assets/lock.svg";
import JsonView from "../../assets/JsonView.svg";
import ConfigModal from "../../components/ConfigModal/ConfigModal";
import { useAppSdk } from "../../common/hooks/useAppSdk";

const StackDashboardExtension = () => {
  const appConfig = useAppConfig();
  const appSdk = useAppSdk();
  console.log("Data: ", appSdk?.stack.getData());
  console.log("Content Types: ", appSdk?.stack.getContentTypes());


  return (
    <div className="layout-container">
      <h1>My Dashboard Application</h1>
    </div>
  );
};

export default StackDashboardExtension;
