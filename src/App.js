import "./styles.css";
import React from "react";
import QRCode from "react-qr-code";
import data from "./data.json";

export default function App() {
  function renderFormElement() {
    console.log("data.layout", data);
    return data.map((e) => {
      if (
        (e.elementType == "text" && e.fieldType == "text") ||
        (e.elementType == "number" && e.fieldType == null) ||
        (e.elementType == "date" && e.fieldType == null)
      ) {
        return (
          <div
            class="form-group"
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <label for={e.id}>{e.placeholder}</label>
            <input
              type={e.elementType}
              className="form-control"
              id={e.id}
              placeholder={e.placeholder}
              value={e.value}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "text" && e.fieldType == "email") {
        return (
          <div
            class="form-group"
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <label for={e.id}>{e.placeholder}</label>
            <input
              type={e.fieldType}
              className="form-control"
              id={e.id}
              placeholder={e.placeholder}
              value={e.value}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "dropdown") {
        if (e.multiSelect == true) {
          return (
            <div
              class="form-group"
              style={{
                position: "absolute",
                left: `${(e.x / 12) * 100}%`,
                top: `${(e.y / 10) * 100}%`,
                height: `${(e.h / 10) * 100}%`,
                width: `${100 / e.w}vw`,
              }}
            >
              <label for={e.id}>{e.placeholder}</label>
              <select
                class="form-control selectpicker"
                id="exampleFormControlSelect1"
                multiple
              >
                <option value="">Select</option>
                {e.choices.map((option) => {
                  return (
                    <option value={option.key} key={option.id}>
                      {option.choice}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        } else {
          return (
            <div
              class="form-group"
              style={{
                position: "absolute",
                left: `${(e.x / 12) * 100}%`,
                top: `${(e.y / 10) * 100}%`,
                height: `${(e.h / 10) * 100}%`,
                width: `${100 / e.w}vw`,
              }}
            >
              <label for={e.id}>{e.placeholder}</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option value="">Select</option>
                {e.choices.map((option) => {
                  return (
                    <option value={option.key} key={option.id}>
                      {option.choice}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        }
      } else if (e.elementType == "radio") {
        return (
          <div
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <div>
              <label for={e.id}>{e.label}</label>
            </div>
            {e.choices.map((option) => {
              return (
                <div
                  className={
                    e.VAxis == true
                      ? " form-check "
                      : " form-check form-check-inline"
                  }
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id={e.id}
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    {option.choice}
                  </label>
                </div>
              );
            })}
          </div>
        );
      } else if (e.elementType == "checkbox") {
        return (
          <div
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <div>
              <label for={e.id}>{e.label}</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                name="inlineRadioOptions"
                id={e.id}
                value="option1"
              />
            </div>
            <label for={e.id}>{e.placeholder}</label>
          </div>
        );
      } else if (e.elementType == "range") {
        return (
          <div
            class="form-group"
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              // height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <label for={e.id}>{e.placeholder}</label>
            <input
              type={e.elementType}
              className="form-control-range"
              id={e.id}
              value={e.value}
              // style={{
              //   height: "100%",
              //   width: "100%",
              // }}
            />
          </div>
        );
      } else if (e.elementType == "file") {
        return (
          <div
            class="form-group"
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <label for={e.id}>{e.placeholder}</label>
            <input
              type={e.elementType}
              class="form-control-file"
              id={e.id}
              value={e.value}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "image") {
        return (
          <div
            class="form-group"
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <label for={e.id}>{e.placeholder}</label>
            <input
              type="file"
              accept="image/*"
              class="form-control-file"
              id={e.id}
              value={e.value}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "qrcode") {
        return (
          <div
            class="form-group"
            style={{
              position: "absolute",
              left: `${(e.x / 12) * 100}%`,
              top: `${(e.y / 10) * 100}%`,
              height: `${(e.h / 10) * 100}%`,
              width: `${100 / e.w}vw`,
            }}
          >
            <div>
              <label for={e.id}>{e.label}</label>
            </div>
            <QRCode value={e.placeholder} size={50} />
          </div>
        );
      } else {
      }
    });
  }

  return (
    <div
      className="container"
      style={{ position: "relative", height: "100vh", width: "100vw" }}
    >
      <form className="form">{renderFormElement()}</form>
    </div>
  );
}
