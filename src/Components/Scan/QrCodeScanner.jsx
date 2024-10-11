import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QrCodeScanner.module.css";
import { SCAN_DATA } from "../contants";

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const onScan = (result) => {
    // setResult(result);
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };
  // console.log(scanned);
  console.log(SCAN_DATA);

  const settings = {
    finder: false,
  };
  const StyleSettings = {
    container: {
      width: 350,
      height: 350,
    },
  };

  return (
    <div className={s.container}>
      <h1 className={s.result}>{scanned}</h1>

      <Scanner
        onScan={onScan}
        allowMultiple
        components={settings}
        styles={StyleSettings}
      />
      {/* <QrReader onScan={onScan} />
        {result && <p>{result}</p>} */}
    </div>
  );
};
export default QrCodeScanner;
