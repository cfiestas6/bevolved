import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Join.module.css";

export function Join({
  as: _Component = _Builtin.Block,
  signup = {},
  formProps = {},
  connectMetaMask = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-large")}
      tag="div"
      {...formProps}
    >
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
        <_Builtin.FormWrapper>
          <_Builtin.Block
            className={_utils.cx(_styles, "account-title-wrap")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "account-icon-wrapper")}
              tag="div"
              {...connectMetaMask}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon-large")}
                width="auto"
                height="auto"
                loading="lazy"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a986105ffd73e86901d000_metamask.svg"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom-04")}
              tag="div"
            >
              <_Builtin.Heading tag="h4">
                {"Connect with MetaMask"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Paragraph>
              {"Create a new account with the form below."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.FormForm
            name="wf-form-sign-up-form"
            data-name="sign-up-form"
            action="https://hooks.airtable.com/workflows/v1/genericWebhook/appkRHgNqB9NnZG2t/wflQ88UhCP6d8v0jm/wtrJZIwwYIv3oyYFy"
            method="post"
            id="wf-form-sign-up-form"
          >
            <_Builtin.FormBlockLabel htmlFor="name">
              {"First name"}
            </_Builtin.FormBlockLabel>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-field-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                width="auto"
                height="auto"
                loading="lazy"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed007_Form%20Icon%2001.svg"
              />
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field-plain")}
                name="first_name"
                maxLength={256}
                data-name="first_name"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                id="first_name-2"
              />
            </_Builtin.Block>
            <_Builtin.FormBlockLabel htmlFor="name-4">
              {"Last name"}
            </_Builtin.FormBlockLabel>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-field-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                width="auto"
                height="auto"
                loading="lazy"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed007_Form%20Icon%2001.svg"
              />
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field-plain")}
                name="last_name"
                maxLength={256}
                data-name="last_name"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                id="last_name-2"
              />
            </_Builtin.Block>
            <_Builtin.FormBlockLabel htmlFor="name-4">
              {"Email"}
            </_Builtin.FormBlockLabel>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-field-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                width="auto"
                height="auto"
                loading="lazy"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed006_Form%20Icon%2003.svg"
              />
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field-plain")}
                name="email"
                maxLength={256}
                data-name="email"
                disabled={false}
                type="email"
                required={false}
                autoFocus={false}
                id="email"
              />
            </_Builtin.Block>
            <_Builtin.FormCheckboxWrapper>
              <_Builtin.FormCheckboxInput
                className={_utils.cx(_styles, "checkbox-form")}
                inputType="default"
                type="checkbox"
                name="verificator"
                data-name="verificator"
                checked={false}
                required={false}
                id="verificator"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "checkbox-label")}
              >
                {"Sign up as a verifier"}
              </_Builtin.FormInlineLabel>
            </_Builtin.FormCheckboxWrapper>
            <_Builtin.FormButton
              className={_utils.cx(_styles, "button-primary", "width-100")}
              type="submit"
              value="Sign up"
              data-wait="Please wait..."
            />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage>
            <_Builtin.Block tag="div">
              {"Thank you! Your submission has been received!"}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage>
            <_Builtin.Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
