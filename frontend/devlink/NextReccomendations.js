import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NextReccomendations.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-227":{"id":"e-227","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ed855e46-a8e7-0705-7bb5-fc9c552ac982","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ed855e46-a8e7-0705-7bb5-fc9c552ac982","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688880988201},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ed855e46-a8e7-0705-7bb5-fc9c552ac988","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ed855e46-a8e7-0705-7bb5-fc9c552ac988","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688880988201},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ed855e46-a8e7-0705-7bb5-fc9c552ac989","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ed855e46-a8e7-0705-7bb5-fc9c552ac989","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688880988201}},"actionLists":{"a-24":{"id":"a-24","title":"Scroll View -> 6","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-24-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-24-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-24-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-25":{"id":"a-25","title":"Scroll View -> 7","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-25-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-25-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-26":{"id":"a-26","title":"Scroll View Scale -> 5","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-26-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-26-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-26-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NextReccomendations({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "title-wrapper-center")}
          data-w-id="ed855e46-a8e7-0705-7bb5-fc9c552ac982"
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
          <_Builtin.Heading tag="h1">{"next recommendations"}</_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "header-card-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-ed855e46-a8e7-0705-7bb5-fc9c552ac988-552ac980"
          )}
          data-w-id="ed855e46-a8e7-0705-7bb5-fc9c552ac988"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "circle-course")}
            data-w-id="ed855e46-a8e7-0705-7bb5-fc9c552ac989"
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
            className={_utils.cx(_styles, "highlight-card")}
            tag="div"
          >
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
                  {"from novice to pro"}
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
