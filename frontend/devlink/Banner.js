import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Banner.module.css";

export function Banner({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "banner")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "banner-left")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed02b_Banner%20Left.svg"
      />
      <_Builtin.Block className={_utils.cx(_styles, "banner-text")} tag="div">
        {"🔥 Earn credits by reviewing peer-to-peer"}
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "banner-right")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed02c_Banner%20Right.svg"
      />
    </_Component>
  );
}
