import "./styles.css";
import React from "react";
import QRCode from "react-qr-code";
// import data from "./data.json";
// import RichTextEditor from "react-rte";
import { Rating } from "react-simple-star-rating";
import newData from "./newData.json";

export default function App() {
  function renderFormElement() {
    return newData.map((e) => {
      if (e.elementType == "text") {
        if (e.fieldType == "email") {
          return (
            <div className="form-group" key={e.id}>
              <label>{e.fieldName}</label>
              <input
                type={e.fieldType}
                className="form-control"
                placeholder={e.placeholder}
                required={e.required}
                value={e.defaultValue}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          );
        } else if (e.fieldType == null) {
          return (
            <div className="form-group" key={e.id}>
              <label>{e.fieldName}</label>
              <input
                type={e.elementType}
                className="form-control"
                placeholder={e.placeholder}
                value={e.defaultValue}
                required={e.required}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          );
        }
      } else if (e.elementType == "number") {
        return (
          <div className="form-group" key={e.id}>
            <label>{e.fieldName}</label>
            <input
              type={e.elementType}
              className="form-control"
              placeholder={e.placeholder}
              value={e.defaultValue}
              required={e.required}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "date") {
        return (
          <div className="form-group" key={e.id}>
            <label>{e.fieldName}</label>
            <input
              type={e.elementType}
              className="form-control"
              placeholder={e.placeholder}
              value={e.defaultValue}
              required={e.required}
              style={{
                height: "100%",
                width: "100%",
              }}
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
        );
      } else if (e.elementType == "dropdown") {
        if (e.multiSelect == false) {
          return (
            <div className="form-group" key={e.id}>
              <label>{e.fieldName}</label>
              <select className="form-control " required={e.required}>
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
            <div className="form-group" key={e.id}>
              <label>{e.fieldName}</label>
              <select
                className="form-control"
                multiple
                required={e.required}
                size="1"
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
        }
      } else if (e.elementType == "radio") {
        return (
          <div key={e.id}>
            <div>
              <label>{e.fieldName}</label>
            </div>
            {e.choices.map((option) => {
              return (
                <div
                  key={option.id}
                  className={
                    e.VAxis == "true"
                      ? " form-check "
                      : " form-check form-check-inline"
                  }
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name={option.key}
                    id={e.id}
                    value={option.choice}
                    required={e.required}
                  />
                  <label className="form-check-label">{option.choice}</label>
                </div>
              );
            })}
          </div>
        );
      } else if (e.elementType == "rating") {
        if (e.ratingType == "slider") {
          return (
            <div className="form-group" key={e.id}>
              <label>{e.fieldName}</label>
              <input
                type={"range"}
                min="0"
                max={e.ratingScale}
                className="form-control-range"
                value={e.value}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          );
        } else if (e.ratingType == "star") {
          return (
            <div className="form-group" key={e.id}>
              <label>{e.fieldName}</label>
              <Rating ratingValue="5" iconsCount={e.ratingScale} />
            </div>
          );
        }
      } else if (e.elementType == "file") {
        return (
          <div className="form-group" key={e.id}>
            <label>{e.fieldName}</label>
            <input
              type={e.elementType}
              className="form-control-file"
              id={e.id}
              value=""
              required={e.required}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "image") {
        return (
          <div className="form-group" key={e.id}>
            <label>{e.fieldName}</label>
            <input
              type="file"
              accept="image/*"
              className="form-control-file"
              value=""
              required={e.required}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        );
      } else if (e.elementType == "checkbox") {
        return (
          <div>
            <div>
              <label>{e.fieldName}</label>
            </div>
            {e.choices.map((option) => {
              return (
                <div
                  key={option.id}
                  className={
                    e.VAxis == true
                      ? "form-check"
                      : " form-check form-check-inline"
                  }
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={option.key}
                    value={option.choice}
                    required={e.required}
                  />
                  <label className="form-check-label">{option.choice}</label>
                </div>
              );
            })}
          </div>
        );
      } else if (e.elementType == "qrcode") {
        return (
          <div className="form-group" key={e.id}>
            <div>
              <label>{e.fieldName}</label>
            </div>
            <QRCode value={e.fieldName} size={50} />
          </div>
        );
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
