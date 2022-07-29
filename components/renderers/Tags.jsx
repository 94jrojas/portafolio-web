import React from "react";
import { Chip, makeStyles, Link } from "@material-ui/core";

function LinkChip({ href, label }) {
  const clickable = href != null;
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Chip label={label} color="primary" clickable={clickable} />
    </Link>
  );
}

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

/**
 * @typedef {Object} TagInfo
 * @property   {String}  label
 * @property   {String}  href
 */

/**
 *
 * @param {String} label
 * @param {String} href
 * @returns {TagInfo}
 */
export function Tag(label, href) {
  return { label, href };
}

/**
 *
 * @param {{chips: Array<TagInfo>}} param0
 * @returns
 */
export function ChipsContainer({ chips }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.chipsContainer}>
        {chips.map((chip, index) => {
          return (
            <LinkChip href={chip.href} label={chip.label} key={`${index}`} />
          );
        })}
      </div>
    </React.Fragment>
  );
}
