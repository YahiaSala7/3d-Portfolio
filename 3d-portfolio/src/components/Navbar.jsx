import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import logo from "../assets/Ylogo.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../Constants/Constants";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const [active, setActive] = useState("");

  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  return (
    <AppBar position="static" sx={{ bgcolor: "rgb(29, 24, 54)" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={logo} alt="logo" style={{ width: "50px" }} />
            <Typography sx={{ color: "white" }}>Yahia Salah</Typography>
          </Stack>
        </NavLink>

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { sm: "none", xs: "none", lg: "flex", md: "flex" } }}>
          {navLinks.map((nav) => (
            <Button
              sx={{ color: active === nav.title ? "white" : "#f9fafbb0" }}
              key={nav.id}
              onClick={() => setActive(nav.title)}
              href={`#${nav.id}`}>
              {nav.title}
            </Button>
          ))}
        </Stack>
        <Stack
          sx={{
            display: { sm: "flex", lg: "none", md: "none" },
          }}>
          <IconButton {...bindTrigger(popupState)}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            {navLinks.map((nav) => (
              <MenuItem onClick={popupState.close} key={nav.id}>
                <Button
                  sx={{ color: active === nav.title ? "black" : "#121212c4" }}
                  onClick={() => setActive(nav.title)}
                  href={`#${nav.id}`}>
                  {nav.title}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
