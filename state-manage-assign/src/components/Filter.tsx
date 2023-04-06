import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Divider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import  Typography  from '@mui/material/Typography';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
        <button><FilterListIcon></FilterListIcon>Filter</button>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem >Filters</MenuItem>
                    <Divider></Divider>
                    <MenuItem>Status</MenuItem>
                        <Paper>
                            <Typography> 
                                <Checkbox {...label} > </Checkbox> All status
                            </Typography>
                            <Typography> 
                                <Checkbox {...label} > </Checkbox> Clear
                            </Typography>
                            <Typography> 
                                <Checkbox {...label} > </Checkbox> Consider
                            </Typography>
                        </Paper>
                    
                    <MenuItem >Adjudication</MenuItem>
                        <Paper>
                            <Typography> 
                                <Checkbox {...label} > </Checkbox> All 
                            </Typography>
                            <Typography> 
                                <Checkbox {...label} > </Checkbox> Engaged
                            </Typography>
                            <Typography> 
                                <Checkbox {...label} > </Checkbox> Pre adverse action
                            </Typography>
                        </Paper> 
                   </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
