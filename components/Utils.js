import { Link } from "@material-ui/core";

export function openEmail(email) {
  let href = `mailto:${email}`;
  const link = document.createElement("a");
  link.href = href;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function Hyperlink({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <em
        style={{
          textDecoration: "underline",
          fontWeight: 600,
          fontStyle: "normal",
        }}
      >
        {children}
      </em>
    </Link>
  );
}
