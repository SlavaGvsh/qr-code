import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QrCodegenerator.module.css";
import { GENERATE_DATA } from "../contants";

const QrCodegenerator = () => {
  const [value, setvalue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setvalue("");
  };

  const onChangeHandler = (event) => {
    setvalue(event.target.value);
    setResult("");
  };

  return (
    <div className={s.container}>
      <input
        placeholder="Enter text to generate QR code"
        type="text"
        value={value}
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" className={s.button} onClick={onClickHandler}>
        Generate QR
      </button>
      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};
export default QrCodegenerator;
