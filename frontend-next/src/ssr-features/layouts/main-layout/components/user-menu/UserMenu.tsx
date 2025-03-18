"use client";

import { logout } from "@/common/utils/logout";
import {
  AccountBoxOutlined,
  LogoutOutlined,
  Person,
} from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import NextLink from "next/link";
import { JSX, useState } from "react";

const MENU_ITEM_SX = {
  gap: 1,
};

export default function UserMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-menu-popover" : undefined;

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <>
      <IconButton color="inherit" aria-label="user menu" onClick={handleClick}>
        <Person />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={MENU_ITEM_SX}
          component={NextLink}
          onClick={handleClose}
          href="/profile"
        >
          <AccountBoxOutlined />
          Profile
        </MenuItem>
        <MenuItem sx={MENU_ITEM_SX} onClick={handleLogout}>
          <LogoutOutlined />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
