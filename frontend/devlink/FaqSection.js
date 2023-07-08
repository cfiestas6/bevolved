import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FaqSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61ef7f445c03bc13aa721b01|6cb376de-284c-7410-ce8c-0a24feb5c7c4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":null,"originalId":"61ef7f445c03bc13aa721b01|b2fa8a5b-4123-591e-023d-4be7f078e570","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1646655879389},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61ef7f445c03bc13aa721b01|6cb376de-284c-7410-ce8c-0a24feb5c7c4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":null,"originalId":"61ef7f445c03bc13aa721b01|b2fa8a5b-4123-591e-023d-4be7f078e570","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1646655879390},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-item","originalId":"362479a4-ad8f-68b0-447f-d46739d7ca19","appliesTo":"CLASS"},"targets":[{"selector":".faq-item","originalId":"362479a4-ad8f-68b0-447f-d46739d7ca19","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666645118331},"e-34":{"id":"e-34","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".faq-item","originalId":"362479a4-ad8f-68b0-447f-d46739d7ca19","appliesTo":"CLASS"},"targets":[{"selector":".faq-item","originalId":"362479a4-ad8f-68b0-447f-d46739d7ca19","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1666645118371},"e-99":{"id":"e-99","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"362479a4-ad8f-68b0-447f-d46739d7ca12","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"362479a4-ad8f-68b0-447f-d46739d7ca12","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747904345},"e-101":{"id":"e-101","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"362479a4-ad8f-68b0-447f-d46739d7ca18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"362479a4-ad8f-68b0-447f-d46739d7ca18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747912634}},"actionLists":{"a-12":{"id":"a-12","title":"Click / Accordian Line / OPEN 🟢","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f319"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-12-n-19","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f317"]},"widthValue":24,"heightValue":24,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-12-n-17","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"362479a4-ad8f-68b0-447f-d46739d7ca19"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-12-n-15","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"362479a4-ad8f-68b0-447f-d46739d7ca19"},"globalSwatchId":"d12bbbfc","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-12-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-minus","selectorGuids":["b3f5c885-8f30-f307-ac6d-33d70bbe8b94"]},"value":0,"unit":""}},{"id":"a-12-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f317"]},"value":1,"unit":""}},{"id":"a-12-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f31d"]},"yValue":-10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-12-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f31d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-12-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f319"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-12-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f317"]},"widthValue":0,"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-12-n-18","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"362479a4-ad8f-68b0-447f-d46739d7ca19"},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-12-n-16","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"362479a4-ad8f-68b0-447f-d46739d7ca19"},"globalSwatchId":"8815a1b6","rValue":251,"bValue":157,"gValue":238,"aValue":1}},{"id":"a-12-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f31d"]},"value":1,"unit":""}},{"id":"a-12-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f31d"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-12-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-minus","selectorGuids":["b3f5c885-8f30-f307-ac6d-33d70bbe8b94"]},"value":1,"unit":""}},{"id":"a-12-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f317"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1630185343811},"a-13":{"id":"a-13","title":"Click / Accordian Line / CLOSE","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f319"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-13-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f317"]},"widthValue":24,"heightValue":24,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-13-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"362479a4-ad8f-68b0-447f-d46739d7ca19"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-13-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":true,"id":"362479a4-ad8f-68b0-447f-d46739d7ca19"},"globalSwatchId":"d12bbbfc","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-13-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-minus","selectorGuids":["b3f5c885-8f30-f307-ac6d-33d70bbe8b94"]},"value":0,"unit":""}},{"id":"a-13-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-plus","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f317"]},"value":1,"unit":""}},{"id":"a-13-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f31d"]},"yValue":-10,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-13-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-tab-content","selectorGuids":["a90870e2-1c21-bb78-b49d-1b937ba6f31d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1630185343811},"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FaqSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-regular")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-x-small")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "title-wrapper-center")}
          data-w-id="362479a4-ad8f-68b0-447f-d46739d7ca12"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "badge", "pink")}
            tag="div"
          >
            <_Builtin.Block tag="div">
              {"WHAT DO YOU WANT YO KNOW?"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2-heading")}
            tag="h2"
          >
            {"Some of the most frequently asked questions"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "faq-wrapper")}
          data-w-id="362479a4-ad8f-68b0-447f-d46739d7ca18"
          tag="div"
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"What is Bevolved?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "Bevolved is a decentralized and personalized online learning platform focused on tech and coding skills. We aim to democratize tech education, making it accessible, practical, and verifiable for all."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"Who can benefit from Bevolved?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "Whether you're a complete beginner in tech or looking to upskill, Bevolved is for you. Our platform is designed for all levels of experience and backgrounds."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"How is Bevolved personalized?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "At Bevolved, you control your learning path. You can choose the tech fields that fascinate you and learn at your own pace."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"How much does Bevolved cost?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "Learning on Bevolved is completely free. Our goal is to make tech education accessible to everyone."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"How does Bevolved prepare me for the real world?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "Bevolved includes real-world problem-solving exercises in its curriculum. These are designed to give you hands-on experience and increase your confidence."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"How does Bevolved ensure the verifiability of my learning?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "We leverage blockchain technology for credentials verification. This enhances the credibility of your qualifications."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "faq-item")}
            tag="div"
            data-hover={false}
            data-delay={0}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "faq-item-toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-title-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "label-large")}
                  tag="div"
                >
                  {"How can I start learning on Bevolved?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-icon-wrapper")}
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-plus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2019.5C7.85775%2019.5%204.5%2016.1423%204.5%2012C4.5%207.85775%207.85775%204.5%2012%204.5C16.1423%204.5%2019.5%207.85775%2019.5%2012C19.5%2016.1423%2016.1423%2019.5%2012%2019.5ZM11.25%2011.25H8.25V12.75H11.25V15.75H12.75V12.75H15.75V11.25H12.75V8.25H11.25V11.25Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "faq-minus")}
                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.65283%2011.2363H17.3473V12.7641H6.65283V11.2363Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "faq-content")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-tab-content")}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-regular")}
                >
                  {
                    "It's simple. Just create an account, choose your preferred tech fields, and start learning at your own pace!"
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
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
              className={_utils.cx(_styles, "accent-6")}
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
              className={_utils.cx(_styles, "accent-5")}
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
