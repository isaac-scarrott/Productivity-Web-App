import { Button as MuiButton } from "@material-ui/core";

export default function Button({ children, ...props }) {
  return (
    <MuiButton variant='outlined' color='primary' {...props}>
      {children}
    </MuiButton>
  );
}
