import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StatisticsRow.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55687f8a-312b-e04e-43ec-c443ffb47ade","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55687f8a-312b-e04e-43ec-c443ffb47ade","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747080526}},"actionLists":{"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StatisticsRow({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "statistics-row")}
      data-w-id="55687f8a-312b-e04e-43ec-c443ffb47ade"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "statistics-item-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "detail", "text-color-gray-400")}
          tag="div"
        >
          {"Courses"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "h2-heading")} tag="div">
          {"+224"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "statistics-divider")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "statistics-item-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "detail", "text-color-gray-400")}
          tag="div"
        >
          {"members"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "h2-heading")} tag="div">
          {"+30k"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "statistics-divider")}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "statistics-item-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "detail", "text-color-gray-400")}
          tag="div"
        >
          {"total views"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "h2-heading")} tag="div">
          {"+54m"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
