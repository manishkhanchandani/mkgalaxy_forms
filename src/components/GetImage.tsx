import React from "react";
import InputBox from "./InputBox";
import ButtonBox from "./ButtonBox";
import { generateRandomString } from "../utils/funcs";
import { ImageItem, InputProps } from "./types";

interface GetImageProps extends Omit<InputProps, "value"> {
  value?: ImageItem[];
}

const GetImage: React.FC<GetImageProps> = ({
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
      { id: generateRandomString(10), value: currentValue },
    ];
    onHandleChange?.(name, values);
    setCurrentValue("");
  };
  return (
    <div
      className="common common-get image-box"
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
          <h3>{title}</h3>
          <div>
            {value.map((item: ImageItem, index: number) => {
              return (
                <div key={item.id} style={{ marginBottom: "40px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "400px",
                    }}
                  >
                    <a href={item.value} target="_blank" rel="noreferrer">
                      <img
                        src={item.value}
                        alt="Preview"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "contain" }}
                      />
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
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const MemoizedGetImage = React.memo(GetImage);
export default MemoizedGetImage;
