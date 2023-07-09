import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./TreeGrade.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-239":{"id":"e-239","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-240"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8f61414a-99a0-749c-0fb6-d39965cc3842","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8f61414a-99a0-749c-0fb6-d39965cc3842","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688883697407},"e-241":{"id":"e-241","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8f61414a-99a0-749c-0fb6-d39965cc3848","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8f61414a-99a0-749c-0fb6-d39965cc3848","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688883697407},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8f61414a-99a0-749c-0fb6-d39965cc3849","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8f61414a-99a0-749c-0fb6-d39965cc3849","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688883697407}},"actionLists":{"a-33":{"id":"a-33","title":"Scroll View -> 12","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-33-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-33-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-33-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-34":{"id":"a-34","title":"Scroll View -> 13","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-34-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-34-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-34-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-35":{"id":"a-35","title":"Scroll View Scale -> 8","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-35-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-35-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-35-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64aa4744a0520f0d7fe21156|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TreeGrade({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "title-wrapper-center")}
          data-w-id="8f61414a-99a0-749c-0fb6-d39965cc3842"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-12")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "detail")} tag="div">
              {"Tree of life"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Heading tag="h1">
            {"your personal growth path"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "header-card-wrapper", "mw-correction")}
          id={_utils.cx(
            _styles,
            "w-node-_8f61414a-99a0-749c-0fb6-d39965cc3848-65cc3840"
          )}
          data-w-id="8f61414a-99a0-749c-0fb6-d39965cc3848"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "circle-course")}
            data-w-id="8f61414a-99a0-749c-0fb6-d39965cc3849"
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
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a9bfb9c2052d300efe9b75_tree-finished.svg"
          />
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
