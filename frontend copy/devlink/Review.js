import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Review.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-179":{"id":"e-179","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rich-text","originalId":"64a8536d254922f4138ecfa0|fdb17719-962d-204f-f7cf-acafcfb61783","appliesTo":"CLASS"},"targets":[{"selector":".rich-text","originalId":"64a8536d254922f4138ecfa0|fdb17719-962d-204f-f7cf-acafcfb61783","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666752319949}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Review({ as: _Component = _Builtin.Block, verifyExam = {} }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "template-section")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-08")}
            tag="div"
          >
            <_Builtin.Heading tag="h2">{"Review"}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-32")}
            tag="div"
          >
            <_Builtin.Paragraph>{"Lorem"}</_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Grid
          className={_utils.cx(_styles, "template-style")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "template-style-menu")}
              tag="div"
            >
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "template-header")}
                    tag="div"
                  >
                    {"Lorem"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#Color",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "template-header")}
                    tag="div"
                  >
                    {"Lorem"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#Color",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Lorem"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "fb-style-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>{"Note:"}</_Builtin.Strong>
                  {" lorem"}
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "fb-typography-block")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "fb-typography-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fb-typography-detail")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "template-header")}
                      tag="div"
                    >
                      {"Lorem"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "fb-style-heading-small")}
                      tag="div"
                    >
                      {"Lorem"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "paragraph-style-wrap")}
                    tag="div"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "paragraph-small")}
                    >
                      {"Lorem"}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "fb-line")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "fb-typography-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "fb-typography-detail")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "template-header")}
                      tag="div"
                    >
                      {"Lorem"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "paragraph-style-wrap")}
                    tag="div"
                  >
                    <_Builtin.RichText
                      className={_utils.cx(_styles, "rich-text")}
                      tag="div"
                    >
                      <_Builtin.Heading tag="h2">{"Lorem"}</_Builtin.Heading>
                      <_Builtin.Blockquote>{"Lorem"}</_Builtin.Blockquote>
                    </_Builtin.RichText>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "button-wrapper")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary", "danger")}
                  button={true}
                  options={{
                    href: "#",
                  }}
                >
                  {"Decline"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-right-icon")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                  {...verifyExam}
                >
                  <_Builtin.Block tag="div">{"Verify"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-regular")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M15.187%2011.2362L11.0895%207.13873L12.1696%206.05859L18.1111%2012.0001L12.1696%2017.9416L11.0895%2016.8615L15.187%2012.764H5.88892V11.2362H15.187Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
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
          <_Builtin.Block
            className={_utils.cx(_styles, "line-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "accent-2")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd3_BG%20Accent%20Small.svg"
            />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block
            className={_utils.cx(_styles, "line-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "accent-1")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd2_BG%20Accent.svg"
            />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          </_Builtin.Block>
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
