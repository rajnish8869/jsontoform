import "./styles.css";
import React from "react";

export default function App() {
  const newdata = {
    layout: [
      {
        y: 0,
        x: 0,
        w: 4,
        h: 1,
        i: 699786553,
        id: 699786553,
        elementType: "text",
        fieldType: "text",
        placeholder: "Place your text here",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: "rajnish",
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        toolTip: "",
        defaultValue: "",
        label: "Text Type"
      },
      {
        y: 1,
        x: 0,
        w: 4,
        h: 1,
        i: 475815653,
        id: 475815653,
        elementType: "number",
        fieldType: null,
        placeholder: "Number",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: "123456789",
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Number Type"
      },
      {
        y: 2,
        x: 0,
        w: 4,
        h: 1,
        i: 124925049,
        id: 124925049,
        elementType: "date",
        fieldType: null,
        placeholder: "Date & Time",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Date & Time Type"
      },
      {
        y: 3,
        x: 0,
        w: 4,
        h: 1,
        i: 39628404,
        id: 39628404,
        elementType: "dropdown",
        fieldType: null,
        placeholder: "Drop Down",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [
          {
            choice: "rajnish",
            key: "name",
            id: 342668676
          },
          {
            choice: "24",
            key: "age",
            id: 141131036
          }
        ],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Drop Down Type"
      },
      {
        y: 4,
        x: 0,
        w: 4,
        h: 1,
        i: 817511190,
        id: 817511190,
        elementType: "section",
        fieldType: null,
        placeholder: "Section",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Section Type"
      },
      {
        y: 5,
        x: 0,
        w: 4,
        h: 1,
        i: 906292386,
        id: 906292386,
        elementType: "radio",
        fieldType: null,
        placeholder: "Radio Button",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [
          {
            choice: "male",
            key: "gender",
            id: 154881259
          },
          {
            choice: "female",
            key: "gender",
            id: 864821744
          }
        ],
        fieldName: "radio choice",
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Radio Type"
      },
      {
        y: 6,
        x: 0,
        w: 4,
        h: 1,
        i: 728522177,
        id: 728522177,
        elementType: "range",
        fieldType: null,
        placeholder: "Rating",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Rating Type"
      },
      {
        y: 7,
        x: 0,
        w: 4,
        h: 1,
        i: 152062121,
        id: 152062121,
        elementType: "file",
        fieldType: null,
        placeholder: "star rating",
        required: "true",
        edit: true,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: "star rating",
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Text Type"
      },
      {
        x: 0,
        y: 8,
        w: 4,
        h: 1,
        i: 155163424,
        id: 155163424,
        elementType: "checkbox",
        fieldType: null,
        placeholder: "Checkbox",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Checkbox Type"
      },

      {
        y: 0,
        x: 5,
        w: 4,
        h: 1,
        i: 909507057,
        id: 909507057,
        elementType: "grid",
        fieldType: null,
        placeholder: "Grid",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Grid Type"
      },
      {
        y: 1,
        x: 5,
        w: 4,
        h: 1,
        i: 895058466,
        id: 895058466,
        elementType: "image",
        fieldType: null,
        placeholder: "Image Upload",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Image Upload Type"
      },
      {
        y: 2,
        x: 5,
        w: 4,
        h: 1,
        i: 987626902,
        id: 987626902,
        elementType: "esign",
        fieldType: null,
        placeholder: "E Signature",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "E Signature Type"
      },
      {
        y: 3,
        x: 5,
        w: 4,
        h: 1,
        i: 989577757,
        id: 989577757,
        elementType: "location",
        fieldType: null,
        placeholder: "Location",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Loaction Type"
      },
      {
        y: 4,
        x: 5,
        w: 4,
        h: 1,
        i: 286922965,
        id: 286922965,
        elementType: "link",
        fieldType: null,
        placeholder: "Link",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Link Type"
      },
      {
        y: 5,
        x: 5,
        w: 4,
        h: 1,
        i: 438549252,
        id: 438549252,
        elementType: "qrcode",
        fieldType: null,
        placeholder: "QR Code",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "QR Code Type"
      },
      {
        y: 6,
        x: 5,
        w: 4,
        h: 1,
        i: 327135851,
        id: 327135851,
        elementType: "mathexp",
        fieldType: null,
        placeholder: "Math Exp.",
        required: "true",
        edit: false,
        multiSelect: false,
        VAxis: false,
        minChoices: null,
        maxChoices: null,
        choices: [],
        fieldName: null,
        date: null,
        accessablity: [],
        moved: false,
        static: false,
        label: "Math Exp Type"
      }
    ]
  };

  console.log(
    "newdata",
    newdata.layout.map((e) => e.label)
  );

  function renderFormGroups() {
    return newdata.layout.map((e) => {
      return (
        <div
          className="form-e"
          style={{
            position: "absolute",
            left: `${(e.x / 12) * 100}%`,
            top: `${(e.y / 12) * 100}%`
          }}
        >
          <label for={e.id} className={"col-sm-2 " + e.cssClassName}>
            {e.placeholder}
          </label>

          <div className="col-sm-8">
            {
              <input
                type={e.elementType}
                className="form-control"
                id={e.id}
                placeholder={e.placeholder}
                value={e.value}
              />
            }
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <div
        className="panel panel-primary"
        style={{ position: "relative", height: "100vh" }}
      >
        <div className="panel-heading">Dynamic Form using json data</div>
        <div
          className="panel-body"
          style={{ position: "relative", height: "100%" }}
        >
          <form className="form-horizontal">{renderFormGroups()}</form>
        </div>
      </div>
    </div>
  );
}
