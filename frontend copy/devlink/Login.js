import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Login.module.css";

export function Login({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section-large")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "background-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "background-line-wrapper")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "form-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "account-title-wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "account-icon-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "icon-large")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed011_Account%20Icon%2002.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-04")}
            tag="div"
          >
            <_Builtin.Heading tag="h4">{"Welcome back!"}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph-regular")}
          >
            {"Login to see the members functionality"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="UserLogInFormWrapper" />
      </_Builtin.Block>
    </_Component>
  );
}
