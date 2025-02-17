import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

export default function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <Typography sx={{color:"white" , fontSize:"20px", paddingBottom:"10px"}}>ISSUE HISTORY</Typography>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar sx={{backgroundColor :"#314154"}}>R</Avatar>
          <Typography noWrap>{message}</Typography>
        </Stack>
      </Item>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar sx={{backgroundColor :"#314154"}}>R</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>

      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar sx={{backgroundColor :"#314154"}}>R</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>

      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar sx={{backgroundColor :"#314154"}}r>R</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}