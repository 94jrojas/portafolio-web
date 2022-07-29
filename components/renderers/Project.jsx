import React, { useState } from "react";
import styles from "styles/Game.module.css";
import ReactPlayer from "react-player";
import {
  Grid,
  Hidden,
  Typography,
  Button,
  Chip,
  makeStyles,
  Link,
  IconButton,
} from "@material-ui/core";
import Image from "next/image";
import ProjectRenderer from "components/markdown-renderers/ProjectMarkdownRenderer";
import { Collapse } from "@material-ui/core";
import { ChipsContainer } from "./Tags";
import { GetAppRounded, GitHub } from "@material-ui/icons";

import { useRouter } from "next/router";
import t from "./locale";

/**
 *
 * @param {{project:import("utils/portafolioCreator").Project}} param0
 * @returns
 */
export default function Project({ project, children }) {
  const [showing, setShowing] = useState(true);

  const { pictureURL = null, media = [], tags = [], text = "" } = project;
  const {
    testTitle = "Test it yourself",
    testText = "Test the project yourself, for more information please contact me at: ",
    testContactEmail = null,
    downloadURL = null,
  } = project;

  const { locale } = useRouter();
  t.setLanguage(locale);

  return (
    <React.Fragment>
      <Typography variant="subtitle1">
        {project.title}
        {""}
        <Button
          variant="outlined"
          size="small"
          color="primary"
          style={{ marginLeft: 20 }}
          onClick={() => setShowing(!showing)}
        >
          {showing ? t.hide : t.show}
        </Button>
      </Typography>
      <Collapse in={showing}>
        {pictureURL == null ? (
          <React.Fragment>
            <ProjectRenderer>{text}</ProjectRenderer>
            {tags.length > 0 && <ChipsContainer chips={tags} />}
          </React.Fragment>
        ) : (
          <Grid container>
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <ProjectRenderer>{text}</ProjectRenderer>
              {tags.length > 0 && <ChipsContainer chips={tags} />}
            </Grid>

            <Hidden smDown>
              <Grid item xs={12} sm={12} md={5} lg={4}>
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
                      borderRadius: "30px",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      margin: 20,
                    }}
                  >
                    <Image src={pictureURL} layout="fill" objectFit="cover" />
                  </div>
                </div>
              </Grid>
            </Hidden>
          </Grid>
        )}

        {media.length > 0 && (
          <Grid container spacing={10} style={{ marginTop: 30 }}>
            {media.map((media, index) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Typography variant="subtitle2" style={{ marginBottom: 30 }}>
                    {media.title}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 30,
                    }}
                  >
                    <div className={styles.videoWrapper}>
                      <ReactPlayer
                        url={media.src}
                        className={styles.reactPlayer}
                        width="100%"
                        height="100%"
                        controls={true}
                      />
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        )}
        {downloadURL != null && (
          <React.Fragment>
            <Typography
              variant="subtitle2"
              style={{ marginBottom: 20, marginTop: 40 }}
            >
              {testTitle}
            </Typography>

            <ProjectRenderer>{testText}</ProjectRenderer>

            <Button
              color="primary"
              variant="contained"
              href={downloadURL}
              endIcon={<GetAppRounded />}
            >
              {t.download}
            </Button>
            {project.repositoryURL && (
              <Link
                href={project.repositoryURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="repository"
                  color="primary"
                  style={{ marginLeft: 20 }}
                >
                  <GitHub style={{ margin: 0 }} />
                </IconButton>
              </Link>
            )}
          </React.Fragment>
        )}
      </Collapse>
    </React.Fragment>
  );
}
