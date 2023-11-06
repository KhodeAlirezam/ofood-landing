import React from "react";

export function createIcon(SvgElement) {
  return function Icon(props) {
    return React.cloneElement(SvgElement, props);
  };
}
