import Link from "next/link";
import {
  SwipeableDrawer as MuiDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";

import Tomato from "../../../public/tomato.svg";

export default function Drawer({ open, toggleVisibility }) {
  return (
    <MuiDrawer
      anchor='left'
      open={open}
      onClose={() => toggleVisibility(false)}
      onOpen={() => toggleVisibility(true)}
    >
      <Link href='/pomodoro'>
        <ListItem button onClick={() => toggleVisibility(false)}>
          <ListItemIcon>
            <SvgIcon>
              <Tomato />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={"Pomodoro Timer"} />
        </ListItem>
      </Link>

      <Link href='/'>
        <ListItem button onClick={() => toggleVisibility(false)}>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary={"Kanban Week Schedule "} />
        </ListItem>
      </Link>
    </MuiDrawer>
  );
}
