import React from "react";
import '../../styles/Toolbar.css'


const ToolBar = ({children, onChange}) => {
  return (
    <div className="container-inputs">
      {children}
    </div>
  );
};

export default ToolBar;
