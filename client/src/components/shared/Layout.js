import AppBar from "./AppBar";
import Drawer from "./Drawer";

export default function Layout({ children, ...props }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Drawer open={open} toggleVisibility={(value) => setOpen(value)} />
      <AppBar openDrawer={() => setOpen(true)} />
      {children}
    </>
  );
}
