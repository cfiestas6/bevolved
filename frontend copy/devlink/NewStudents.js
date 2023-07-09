import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewStudents.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304da6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304da6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748147852},"e-121":{"id":"e-121","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304dad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304dad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748155180},"e-123":{"id":"e-123","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-124"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304db9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304db9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748159668},"e-125":{"id":"e-125","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304dc5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304dc5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748163865},"e-127":{"id":"e-127","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-128"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304dd1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304dd1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748167620},"e-129":{"id":"e-129","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304dde","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304dde","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748176774},"e-131":{"id":"e-131","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-132"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99b3e76d-d786-a925-59e2-a91111304de0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99b3e76d-d786-a925-59e2-a91111304de0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666748191595}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-17":{"id":"a-17","title":"Scroll View -> 03","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-17-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-17-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-23":{"id":"a-23","title":"Scroll View -> 04","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-23-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-23-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":800,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-22":{"id":"a-22","title":"Scroll View Scale -> 01","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-22-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-22-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":400,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738},"a-21":{"id":"a-21","title":"Scroll View Scale -> 02","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":600,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewStudents({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-small")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "member-background-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "member-grid-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "title-wrapper-center")}
              data-w-id="99b3e76d-d786-a925-59e2-a91111304da6"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "badge", "purple")}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  {"NEW MEMBERS SECTION"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Heading tag="h2">
                {"Meet our newest students"}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.Grid
              className={_utils.cx(_styles, "members-grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "member-card")}
                id={_utils.cx(
                  _styles,
                  "w-node-_99b3e76d-d786-a925-59e2-a91111304dad-11304da2"
                )}
                data-w-id="99b3e76d-d786-a925-59e2-a91111304dad"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-avatar-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-cover")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd9_Member%20Avatar%2001.webp"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "h5-heading")}
                    tag="h5"
                  >
                    {"Sam Smith"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "paragraph-regular",
                    "text-color-gray-500"
                  )}
                  tag="div"
                >
                  {"Sydney / Australia"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-plays-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-regular")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M17.532%2012.312L9.58275%2017.6115C9.52628%2017.6491%209.46067%2017.6706%209.39292%2017.6739C9.32516%2017.6771%209.2578%2017.6619%209.198%2017.6299C9.1382%2017.5979%209.0882%2017.5502%209.05334%2017.4921C9.01847%2017.4339%209.00004%2017.3673%209%2017.2995V6.70049C9.00004%206.63266%209.01847%206.56611%209.05334%206.50792C9.0882%206.44974%209.1382%206.4021%209.198%206.37008C9.2578%206.33807%209.32516%206.32287%209.39292%206.32611C9.46067%206.32935%209.52628%206.35091%209.58275%206.38849L17.532%2011.688C17.5834%2011.7222%2017.6255%2011.7686%2017.6546%2011.8231C17.6837%2011.8775%2017.699%2011.9383%2017.699%2012C17.699%2012.0617%2017.6837%2012.1225%2017.6546%2012.1769C17.6255%2012.2313%2017.5834%2012.2777%2017.532%2012.312Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail")}
                    tag="div"
                  >
                    {"1.1m PLAYs"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "member-card")}
                id={_utils.cx(
                  _styles,
                  "w-node-_99b3e76d-d786-a925-59e2-a91111304db9-11304da2"
                )}
                data-w-id="99b3e76d-d786-a925-59e2-a91111304db9"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-avatar-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-cover")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfdc_Member%20Avatar%2003.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "h5-heading")}
                    tag="h5"
                  >
                    {"Sarah Leeman"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "paragraph-regular",
                    "text-color-gray-500"
                  )}
                  tag="div"
                >
                  {"Sydney / Australia"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-plays-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-regular")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M17.532%2012.312L9.58275%2017.6115C9.52628%2017.6491%209.46067%2017.6706%209.39292%2017.6739C9.32516%2017.6771%209.2578%2017.6619%209.198%2017.6299C9.1382%2017.5979%209.0882%2017.5502%209.05334%2017.4921C9.01847%2017.4339%209.00004%2017.3673%209%2017.2995V6.70049C9.00004%206.63266%209.01847%206.56611%209.05334%206.50792C9.0882%206.44974%209.1382%206.4021%209.198%206.37008C9.2578%206.33807%209.32516%206.32287%209.39292%206.32611C9.46067%206.32935%209.52628%206.35091%209.58275%206.38849L17.532%2011.688C17.5834%2011.7222%2017.6255%2011.7686%2017.6546%2011.8231C17.6837%2011.8775%2017.699%2011.9383%2017.699%2012C17.699%2012.0617%2017.6837%2012.1225%2017.6546%2012.1769C17.6255%2012.2313%2017.5834%2012.2777%2017.532%2012.312Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail")}
                    tag="div"
                  >
                    {"1.1m PLAYs"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "member-card")}
                id={_utils.cx(
                  _styles,
                  "w-node-_99b3e76d-d786-a925-59e2-a91111304dc5-11304da2"
                )}
                data-w-id="99b3e76d-d786-a925-59e2-a91111304dc5"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-avatar-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-cover")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfda_Member%20Avatar%2002.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "h5-heading")}
                    tag="h5"
                  >
                    {"Sam Smith"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "paragraph-regular",
                    "text-color-gray-500"
                  )}
                  tag="div"
                >
                  {"Sydney / Australia"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-plays-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-regular")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M17.532%2012.312L9.58275%2017.6115C9.52628%2017.6491%209.46067%2017.6706%209.39292%2017.6739C9.32516%2017.6771%209.2578%2017.6619%209.198%2017.6299C9.1382%2017.5979%209.0882%2017.5502%209.05334%2017.4921C9.01847%2017.4339%209.00004%2017.3673%209%2017.2995V6.70049C9.00004%206.63266%209.01847%206.56611%209.05334%206.50792C9.0882%206.44974%209.1382%206.4021%209.198%206.37008C9.2578%206.33807%209.32516%206.32287%209.39292%206.32611C9.46067%206.32935%209.52628%206.35091%209.58275%206.38849L17.532%2011.688C17.5834%2011.7222%2017.6255%2011.7686%2017.6546%2011.8231C17.6837%2011.8775%2017.699%2011.9383%2017.699%2012C17.699%2012.0617%2017.6837%2012.1225%2017.6546%2012.1769C17.6255%2012.2313%2017.5834%2012.2777%2017.532%2012.312Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail")}
                    tag="div"
                  >
                    {"1.1m PLAYs"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "member-card")}
                id={_utils.cx(
                  _styles,
                  "w-node-_99b3e76d-d786-a925-59e2-a91111304dd1-11304da2"
                )}
                data-w-id="99b3e76d-d786-a925-59e2-a91111304dd1"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-avatar-wrapper")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-cover")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfdb_Member%20Avatar%2004.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "h5-heading")}
                    tag="h5"
                  >
                    {"Sarah Leeman"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "paragraph-regular",
                    "text-color-gray-500"
                  )}
                  tag="div"
                >
                  {"Sydney / Australia"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "member-plays-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "icon-regular")}
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M17.532%2012.312L9.58275%2017.6115C9.52628%2017.6491%209.46067%2017.6706%209.39292%2017.6739C9.32516%2017.6771%209.2578%2017.6619%209.198%2017.6299C9.1382%2017.5979%209.0882%2017.5502%209.05334%2017.4921C9.01847%2017.4339%209.00004%2017.3673%209%2017.2995V6.70049C9.00004%206.63266%209.01847%206.56611%209.05334%206.50792C9.0882%206.44974%209.1382%206.4021%209.198%206.37008C9.2578%206.33807%209.32516%206.32287%209.39292%206.32611C9.46067%206.32935%209.52628%206.35091%209.58275%206.38849L17.532%2011.688C17.5834%2011.7222%2017.6255%2011.7686%2017.6546%2011.8231C17.6837%2011.8775%2017.699%2011.9383%2017.699%2012C17.699%2012.0617%2017.6837%2012.1225%2017.6546%2012.1769C17.6255%2012.2313%2017.5834%2012.2777%2017.532%2012.312Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "detail")}
                    tag="div"
                  >
                    {"1.1m PLAYs"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Block
              className={_utils.cx(_styles, "members-button-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button-primary-small")}
                data-w-id="99b3e76d-d786-a925-59e2-a91111304dde"
                button={true}
                options={{
                  href: "#",
                }}
              >
                {"See All"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "member-background")}
            data-w-id="99b3e76d-d786-a925-59e2-a91111304de0"
            tag="div"
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
