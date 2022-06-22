import { useState } from "react";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("var(--purple-color)");

  return (
    <div className="sweet-loading">
      <BounceLoader color={color} loading={loading} css={override} size={75} />
    </div>
  );
}

export default Loader;