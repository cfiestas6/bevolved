import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Grade.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-233":{"id":"e-233","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70972e77-a589-270a-4854-608626c2c819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688881113491},"e-235":{"id":"e-235","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-236"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70972e77-a589-270a-4854-608626c2c81f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688881113491},"e-237":{"id":"e-237","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70972e77-a589-270a-4854-608626c2c820","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688881113491}},"actionLists":{"a-27":{"id":"a-27","title":"Scroll View -> 8","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-27-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-27-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-28":{"id":"a-28","title":"Scroll View -> 9","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-28-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-29":{"id":"a-29","title":"Scroll View Scale -> 6","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Grade({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "title-wrapper-center")}
          data-w-id="70972e77-a589-270a-4854-608626c2c819"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-12")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "detail")} tag="div">
              {"Next steps"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Heading tag="h1">{"congratz (:"}</_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "header-card-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-_70972e77-a589-270a-4854-608626c2c81f-26c2c817"
          )}
          data-w-id="70972e77-a589-270a-4854-608626c2c81f"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "circle-course")}
            data-w-id="70972e77-a589-270a-4854-608626c2c820"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "gradient")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfec_BG%20Circlesvg.svg"
            />
          </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "highlight-card", "double")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "highlight-content", "succes")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "badge")} tag="div">
                <_Builtin.Block
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {"Fundamentals"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-12")}
                tag="div"
              >
                <_Builtin.Heading
                  dyn={{
                    bind: {},
                  }}
                  tag="h5"
                >
                  {"Programming in C:"}
                  <br />
                  {"The fundamentals"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "course-card-bottom-row")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-small")}
                  button={true}
                  dyn={{
                    bind: {},
                  }}
                  options={{
                    href: "#",
                  }}
                >
                  {"History"}
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon")}
                    value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012C2%206.477%206.477%202%2012%202C17.523%202%2022%206.477%2022%2012C22%2017.523%2017.523%2022%2012%2022ZM11.003%2016L18.073%208.929L16.659%207.515L11.003%2013.172L8.174%2010.343L6.76%2011.757L11.003%2016Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                  />
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "label-large",
                      "text-color-green"
                    )}
                    tag="div"
                  >
                    {"9.0"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "highlight-content")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "badge")} tag="div">
                <_Builtin.Block
                  dyn={{
                    bind: {},
                  }}
                  tag="div"
                >
                  {"Reccomendation"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-12")}
                tag="div"
              >
                <_Builtin.Heading
                  dyn={{
                    bind: {},
                  }}
                  tag="h5"
                >
                  {"mastering syntax"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "course-card-bottom-row")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-small")}
                  button={true}
                  dyn={{
                    bind: {},
                  }}
                  options={{
                    href: "#",
                  }}
                >
                  {"Start"}
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "label-large",
                    "text-color-red"
                  )}
                  tag="div"
                >
                  {"Personalized"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
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
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block
            className={_utils.cx(_styles, "line-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "accent-4")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd3_BG%20Accent%20Small.svg"
            />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
