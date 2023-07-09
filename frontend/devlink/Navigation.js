import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({
  as: _Component = _Builtin.NavbarWrapper,
  homeUrl = {},
  coursesUrl = {},
  connectWallerUrl = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-navigation")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "logo")}
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
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-link-wrapper")}
            tag="div"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
              {...homeUrl}
            >
              {"Home"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
              {...coursesUrl}
            >
              {"Courses"}
            </_Builtin.NavbarLink>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "menu-button-wrapper")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "button-primary-right-icon")}
            button={false}
            options={{
              href: "#",
            }}
            {...connectWallerUrl}
          >
            <_Builtin.Block tag="div">{"Grow your tree"}</_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "icon-regular")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%0A%3Cpath%20d%3D%22M15.187%2011.2362L11.0895%207.13873L12.1696%206.05859L18.1111%2012.0001L12.1696%2017.9416L11.0895%2016.8615L15.187%2012.764H5.88892V11.2362H15.187Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "menu-button")}
            tag="div"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
