import React, { memo } from 'react';
import { Link } from '../components/StyledComponents'; // Ensure this path is correct
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material'; // Correct import

const ChatItem = ({
  avatar,
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessagesAlert,
  index = 0,
  handleDeleteChat, 
}) => {
  return (
    <Link
    sx={{padding:"0"}}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          position: 'relative',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: sameSender ? 'black' : 'white',
          color: sameSender ? 'white' : '#0f0f0f',
        }}
      >
        {/* Avatar */}
        {avatar && (
          <img
            src={avatar}
            alt="avatar"
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
        )}

        {/* Stack for Name and Messages */}
        <Stack  style={{display:"flex"}} >
          <Typography  sx={{backgroundColor: sameSender?'black':'white'}} >{name}</Typography>
          {newMessagesAlert && (
            <Typography>
               New Message
            </Typography>
          )}


          {isOnline && (
            <Box
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'green',
                position: 'absolute',
                top: '50%',
                right: '1rem',
                transform: 'translateY(-50%)',
              }}
            />
          )}
        </Stack>
      </Box>
    </Link>
  );
};

export default memo(ChatItem);
