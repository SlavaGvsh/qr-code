import React from "react";
import QRCode from "qrcode.react";
import QrCodegenerator from "./Components/Generate/QrCodegenerator.jsx";
import QrCodeScanner from "./Components/Scan/QrCodeScanner.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import { Routes, Route } from "react-router-dom";
import ScanHistory from "./Components/ScanHistory.jsx";
import GenerateHistory from "./Components/GenerateHistory.jsx";
const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generator" element={<QrCodegenerator />} />
        <Route path="/scunner" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
      </Routes>
      {/* <QrCodegenerator />
      <QrCodeScanner /> */}
    </div>
  );
};
export default Layout;
