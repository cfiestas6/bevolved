import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70665bf4-0577-5bb9-c12d-69afff31a8c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70665bf4-0577-5bb9-c12d-69afff31a8c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666746956118},"e-57":{"id":"e-57","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70665bf4-0577-5bb9-c12d-69afff31a8d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70665bf4-0577-5bb9-c12d-69afff31a8d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666746970368},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70665bf4-0577-5bb9-c12d-69afff31a8dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70665bf4-0577-5bb9-c12d-69afff31a8dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666746981420},"e-83":{"id":"e-83","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70665bf4-0577-5bb9-c12d-69afff31a8df","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70665bf4-0577-5bb9-c12d-69afff31a8df","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747363926},"e-169":{"id":"e-169","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70665bf4-0577-5bb9-c12d-69afff31a8e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70665bf4-0577-5bb9-c12d-69afff31a8e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666751919487},"e-171":{"id":"e-171","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70665bf4-0577-5bb9-c12d-69afff31a8e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70665bf4-0577-5bb9-c12d-69afff31a8e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666751926646}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-21":{"id":"a-21","title":"Scroll View Scale -> 02","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738},"a-23":{"id":"a-23","title":"Scroll View -> 04","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-23-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-23-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-18":{"id":"a-18","title":"Scroll View -> 05","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":1000,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-18-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({
  as: _Component = _Builtin.Block,
  registerAccount = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Grid className={_utils.cx(_styles, "header-grid")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "header-text-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_70665bf4-0577-5bb9-c12d-69afff31a8c1-ff31a8be"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "header-top")}
              data-w-id="70665bf4-0577-5bb9-c12d-69afff31a8c2"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-14")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "detail")}
                  tag="div"
                >
                  {"Where learning tech blossoms"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-24")}
                tag="div"
              >
                <_Builtin.Heading tag="h1">
                  {"decentralized learning, personalized growth"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-large")}
              >
                {
                  "Expand your coding skills through custom learning paths. Control your pace, choose your focus, and blossom in the digital age."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "header-button-wrapper")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "button-primary-right-icon")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                  {...registerAccount}
                >
                  <_Builtin.Block tag="div">{"Plant your seed"}</_Builtin.Block>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-regular")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M15.187%2011.2362L11.0895%207.13873L12.1696%206.05859L18.1111%2012.0001L12.1696%2017.9416L11.0895%2016.8615L15.187%2012.764H5.88892V11.2362H15.187Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "avatar-wrapper")}
              data-w-id="70665bf4-0577-5bb9-c12d-69afff31a8d2"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "avatar-group-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "avatar", "first-avatar")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed035_Avatar%201.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "avatar")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed038_Avatar%202.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "avatar")}
                  tag="div"
                >
                  <_Builtin.Image
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed034_Avatar%203.webp"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "user-text-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "paragraph-large")}
                  tag="div"
                >
                  {"+3K Members"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_70665bf4-0577-5bb9-c12d-69afff31a8dd-ff31a8be"
            )}
            data-w-id="70665bf4-0577-5bb9-c12d-69afff31a8dd"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "hero-header")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed029_Hero%20Image.webp"
            />
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "background-wrapper")}
        data-w-id="70665bf4-0577-5bb9-c12d-69afff31a8df"
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
              data-w-id="70665bf4-0577-5bb9-c12d-69afff31a8e5"
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
              data-w-id="70665bf4-0577-5bb9-c12d-69afff31a8e9"
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
