import React from "react";

// videoFooter css
import "./VideoFooter.css";

// material icons
import MusicNoteIcon from "@mui/icons-material/MusicNote";

//ticker
import Ticker from "react-ticker";

//record image
import record from "../../Assets/recording/record.png";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img src={record} alt="record-img" className="videoFooter__record" />
    </div>
  );
};

export default VideoFooter;
