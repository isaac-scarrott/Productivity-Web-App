import { ButtonGroup as MuiButtonGroup } from "@material-ui/core";

export default function ButtonGroup({ children, ...props }) {
  return (
    <MuiButtonGroup variant='outlined' color='primary' {...props}>
      {children}
    </MuiButtonGroup>
  );
}
