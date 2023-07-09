import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Profile.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e5a86b43-6daf-0faf-a572-66f2625c362d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e5a86b43-6daf-0faf-a572-66f2625c362d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688884962222},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e5a86b43-6daf-0faf-a572-66f2625c362e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e5a86b43-6daf-0faf-a572-66f2625c362e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1688884962222}},"actionLists":{"a-37":{"id":"a-37","title":"Scroll View -> 15","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-37-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-37-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-37-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-38":{"id":"a-38","title":"Scroll View Scale -> 9","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-38-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-38-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-38-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"64a8536d254922f4138ecf9e|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Profile({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "header-card-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-e5a86b43-6daf-0faf-a572-66f2625c362d-625c362b"
          )}
          data-w-id="e5a86b43-6daf-0faf-a572-66f2625c362d"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "circle-course")}
            data-w-id="e5a86b43-6daf-0faf-a572-66f2625c362e"
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
                  {"Future-engineer"}
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
                  {"Lisa"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph
                dyn={{
                  bind: {},
                }}
              >
                {"Description"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "highlight-image")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfdb_Member%20Avatar%2004.png"
              />
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
