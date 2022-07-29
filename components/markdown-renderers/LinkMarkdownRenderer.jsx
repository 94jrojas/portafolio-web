import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography, Button } from "@material-ui/core";
import { Hyperlink, openEmail } from "components/Utils";
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default function LinkMarkdownRenderer(props) {
  // console.log(props);
  if (validateEmail(props.children))
    return (
      <Button
        color="primary"
        variant="text"
        style={{ textTransform: "lowercase", marginBottom: 10 }}
        onClick={() => openEmail(props.children)}
      >
        {props.children}
      </Button>
    );

  return <Hyperlink {...props} />;
}
