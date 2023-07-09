import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Test.module.css";

export function Test({ as: _Component = _Builtin.Block, submitTest = {} }) {
  return (
    <_Component className={_utils.cx(_styles, "template-section")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-regular")}
        tag="div"
      >
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-08")}
            tag="div"
          >
            <_Builtin.Heading tag="h2">
              {"Exam: Programming in C: "}
              <br />
              {"The fundamentals"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom-32")}
            tag="div"
          >
            <_Builtin.Paragraph>
              {
                "Discover the foundation of programming. Learn to write, debug, and understand C code while building a solid foundation for future tech learning."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Grid
          className={_utils.cx(_styles, "template-style")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "template-style-menu")}
              tag="div"
            >
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "template-header")}
                    tag="div"
                  >
                    {"General"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#Color",
                  }}
                >
                  <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"Rules"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-bottom-04")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "template-header")}
                    tag="div"
                  >
                    {"Questions"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#Color",
                  }}
                >
                  <_Builtin.Block tag="div">{"1"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"2"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"3"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"4"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"5"}</_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "template-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">{"6"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "fb-style-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>
                    {
                      "You will create a function named x_strcmp that accepts two arguments: s1 and s2. Both arguments are pointers to strings. The function should return an integer based on the comparison between s1 and s2."
                    }
                  </_Builtin.Strong>
                  <br />
                  {"‍"}
                  <br />
                  {
                    "Your function should work like the standard strcmp function, which compares two strings lexicographically. The comparison is done character by character. If the two strings are identical, it returns 0. If the strings are not identical, it returns the difference between the ASCII values of the first pair of characters that differ in the two strings. If the ASCII value of the character in s1 is greater than s2, the returned value should be positive. If it's smaller, the returned value should be negative."
                  }
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>
                    {
                      "Create a function named x_strncmp that accepts three arguments: s1, s2, and n. The first two are pointers to strings, while n is an unsigned integer representing the maximum number of characters to be compared. Your function should return an integer based on the comparison between the first n characters of s1 and s2."
                    }
                    <br />
                    {"‍"}
                  </_Builtin.Strong>
                  <br />
                  {
                    "The function should behave similarly to the standard strncmp function, comparing the two strings lexicographically up to n characters. If the two strings are identical up to n characters, it returns 0. If they are not identical, it should return the difference between the ASCII values of the first pair of characters (up to n characters) that differ in the two strings."
                  }
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>{"Objective: "}</_Builtin.Strong>
                  {
                    "In this exercise, you will write a function in C that concatenates one string to the end of another. This is similar to the strcat function in the string.h library, but for this task, you will write your own implementation."
                  }
                  <br />
                  {"‍"}
                  <br />
                  <_Builtin.Strong>{"Description: "}</_Builtin.Strong>
                  {
                    "Create a function named x_strcat that accepts two arguments: dest and src. Both arguments are pointers to strings. The function should concatenate the string pointed to by src to the end of the string pointed to by dest."
                  }
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>
                    {
                      "In this exercise, you will write a function in C that concatenates a specified number of characters from one string to the end of another. This is similar to the strncat function in the string.h library, but for this task, you will write your own implementation."
                    }
                  </_Builtin.Strong>
                  <br />
                  {"‍"}
                  <br />
                  {
                    "Create a function named x_strncat that accepts three arguments: dest, src, and nb. The first two arguments are pointers to strings, while nb is an unsigned integer representing the maximum number of characters to be concatenated. The function should concatenate the string pointed to by src to the end of the string pointed to by dest up to nb characters."
                  }
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>
                    {
                      "In this exercise, you will write a function in C that calculates the factorial of a given integer iteratively. This is similar to using a factorial function in a math library, but for this task, you will write your own implementation."
                    }
                  </_Builtin.Strong>
                  <br />
                  {"‍"}
                  <br />
                  {
                    "Create a function named x_iterative_factorial that accepts one argument: nb. The argument is an integer for which the factorial is to be calculated. The function should return the factorial of nb."
                  }
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "template-header-block")}
                tag="div"
                id="Color"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Strong>
                    {
                      "In this exercise, you will write a function in C that calculates the power of a given integer recursively. This is similar to using a power function in a math library, but for this task, you will write your own implementation."
                    }
                  </_Builtin.Strong>
                  <br />
                  {"‍"}
                  <br />
                  {
                    "Create a function named x_recursive_power that accepts two arguments: nb and power. The argument nb is the base and power is the exponent. The function should return the result of nb raised to the power power."
                  }
                  <br />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "template-block")}
              tag="div"
            >
              <_Builtin.FormWrapper>
                <_Builtin.FormForm
                  name="wf-form-github_url"
                  data-name="github_url"
                  method="post"
                  id="wf-form-github_url"
                >
                  <_Builtin.FormBlockLabel htmlFor="name">
                    {"Github URL"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-field-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      width="auto"
                      height="auto"
                      loading="lazy"
                      src="https://uploads-ssl.webflow.com/64a8536d254922f4138ecf48/64a8536d254922f4138ed006_Form%20Icon%2003.svg"
                    />
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "text-field-plain")}
                      autoFocus={false}
                      maxLength={256}
                      name="github_url-2"
                      data-name="Github Url 2"
                      placeholder="https://github.com/"
                      type="text"
                      disabled={false}
                      required={false}
                      id="github_url-2"
                    />
                  </_Builtin.Block>
                  <_Builtin.FormButton
                    className={_utils.cx(
                      _styles,
                      "button-primary",
                      "width-100"
                    )}
                    type="submit"
                    value="Submit test"
                    data-wait="Please wait..."
                    {...submitTest}
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage>
                  <_Builtin.Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
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
          <_Builtin.Block
            className={_utils.cx(_styles, "line-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "accent-2")}
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
