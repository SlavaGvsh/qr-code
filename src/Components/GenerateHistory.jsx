import { GENERATE_DATA } from "./contants";
import { QRCodeSVG } from "qrcode.react";

const GenerateHistory = () => {
  const scanData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
  return (
    <div>
      <h1>
        {scanData.map((data, index) => (
          <div key={index}>
            {data}
            <QRCodeSVG value={data} size={100} />
          </div>
        ))}
      </h1>
    </div>
  );
};
export default GenerateHistory;
