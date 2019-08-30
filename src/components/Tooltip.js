import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tooltip.css";

//props: "icon", "content"
export default props =>
  <OverlayTrigger
    trigger="hover"
    placement={props.placement}
    overlay={
      <Popover>
        <Popover.Content>
          {props.content}
        </Popover.Content>
      </Popover>
    }>
    <FontAwesomeIcon icon={props.icon} className="tooltip-icon" />
  </OverlayTrigger>;