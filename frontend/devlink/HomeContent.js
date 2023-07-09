import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HomeContent.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c0766e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c0766e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747212224},"e-73":{"id":"e-73","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c07677","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c07677","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747222574},"e-75":{"id":"e-75","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c0767a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c0767a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747232537},"e-77":{"id":"e-77","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-78"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c0767c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c0767c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747238533},"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c07698","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c07698","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747266408},"e-81":{"id":"e-81","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c0769e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c0769e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747275856},"e-173":{"id":"e-173","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c076de","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c076de","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666752134269},"e-175":{"id":"e-175","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c076e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c076e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666752140822},"e-177":{"id":"e-177","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"006f636f-6f54-08ad-9b30-110f98c07717","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"006f636f-6f54-08ad-9b30-110f98c07717","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666752150486}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-20":{"id":"a-20","title":"Scroll View Scale -> 03","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}},{"id":"a-20-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-20-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-20-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":800,"easing":"ease","duration":800,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929673738}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HomeContent({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "home-content")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "section-small")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-regular")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-72")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "content-grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "content-text-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_006f636f-6f54-08ad-9b30-110f98c0766e-98c07669"
                )}
                data-w-id="006f636f-6f54-08ad-9b30-110f98c0766e"
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "badge", "purple")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Community"}</_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-16")}
                  tag="div"
                >
                  <_Builtin.Heading tag="h2">
                    {"Join the community"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-large")}
                >
                  {
                    "Join our global community of tech learners, pave your personalized learning path, and unlock next-level tech skills."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                id={_utils.cx(
                  _styles,
                  "w-node-_006f636f-6f54-08ad-9b30-110f98c07677-98c07669"
                )}
                data-w-id="006f636f-6f54-08ad-9b30-110f98c07677"
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "content-image")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_006f636f-6f54-08ad-9b30-110f98c07678-98c07669"
                  )}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd8_Content%20Image%2001.webp"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "content-grid")}
            tag="div"
          >
            <_Builtin.Block
              id={_utils.cx(
                _styles,
                "w-node-_006f636f-6f54-08ad-9b30-110f98c0767a-98c07669"
              )}
              data-w-id="006f636f-6f54-08ad-9b30-110f98c0767a"
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "content-image")}
                id={_utils.cx(
                  _styles,
                  "w-node-_006f636f-6f54-08ad-9b30-110f98c0767b-98c07669"
                )}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd7_Content%20Image%2002.webp"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "content-text-wrapper")}
              id={_utils.cx(
                _styles,
                "w-node-_006f636f-6f54-08ad-9b30-110f98c0767c-98c07669"
              )}
              data-w-id="006f636f-6f54-08ad-9b30-110f98c0767c"
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "badge")} tag="div">
                <_Builtin.Block tag="div">{"Personalized"}</_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-16")}
                tag="div"
              >
                <_Builtin.Heading tag="h2">
                  {"Content tailored to your learning journey."}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-large")}
              >
                {
                  "Ride the wave of the latest trends in tech, and stay ahead in the ever-evolving digital landscape."
                }
              </_Builtin.Paragraph>
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
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
            <_Builtin.Block
              className={_utils.cx(_styles, "line-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "accent-9")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd2_BG%20Accent.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
            <_Builtin.Block
              className={_utils.cx(_styles, "line-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "accent-10")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd3_BG%20Accent%20Small.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "section-small")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-regular")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "title-wrapper-center")}
            data-w-id="006f636f-6f54-08ad-9b30-110f98c07698"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "badge", "red")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Bevolved"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Heading tag="h2">{"How it works"}</_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "category-grid")}
            data-w-id="006f636f-6f54-08ad-9b30-110f98c0769e"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "category-card")}
              id={_utils.cx(
                _styles,
                "w-node-_006f636f-6f54-08ad-9b30-110f98c0769f-98c07669"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "category-icon-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "icon-extra-large")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfe6_Category%20Icon%2004.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-08")}
                tag="div"
              >
                <_Builtin.Heading tag="h5">
                  {"Custom growth path"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "category-card")}
              id={_utils.cx(
                _styles,
                "w-node-_006f636f-6f54-08ad-9b30-110f98c076a7-98c07669"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "category-icon-wrapper", "pink")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "icon-extra-large")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfe3_Category%20Icon%2002.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-08")}
                tag="div"
              >
                <_Builtin.Heading tag="h5">
                  {"Personalized content"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "category-card")}
              id={_utils.cx(
                _styles,
                "w-node-_006f636f-6f54-08ad-9b30-110f98c076af-98c07669"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "category-icon-wrapper",
                  "yellow"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "icon-extra-large")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfe2_Category%20Icon%2006.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-08")}
                tag="div"
              >
                <_Builtin.Heading tag="h5">
                  {"Certified on-chain"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </_Builtin.Paragraph>
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
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "section-small")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "title-wrapper-center")}
            data-w-id="006f636f-6f54-08ad-9b30-110f98c076de"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "badge", "red")}
              tag="div"
            >
              <_Builtin.Block tag="div">
                {"Decentralized education"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Heading tag="h2">
              {"Check out what our students have to say"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.SliderWrapper
            className={_utils.cx(_styles, "testimonial-slider")}
            data-w-id="006f636f-6f54-08ad-9b30-110f98c076e4"
            navSpacing={3}
            navShadow={false}
            autoplay={false}
            delay={4000}
            iconArrows={true}
            animation="slide"
            navNumbers={false}
            easing="ease"
            navRound={true}
            hideArrows={false}
            disableSwipe={false}
            duration={500}
            infinite={true}
            autoMax={0}
            navInvert={false}
          >
            <_Builtin.SliderMask className={_utils.cx(_styles, "mask")}>
              <_Builtin.SliderSlide
                className={_utils.cx(_styles, "slide")}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "testimonial-grid")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "testimonial-card")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_006f636f-6f54-08ad-9b30-110f98c076e8-98c07669"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-avatar-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-cover")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfeb_Testimonial%20Avatar%2002.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "margin-bottom-32")}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "paragraph-large")}
                      >
                        {
                          "\"Bevolved's flexibility allowed me to learn coding at my own pace. The platform's real-world challenges provided immediate application of my skills. I'm now a front-end developer, thanks to Bevolved.\""
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "label-large")}
                      tag="div"
                    >
                      {"Leo"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "paragraph-large")}
                      tag="div"
                    >
                      {"Front-end dev @bevolved.xyz"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "testimonial-card")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_006f636f-6f54-08ad-9b30-110f98c076f2-98c07669"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-avatar-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-cover")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfea_Testimonial%20Avatar%2001.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "margin-bottom-32")}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "paragraph-large")}
                      >
                        {
                          '"With Bevolved\'s personalized learning, I went from tech novice to data scientist. The real-world exercises boosted my confidence and experience. Bevolved transformed my career."'
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "label-large")}
                      tag="div"
                    >
                      {"Jasmin"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "paragraph-large")}
                      tag="div"
                    >
                      {"Data scientist @bevolved.xyz"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide
                className={_utils.cx(_styles, "slide")}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "testimonial-grid")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "testimonial-card")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_006f636f-6f54-08ad-9b30-110f98c076fe-98c07669"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-avatar-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-cover")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfeb_Testimonial%20Avatar%2002.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "margin-bottom-32")}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "paragraph-large")}
                      >
                        {
                          "\"Bevolved's flexibility allowed me to learn coding at my own pace. The platform's real-world challenges provided immediate application of my skills. I'm now a front-end developer, thanks to Bevolved.\""
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "label-large")}
                      tag="div"
                    >
                      {"Leo"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "paragraph-large")}
                      tag="div"
                    >
                      {"Front-end dev @bevolved.xyz"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "testimonial-card")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_006f636f-6f54-08ad-9b30-110f98c07708-98c07669"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "testimonial-avatar-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "image-cover")}
                        loading="lazy"
                        width="auto"
                        height="auto"
                        src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfea_Testimonial%20Avatar%2001.png"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "margin-bottom-32")}
                      tag="div"
                    >
                      <_Builtin.Paragraph
                        className={_utils.cx(_styles, "paragraph-large")}
                      >
                        {
                          '"With Bevolved\'s personalized learning, I went from tech novice to data scientist. The real-world exercises boosted my confidence and experience. Bevolved transformed my career."'
                        }
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "label-large")}
                      tag="div"
                    >
                      {"Jasmin"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "paragraph-large")}
                      tag="div"
                    >
                      {"Data scientist @bevolved.xyz"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.SliderSlide>
            </_Builtin.SliderMask>
            <_Builtin.SliderArrow
              className={_utils.cx(_styles, "left-arrow")}
              dir="left"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon-large")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfe9_Arrow%20Left%20Icon.svg"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderArrow
              className={_utils.cx(_styles, "right-arrow")}
              dir="right"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon-large")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfe8_Arrow%20Right%20Icon.svg"
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderNav className={_utils.cx(_styles, "slide-nav")} />
          </_Builtin.SliderWrapper>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "testimonial-background-circle")}
          data-w-id="006f636f-6f54-08ad-9b30-110f98c07717"
          tag="div"
        />
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
            <_Builtin.Block
              className={_utils.cx(_styles, "line-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "accent-3")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd2_BG%20Accent.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.Block>
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
                className={_utils.cx(_styles, "accent-7")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ecfd2_BG%20Accent.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
            <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
