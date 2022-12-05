import React from "react";
import PropTypes from "prop-types";
import styles from './YoutubeEmbed.module.css';

const YoutubeEmbed = ({ videoURI }, { videoTitle }) => (
  <div className={styles.YoutubeEmbed}>
    <iframe
      src={videoURI}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={videoTitle}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
