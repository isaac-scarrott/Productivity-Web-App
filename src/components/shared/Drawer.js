import { Drawer as MuiDrawer } from "@material-ui/core";

export default function Drawer({ open, closeDrawer }) {
  return (
    <MuiDrawer anchor='left' open={open} onClose={closeDrawer}>
      hi
    </MuiDrawer>
  );
}
