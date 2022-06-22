import React from "react";
import { Wrapper } from "./Styles";
import Logo from "../../assets/Logo.png";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login", { replace: true });
  };

  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div>
          <a href="https://mpago.la/2RW1MWq" target="_blank" rel="noreferrer">Donar</a>
          <div onClick={() => handleLogout()}>
            <FiLogOut fontSize={25} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
