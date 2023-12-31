import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"17e80f0e-88af-4069-a479-7a4683e2a5d4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"17e80f0e-88af-4069-a479-7a4683e2a5d4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747919099}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Cta({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-small")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cta-wrapper")}
          data-w-id="17e80f0e-88af-4069-a479-7a4683e2a5d4"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cta-inner-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "badge", "gray")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Get started"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom-32")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "h2-heading")}
                tag="h1"
              >
                {"join the community"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.FormWrapper>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "cta-email-form")}
                name="email-form"
                data-name="Email Form"
                method="get"
                id="email-form"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="CTA-Email"
                  data-name="CTA Email"
                  placeholder="Enter your email"
                  type="email"
                  disabled={false}
                  required={true}
                  id="CTA-Email"
                />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button-primary")}
                  type="submit"
                  value="Sign up"
                  data-wait="Please wait..."
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={_utils.cx(_styles, "success-message")}
              >
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
        </_Builtin.Block>
      </_Builtin.Block>
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
    </_Component>
  );
}
