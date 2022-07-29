import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography, Button } from "@material-ui/core";
import LinkMarkdownRenderer from "./LinkMarkdownRenderer";

export default function ProjectRenderer({ children }) {
  return (
    <ReactMarkdown
      components={{
        p: (props) => <Typography {...props} variant="body1" paragraph />,
        a: (props) => <LinkMarkdownRenderer {...props} />,
        link: (props) => <LinkMarkdownRenderer {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
