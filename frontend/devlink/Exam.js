import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { StatisticsRow } from "./StatisticsRow";
import * as _utils from "./utils";
import _styles from "./Exam.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-183":{"id":"e-183","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".course-header","originalId":"64a8536d254922f4138ecfa1|f34ccf51-ae24-3cef-9bfb-e8f5ed8589f6","appliesTo":"CLASS"},"targets":[{"selector":".course-header","originalId":"64a8536d254922f4138ecfa1|f34ccf51-ae24-3cef-9bfb-e8f5ed8589f6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666753272813},"e-185":{"id":"e-185","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".course-header-card-wrapper","originalId":"64a8536d254922f4138ecfa1|f34ccf51-ae24-3cef-9bfb-e8f5ed858a2a","appliesTo":"CLASS"},"targets":[{"selector":".course-header-card-wrapper","originalId":"64a8536d254922f4138ecfa1|f34ccf51-ae24-3cef-9bfb-e8f5ed858a2a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666753283050},"e-187":{"id":"e-187","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".course-background-circle","originalId":"64a8536d254922f4138ecfa1|f34ccf51-ae24-3cef-9bfb-e8f5ed858a2b","appliesTo":"CLASS"},"targets":[{"selector":".course-background-circle","originalId":"64a8536d254922f4138ecfa1|f34ccf51-ae24-3cef-9bfb-e8f5ed858a2b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666753289342},"e-225":{"id":"e-225","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-226"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f17140a1-52ed-dcf9-ab16-80d4e578cabe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688841901810}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-21":{"id":"a-21","title":"Scroll View Scale -> 02","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738},"a-17":{"id":"a-17","title":"Scroll View -> 03","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-17-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-17-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Exam({ as: _Component = _Builtin.Block, startExamUrl = {} }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "course-grid")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "course-header")}
            id={_utils.cx(
              _styles,
              "w-node-f17140a1-52ed-dcf9-ab16-80d4e578ca5a-e578ca57"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "badge-course")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Fundamentels"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "margin-bottom-16")}
              tag="div"
            >
              <_Builtin.Heading tag="h3">
                {"Programming in C:The fundamentels"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-large")}
            >
              {"Description"}
            </_Builtin.Paragraph>
            <_Builtin.Grid
              className={_utils.cx(_styles, "course-feature-grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "course-feature")}
                id={_utils.cx(
                  _styles,
                  "w-node-f17140a1-52ed-dcf9-ab16-80d4e578ca64-e578ca57"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-regular")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.2523%2015L16.5548%209.69675L15.4943%208.63625L11.2523%2012.879L9.1305%2010.7573L8.07%2011.8177L11.2523%2015Z%22%20fill%3D%22%23050505%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "paragraph-regular")}
                  tag="div"
                >
                  {"Active Community"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "course-feature")}
                id={_utils.cx(
                  _styles,
                  "w-node-f17140a1-52ed-dcf9-ab16-80d4e578ca68-e578ca57"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-regular")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.2523%2015L16.5548%209.69675L15.4943%208.63625L11.2523%2012.879L9.1305%2010.7573L8.07%2011.8177L11.2523%2015Z%22%20fill%3D%22%23050505%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "paragraph-regular")}
                  tag="div"
                >
                  {"One-on-One Mentorship"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "course-feature")}
                id={_utils.cx(
                  _styles,
                  "w-node-f17140a1-52ed-dcf9-ab16-80d4e578ca6c-e578ca57"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-regular")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.2523%2015L16.5548%209.69675L15.4943%208.63625L11.2523%2012.879L9.1305%2010.7573L8.07%2011.8177L11.2523%2015Z%22%20fill%3D%22%23050505%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "paragraph-regular")}
                  tag="div"
                >
                  {"Active Community"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "course-feature")}
                id={_utils.cx(
                  _styles,
                  "w-node-f17140a1-52ed-dcf9-ab16-80d4e578ca70-e578ca57"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-regular")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.2523%2015L16.5548%209.69675L15.4943%208.63625L11.2523%2012.879L9.1305%2010.7573L8.07%2011.8177L11.2523%2015Z%22%20fill%3D%22%23050505%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "paragraph-regular")}
                  tag="div"
                >
                  {"Active Community"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Block
              className={_utils.cx(_styles, "course-author")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "author-card-inner-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "course-avatar")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-cover")}
                    height="auto"
                    loading="lazy"
                    width="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed02f_About%20Gradient.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "label-regular")}
                    tag="div"
                  >
                    {"Bevolved"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "paragraph-small",
                      "text-color-gray-500"
                    )}
                    tag="div"
                  >
                    {"Fundamentels"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "course-icon")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a9b27b410ff2068586e298_C.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "course-badge-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "badge-icon")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecff9_Course%20Icon%2002.svg"
                />
                <_Builtin.Block tag="div">{"Tag 1"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "badge-icon", "pink")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecffa_Course%20Icon%2003.svg"
                />
                <_Builtin.Block tag="div">{"Tag 2"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "badge-icon", "blue")}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecffb_Course%20Icon%2001.svg"
                />
                <_Builtin.Block tag="div">{"Tag 3"}</_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "course-header-card-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-f17140a1-52ed-dcf9-ab16-80d4e578ca8e-e578ca57"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "course-background-circle")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecffc_Course%20Background%20Circle.webp"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "detail-card")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "detail-card-text-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-12")}
                  tag="div"
                >
                  <_Builtin.Heading tag="h4">{"1 bvlvd coin"}</_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-16")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button-primary-small")}
                    button={true}
                    options={{
                      href: "#",
                    }}
                    {...startExamUrl}
                  >
                    {"Exam"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "detail-card-divider")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"This exam includes:"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "detail-card-feature-list")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail-card-feature-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-regular")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed002_Detail%20Icon%2005.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "feature-item-text-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph-regular")}
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail-card-feature-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-regular")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecffe_Detail%20Icon%2001.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "feature-item-text-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph-regular")}
                        tag="div"
                      >
                        {"2"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail-card-feature-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-regular")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfff_Detail%20Icon%2002.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "feature-item-text-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph-regular")}
                        tag="div"
                      >
                        {"3"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail-card-feature-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-regular")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed001_Detail%20Icon%2006.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "feature-item-text-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph-regular")}
                        tag="div"
                      >
                        {"4"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail-card-feature-item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-regular")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed000_Detail%20Icon%2003.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "feature-item-text-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "paragraph-regular")}
                        tag="div"
                      >
                        {"Certificate of completion"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
        <StatisticsRow />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "background-wrapper")}
        data-w-id="f17140a1-52ed-dcf9-ab16-80d4e578cabe"
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
