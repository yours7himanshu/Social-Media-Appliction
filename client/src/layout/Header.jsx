import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import React, { Suspense } from "react";
import { orange } from "../constants/color";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import IconBtn from "../shared/IconBtn";
import { lazy } from "react";
import ChatList from "../specific/ChatList";

const Search = lazy(() => import("../shared/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

function Header() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [group, setGroup] = useState(false);
  const [notification, setNotification] = useState(false);
  const params = useParams();

  const chatId = params.chatId;

  // function for navigating to the group
  const navigateToGroup = () => navigate("/groups");

  const handleMobile = () => {
    setMobile((prev) => !prev);
  };




// functions for handling delete chats
const handleDeleteChat = (e)=>{

  e.preventDefault();
  console.log("Delete Chat",_id,groupChat);
}




  const openSearchDialog = () => {
    setSearch((prev) => !prev);
  };

  const logoutHandler = () => {
    console.log("Hanlding logout feature");
  };

  const openNewGroup = () => {
    setGroup((prev) => !prev);
  };

  const openNotifications = () => {
    setNotification((prev) => !prev);
  };

  return (
    <Box>
      <Box sx={{ flexGlow: 1 }} height={"4rem"} />
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Chat Application
          </Typography>

          <Box sx={{ display: { xs: "block", sm: "none" } }} height={"4rem"}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* for search button */}
          <Box>
            <IconBtn
              title="Search"
              icon={<SearchIcon />}
              onClick={openSearchDialog}
            />

            {/* for new group */}
            <IconBtn
              title="New Group"
              icon={<AddIcon />}
              onClick={openNewGroup}
            />

            {/* tool tip is a very imporant mui feature use this in all the projects */}
            {/* for managing group icons */}
            <IconBtn
              title="Manage Group"
              icon={<GroupIcon />}
              onClick={navigateToGroup}
            />

            {/* icon for notificaions */}
            <IconBtn
              title="Notifications"
              icon={<NotificationsIcon />}
              onClick={openNotifications}
            />

            <IconBtn
              title="Logout"
              icon={<LogoutIcon />}
              onClick={logoutHandler}
            />
          </Box>
        </Toolbar>

      </AppBar>
          <ChatList chats={[1,2,3,4,5,6]} chatId={chatId}
          newMessagesAlert={[
            {
              chatId,
              count:4
            }
          ]}
          onlineUsers={["1","2"]}
          handleDeleteChat={handleDeleteChat}
          />

      {/* lazy loading ka use kiya kyuki jb search ki need hii nhi h tb q hi import krna isliye dynamically hi best h */}
      {search && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}

      {notification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}

      {group && (
        <Suspense fallback={<Backdrop open />} >
          <NewGroupDialog/>
        </Suspense>
      )}
    </Box>
  );
}

export default Header;
