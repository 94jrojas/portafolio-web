import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@material-ui/core";
import { Hyperlink } from "components/Utils";
import LinkMarkdownRenderer from "./LinkMarkdownRenderer";

export default function PortafolioRenderer({ children }) {
  return (
    <ReactMarkdown
      components={{
        p: (props) => (
          <Typography {...props} variant="body1" style={{ marginBottom: 30 }} />
        ),
        a: (props) => <LinkMarkdownRenderer {...props} />,
        link: (props) => <LinkMarkdownRenderer {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
