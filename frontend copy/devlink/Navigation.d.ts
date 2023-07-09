import * as React from "react";
import * as Types from "./types";

declare function Navigation(props: {
  as?: React.ElementType;
  homeUrl?: Types.Devlink.RuntimeProps;
  coursesUrl?: Types.Devlink.RuntimeProps;
  connectWallerUrl?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
