import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => (
  <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
    <Box position="fixed" width={450}>
      <Typography variant="h6" fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Avatar
          alt="Travis Howard"
          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <Avatar
          alt="John Doe"
          src="https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <Avatar
          alt="Trevor Belmont"
          src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Avatar
          alt="William Smith"
          src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Avatar
          alt="Steve Jobs"
          src="https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Avatar
          alt="Markus Aurelius"
          src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>
      <ImageList sx={{ overflow: 'hidden' }} cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2}>
        Latest Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={(
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </>
            )}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={(
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </>
            )}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={(
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </>
            )}
          />
        </ListItem>
      </List>
    </Box>
  </Box>
);

export default Rightbar;
