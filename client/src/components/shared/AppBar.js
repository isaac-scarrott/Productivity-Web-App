import { AppBar as MuiAppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: `${theme.palette.primary.main} url(/nav-bar-background.png)`,
    backgroundPosition: "center bottom",
    backgroundSize: "auto 150%",
  },
  profileIcon: {
    marginLeft: "auto",
  },
}));

export default function AppBar({ openDrawer }) {
  const { profileIcon, toolbar } = useStyles();

  return (
    <MuiAppBar className={toolbar} position='static'>
      <Toolbar>
        <IconButton color='inherit' aria-label='menu' onClick={openDrawer}>
          <MenuIcon />
        </IconButton>

        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          color='inherit'
          className={profileIcon}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}
