import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Menu,
  Logo,
  MenuList,
  MenuListItem,
  MenuListItemSeparator
} from "./styles.js";
import { Button } from "../../styles.js";

function Header() {
  const [routeSelected, setRouteSelected] = useState(window.location.pathname);

  function handleClick(event, route) {
    setRouteSelected(route);
  }

  return (
    <Menu>
      <a
        href="http://bit.ly/startupbase-megahack"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo />
      </a>
      <MenuList>
        <MenuListItem>
          <Link
            className={routeSelected === "/" ? "active" : null}
            to="/"
            exact="true"
            onClick={ev => handleClick(ev, "/")}
          >
            Início
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link className="disabled" to="/">
            Startups
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link className="disabled" to="/">
            Comunidades
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link
            className={(routeSelected === "/ranking" ? "active" : "") + " new"}
            to="/ranking"
            onClick={ev => handleClick(ev, "/ranking")}
          >
            Ranking
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link className="disabled" to="/">
            Programas
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link className="disabled" to="/">
            Estatísticas
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link className="disabled" to="/">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </MenuListItem>
        <MenuListItemSeparator />
        <MenuListItem>
          <Link className="disabled" to="/">
            <Button>Cadastre-se</Button>
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link className="disabled" to="/">
            Login
          </Link>
        </MenuListItem>
      </MenuList>
    </Menu>
  );
}

export default Header;
