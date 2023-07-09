import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0658bedc-d4e5-2d7e-8f4d-95a7680e6483","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0658bedc-d4e5-2d7e-8f4d-95a7680e6483","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747931209},"e-107":{"id":"e-107","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0658bedc-d4e5-2d7e-8f4d-95a7680e64b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0658bedc-d4e5-2d7e-8f4d-95a7680e64b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747942866},"e-109":{"id":"e-109","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0658bedc-d4e5-2d7e-8f4d-95a7680e64b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0658bedc-d4e5-2d7e-8f4d-95a7680e64b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1666747947812}},"actionLists":{"a-14":{"id":"a-14","title":"Scroll View -> 01","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-14-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-14-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-14-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":200,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-15":{"id":"a-15","title":"Scroll View -> 02","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-15-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809},"a-17":{"id":"a-17","title":"Scroll View -> 03","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":44,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-17-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-17-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"value":1,"unit":""}},{"id":"a-17-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":600,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"6333ba9ce586f2ff39e80f07|004ed479-d319-4f77-3da6-def33880d13a"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1665929437809}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "footer-grid")}
          data-w-id="0658bedc-d4e5-2d7e-8f4d-95a7680e6483"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-left-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-_0658bedc-d4e5-2d7e-8f4d-95a7680e6484-680e6481"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "margin-bottom-24")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-logo-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "text-logo")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a972d227b4063f09246fac_bevolved.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Paragraph>
                {"Where learning tech blossoms"}
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link-large")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {"hi@bevolved.xyz"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "avatar-wrapper")}
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
            className={_utils.cx(_styles, "footer-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-title")}
              tag="div"
            >
              {"PRODUCT"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Home"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Courses"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-block")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-title")}
              tag="div"
            >
              {"ACCOUNT"}
            </_Builtin.Block>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Login"}</_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Signup"}</_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Grid>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-line")}
          data-w-id="0658bedc-d4e5-2d7e-8f4d-95a7680e64b4"
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-justify")}
          data-w-id="0658bedc-d4e5-2d7e-8f4d-95a7680e64b5"
          tag="div"
        >
          <_Builtin.Paragraph>
            {"© 2023 Bevolved"}
            <_Builtin.Span className={_utils.cx(_styles, "font-weight-medium")}>
              {""}
            </_Builtin.Span>
          </_Builtin.Paragraph>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-socials")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-social-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-regular")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.0001%203.6665C7.39758%203.6665%203.66675%207.39734%203.66675%2011.9998C3.66675%2016.159%206.71425%2019.6065%2010.6984%2020.2323V14.4082H8.58175V11.9998H10.6984V10.164C10.6984%208.07567%2011.9417%206.92234%2013.8459%206.92234C14.7576%206.92234%2015.7109%207.08484%2015.7109%207.08484V9.13484H14.6609C13.6251%209.13484%2013.3026%209.77734%2013.3026%2010.4365V11.9998H15.6134L15.2442%2014.4082H13.3026V20.2323C17.2859%2019.6073%2020.3334%2016.1582%2020.3334%2011.9998C20.3334%207.39734%2016.6026%203.6665%2012.0001%203.6665Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-social-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-regular")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20.4683%206.71333C19.8321%206.99474%2019.1574%207.17956%2018.4666%207.26167C19.1947%206.82619%2019.7397%206.14084%2019.9999%205.33333C19.3166%205.74%2018.5674%206.025%2017.7866%206.17917C17.2621%205.61798%2016.5669%205.2458%2015.809%205.12049C15.0512%204.99517%2014.2732%205.12374%2013.596%205.48621C12.9187%205.84868%2012.3802%206.42474%2012.0642%207.12483C11.7481%207.82492%2011.6722%208.60982%2011.8483%209.3575C10.4625%209.28804%209.10686%208.92794%207.86933%208.30055C6.63179%207.67317%205.54003%206.79254%204.66492%205.71583C4.35516%206.24788%204.19238%206.85269%204.19326%207.46833C4.19326%208.67667%204.80826%209.74417%205.74326%2010.3692C5.18993%2010.3517%204.64878%2010.2023%204.16492%209.93333V9.97667C4.16509%2010.7814%204.44356%2011.5613%204.95313%2012.1842C5.46269%2012.8071%206.17199%2013.2346%206.96075%2013.3942C6.4471%2013.5334%205.90851%2013.5539%205.38576%2013.4542C5.60814%2014.1469%206.04159%2014.7527%206.62541%2015.1868C7.20924%2015.6208%207.9142%2015.8615%208.64159%2015.875C7.91866%2016.4428%207.0909%2016.8625%206.20566%2017.1101C5.32041%2017.3578%204.39503%2017.4285%203.48242%2017.3183C5.0755%2018.3429%206.93%2018.8868%208.82409%2018.885C15.2349%2018.885%2018.7408%2013.5742%2018.7408%208.96833C18.7408%208.81833%2018.7366%208.66667%2018.7299%208.51833C19.4123%208.02514%2020.0013%207.41418%2020.4691%206.71417L20.4683%206.71333Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-social-link")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-regular")}
                value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.0001%203.6665C14.2642%203.6665%2014.5467%203.67484%2015.4351%203.7165C16.3226%203.75817%2016.9267%203.89734%2017.4584%204.104C18.0084%204.31567%2018.4717%204.60234%2018.9351%205.06484C19.3588%205.48142%2019.6867%205.98533%2019.8959%206.5415C20.1017%207.07234%2020.2417%207.67734%2020.2834%208.56484C20.3226%209.45317%2020.3334%209.73567%2020.3334%2011.9998C20.3334%2014.264%2020.3251%2014.5465%2020.2834%2015.4348C20.2417%2016.3223%2020.1017%2016.9265%2019.8959%2017.4582C19.6873%2018.0147%2019.3594%2018.5187%2018.9351%2018.9348C18.5184%2019.3584%2018.0145%2019.6863%2017.4584%2019.8957C16.9276%2020.1015%2016.3226%2020.2415%2015.4351%2020.2832C14.5467%2020.3223%2014.2642%2020.3332%2012.0001%2020.3332C9.73592%2020.3332%209.45341%2020.3248%208.56508%2020.2832C7.67758%2020.2415%207.07341%2020.1015%206.54175%2019.8957C5.98535%2019.6869%205.48135%2019.359%205.06508%2018.9348C4.64125%2018.5183%204.31336%2018.0144%204.10425%2017.4582C3.89758%2016.9273%203.75841%2016.3223%203.71675%2015.4348C3.67758%2014.5465%203.66675%2014.264%203.66675%2011.9998C3.66675%209.73567%203.67508%209.45317%203.71675%208.56484C3.75841%207.6765%203.89758%207.07317%204.10425%206.5415C4.31278%205.98499%204.64075%205.48094%205.06508%205.06484C5.48147%204.64086%205.98544%204.31295%206.54175%204.104C7.07341%203.89734%207.67675%203.75817%208.56508%203.7165C9.45341%203.67734%209.73592%203.6665%2012.0001%203.6665ZM12.0001%207.83317C10.895%207.83317%209.83521%208.27216%209.0538%209.05356C8.2724%209.83496%207.83342%2010.8948%207.83342%2011.9998C7.83342%2013.1049%208.2724%2014.1647%209.0538%2014.9461C9.83521%2015.7275%2010.895%2016.1665%2012.0001%2016.1665C13.1052%2016.1665%2014.165%2015.7275%2014.9464%2014.9461C15.7278%2014.1647%2016.1667%2013.1049%2016.1667%2011.9998C16.1667%2010.8948%2015.7278%209.83496%2014.9464%209.05356C14.165%208.27216%2013.1052%207.83317%2012.0001%207.83317ZM17.4167%207.62484C17.4167%207.34857%2017.307%207.08362%2017.1117%206.88827C16.9163%206.69292%2016.6513%206.58317%2016.3751%206.58317C16.0988%206.58317%2015.8339%206.69292%2015.6385%206.88827C15.4432%207.08362%2015.3334%207.34857%2015.3334%207.62484C15.3334%207.9011%2015.4432%208.16606%2015.6385%208.36141C15.8339%208.55676%2016.0988%208.6665%2016.3751%208.6665C16.6513%208.6665%2016.9163%208.55676%2017.1117%208.36141C17.307%208.16606%2017.4167%207.9011%2017.4167%207.62484ZM12.0001%209.49984C12.6631%209.49984%2013.299%209.76323%2013.7678%2010.2321C14.2367%2010.7009%2014.5001%2011.3368%2014.5001%2011.9998C14.5001%2012.6629%2014.2367%2013.2988%2013.7678%2013.7676C13.299%2014.2364%2012.6631%2014.4998%2012.0001%2014.4998C11.337%2014.4998%2010.7012%2014.2364%2010.2323%2013.7676C9.76347%2013.2988%209.50008%2012.6629%209.50008%2011.9998C9.50008%2011.3368%209.76347%2010.7009%2010.2323%2010.2321C10.7012%209.76323%2011.337%209.49984%2012.0001%209.49984Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
