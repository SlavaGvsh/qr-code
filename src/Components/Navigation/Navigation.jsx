import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to="/generator">generate qr code</Link>
      <Link to="/scunner">scan qr code</Link>
      <Link to="/generateHistory">generation history </Link>
      <Link to="/scanHistory">scan history</Link>
    </nav>
  );
};
export default Navigation;
