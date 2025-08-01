import React from "react";
import { InputProps, YouTubeItem } from "./types";
import YouTube from "react-youtube";
import { InputBox, ButtonBox, utubeIDGrabber } from "../";

const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 1,
    enablejsapi: 1,
  },
};

interface GetYoutubeProps extends Omit<InputProps, "value"> {
  value?: YouTubeItem[];
}

const GetYoutube: React.FC<GetYoutubeProps> = ({
  onHandleChange,
  title,
  name,
  value = [],
  viewOnly = false,
  disabled = false,
}) => {
  const [currentValue, setCurrentValue] = React.useState("");

  const keyDown = (e: React.KeyboardEvent) => {
    e.persist();
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleDelete = (index: number) => {
    const values = [...value];
    values.splice(index, 1);
    onHandleChange?.(name, values);
  };

  const handleSubmit = () => {
    if (!currentValue) {
      return;
    }

    const values = [
      ...value,
      { id: utubeIDGrabber(currentValue) || "", value: currentValue },
    ];
    onHandleChange?.(name, values);
    setCurrentValue("");
  };
  return (
    <div
      className="common common-get youtube-box youtube"
      style={{ position: "relative", marginTop: 20 }}
    >
      {!viewOnly && (
        <div>
          <div style={{ display: "flex", gap: "16px" }}>
            <InputBox
              name={name}
              value={currentValue}
              handleChange={(_name, value) => {
                setCurrentValue(value);
              }}
              label={title}
              disabled={disabled}
              type="search"
              customStyle={{ flex: 3 }}
              handleKeyDown={keyDown}
            />
            <ButtonBox
              type="button"
              label="Add"
              handleClick={handleSubmit}
              customBtnStyle={{ height: "50px" }}
              customStyle={{ marginTop: 0, marginBottom: 0 }}
            />
          </div>
        </div>
      )}
      {value?.length > 0 && (
        <div
          className="view-box"
          style={{
            border: "1px solid",
            padding: "10px",
            boxShadow: "5px 10px 8px 10px #888888",
          }}
        >
          <h3>Youtube Videos</h3>
          <div>
            {value.map((item: YouTubeItem, index: number) => {
              return (
                <div key={item.id} style={{ marginBottom: "40px" }}>
                  {!viewOnly && (
                    <div
                      className="text-center"
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        marginBottom: "1.2em",
                      }}
                      aria-hidden="true"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    >
                      Delete
                    </div>
                  )}
                  <div className="embed-responsive embed-responsive-16by9">
                    <YouTube
                      videoId={item.id}
                      opts={opts}
                      className="embed-responsive-item"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(GetYoutube);
