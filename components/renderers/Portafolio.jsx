import layoutStyles from "styles/Layout.module.css";
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Image from "next/image";

import { Element, scroller } from "react-scroll";
import Skill from "./Skill";
import Project from "./Project";

import PortafolioRenderer from "components/markdown-renderers/PortafolioMarkdownRenderer";

import { openEmail } from "components/Utils";

import t from "./locale";

import { useRouter } from "next/router";

/**
 *
 * @param {{portafolio:import("utils/portafolioCreator").Portafolio}} param0
 *  @returns
 */
export default function Portafolio({ portafolio = {} }) {
  const {
    title = `Portafolio`,
    text = ``,
    skills = [],
    projects = [],
    profilePictureSrc = "",
    email = "jondoe@example.com",
  } = portafolio;

  const scrollTo = (val) => {
    scroller.scrollTo(val, {
      duration: 500,
      smooth: true,
    });
  };

  const router = useRouter();
  const { locale } = router;

  t.setLanguage(locale);

  return (
    <main style={{ padding: 20 }}>
      <div className={layoutStyles.fullScreen}>
        <Container maxWidth={"lg"}>
          <Typography variant="h3" paragraph>
            {title}
          </Typography>
          <div style={{ height: 30 }} />
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6} style={{}}>
              <PortafolioRenderer>{text}</PortafolioRenderer>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "80px",
                    width: 300,
                    height: 300,
                  }}
                >
                  <Image src={profilePictureSrc} width={300} height={300} />
                </div>
              </div>
            </Grid>
          </Grid>
          <br />

          {skills.length > 0 && (
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: 20 }}
              onClick={() => scrollTo("skills")}
            >
              {t.skills}
            </Button>
          )}
          {projects.length > 0 && (
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: 20 }}
              onClick={() => scrollTo("projects")}
            >
              {t.myProjects}
            </Button>
          )}
          <Button
            color="primary"
            variant="text"
            style={{ textTransform: "lowercase" }}
            onClick={() => openEmail(email)}
          >
            {email}
          </Button>
        </Container>
      </div>

      <div style={{ marginTop: 100 }}>
        {skills.length > 0 && (
          <Container maxWidth="lg">
            <Element name="skills">
              <Typography variant="h3" paragraph>
                {t.skills}
              </Typography>
            </Element>
            {skills.map((skill, index) => {
              return (
                <Grid container style={{ marginBottom: 50 }} key={index}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Skill skill={skill} />
                  </Grid>
                </Grid>
              );
            })}
          </Container>
        )}
      </div>

      <div>
        {projects.length > 0 && (
          <Container maxWidth="lg" style={{ marginTop: 150 }}>
            <Divider />
            <Element name="projects" />
            <Typography variant="h3" paragraph style={{ marginBottom: 75 }}>
              {t.myProjects}
            </Typography>

            {projects.map((project, index) => {
              return (
                <div key={index} style={{ marginBottom: 75 }}>
                  <Project project={project} />
                </div>
              );
            })}
          </Container>
        )}
      </div>
      <br />
    </main>
  );
}
