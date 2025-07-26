import React from "react";
import { InputProps } from "./types";
import InputBox from "./InputBox";
import ButtonBox from "./ButtonBox";
import { generateRandomString } from "../utils/funcs";

// https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3
// https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg

interface AudioItem {
  id: string;
  value: {
    mp3: string;
    ogg: string;
  };
}

interface GetAudioProps extends Omit<InputProps, "value"> {
  value: AudioItem[];
}

const GetAudio: React.FC<GetAudioProps> = ({
  onHandleChange,
  title,
  name,
  value = [],
  viewOnly = false,
  disabled = false,
}) => {
  const [currentValue, setCurrentValue] = React.useState({ mp3: "", ogg: "" });

  const keyDown = (e: React.KeyboardEvent) => {
    e.persist();
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (
    type: "mp3" | "ogg",
    _name: string,
    val: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setCurrentValue((fV) => {
      return { ...fV, [type]: val };
    });
  };

  const handleDelete = (index: number) => {
    const values = [...value];
    values.splice(index, 1);
    onHandleChange?.(name, values);
  };

  const handleSubmit = () => {
    if (!currentValue.mp3 && !currentValue.ogg) {
      return;
    }

    const values = [
      ...value,
      { id: generateRandomString(10), value: currentValue },
    ];
    onHandleChange?.(name, values);
    setCurrentValue({ mp3: "", ogg: "" });
  };
  return (
    <div style={{ position: "relative", marginTop: 20 }}>
      {!viewOnly && (
        <div>
          <div style={{ display: "flex", gap: "16px" }}>
            <InputBox
              name={name}
              value={currentValue.mp3}
              handleChange={handleChange.bind(this, "mp3")}
              label={`${title} (*.mp3)`}
              disabled={disabled}
              type="search"
              customStyle={{ flex: 3 }}
              handleKeyDown={keyDown}
            />
            <InputBox
              name={name}
              value={currentValue.ogg}
              handleChange={handleChange.bind(this, "ogg")}
              label={`${title} (*.ogg)`}
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
          style={{
            border: "1px solid",
            padding: "10px",
            boxShadow: "5px 10px 8px 10px #888888",
          }}
        >
          <h3>{title}</h3>
          <div>
            {value.map(
              (
                item: { id: string; value: { mp3: string; ogg: string } },
                index: number
              ) => {
                return (
                  <div key={item.id} style={{ marginBottom: "40px" }}>
                    <div>
                      <audio controls>
                        {item.value.mp3 ? (
                          <source src={item.value.mp3} type="audio/mpeg" />
                        ) : (
                          <source src={item.value.ogg} type="audio/ogg" />
                        )}
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          srcLang="en"
                          label="English"
                          default
                        />
                      </audio>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <a
                        style={{ textDecoration: "none" }}
                        href={item.value.mp3 ? item.value.mp3 : item.value.ogg}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </div>
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
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const MemoizedGetAudio = React.memo(GetAudio);
export default MemoizedGetAudio;
