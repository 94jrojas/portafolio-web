import React, { Component, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "styles/ImagePreview.module.css";
import { Skeleton } from "@material-ui/lab";

export default function ImageThumbnail(props) {
  const onClick = (src, alt, type) => {
    if (props.onClick) props.onClick(src, alt, type === "tall");
  };

  const { type = "default", src, alt } = props;
  const [loading, setLoading] = useState(true);
  const image = useRef();

  useEffect(() => {
    if (image.current?.complete) setLoading(false);
  }, []);

  return (
    <div
      className={
        type === "default" ? styles.imageContainer : styles.imageContainerTall
      }
    >
      {/* {!loading && ( */}
      <Skeleton
        width={"100%"}
        variant="rect"
        style={{
          borderRadius: 30,
          position: "absolute",
          height: "100%",
        }}
      />
      {/* )} */}

      <Image
        itemRef={image}
        onLoad={() => {
          setLoading(true);
        }}
        onClick={() => onClick(src, alt, type)}
        layout="fill"
        src={src}
        alt={alt}
        draggable={false}
        className={styles.imageThumb}
      />
    </div>
  );
}
