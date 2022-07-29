import React, { Component } from "react";
import { Backdrop, Dialog, Slide, StylesProvider } from "@material-ui/core";
import Image from "next/image";
import styles from "styles/ImagePreview.module.css";

class ImagePreview extends Component {
  state = {};
  render() {
    let {
      images = [],
      title = "image",
      open,
      onClose,
      tall = false,
    } = this.props;

    return (
      <Dialog
        open
        fullWidth
        maxWidth={!tall ? "lg" : "sm"}
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        {images.length > 0 && (
          <Image
            src={images[0]}
            alt={title}
            width={!tall ? 1920 : 1080}
            height={!tall ? 1080 : 1920}
            className={styles.image}
          />
        )}
      </Dialog>
    );
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ImagePreview;
