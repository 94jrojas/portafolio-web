import { ChipsContainer } from "components/renderers/Tags";
import React from "react";
import { Typography } from "@material-ui/core";
import SkillsRenderer from "components/markdown-renderers/SkillsMarkdownRenderer";

/**
 *
 * @param {{skill:import("utils/portafolioCreator").Skills}} param0
 * @returns
 */
export default function Skill({ skill, children, ...rest }) {
  let { tags = [] } = skill;
  return (
    <React.Fragment>
      <Typography variant="subtitle1">{skill.title}</Typography>
      <SkillsRenderer>{skill.text}</SkillsRenderer>
      {tags && tags.length > 0 && <ChipsContainer chips={tags} />}
    </React.Fragment>
  );
}
