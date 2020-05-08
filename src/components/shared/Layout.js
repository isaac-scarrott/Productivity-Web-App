import AppBar from "./AppBar";
import Drawer from "./Drawer";

export default function Layout({ children, ...props }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Drawer open={open} closeDrawer={() => setOpen(false)} />
      <AppBar openDrawer={() => setOpen(true)} />
      {children}
    </>
  );
}
