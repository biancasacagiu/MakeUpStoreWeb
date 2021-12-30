import { Box, Button, TextField, Typography } from "@mui/material";
import classes from './SignIn.module.css'
import LoginImg from "./SVG/LoginImg";
import Logo from "./SVG/Logo";

const SignIn =  () => {
   return (  
    <Box className={classes.container}>
    <Logo />
    <LoginImg />
    <Typography className={classes.logo_text}>B&A</Typography>
    <Typography className={classes.discover_text}>Discover the world’s  top Make-Up brands at the most affordable prices.</Typography>
    <Typography className={classes.login_text}>Sign up to B&A</Typography>
    <Typography className={classes.first_name_text}>First Name</Typography>
    <Typography className={classes.last_name_text}>Last Name</Typography>
    <TextField
        hiddenLabel
        variant="filled"
        size="small"
        className={classes.first_name_textfield}

      />
      <TextField
        hiddenLabel
        variant="filled"
        size="small"
        className={classes.last_name_textfield}
      />
      <Typography className={classes.email_text}>Email Address</Typography>
      <TextField
        hiddenLabel
        variant="filled"
        size="small"
        className={classes.email_textfield}
      />
      <Typography className={classes.password_text}>Password</Typography>
      <TextField
        hiddenLabel
        variant="filled"
        size="small"
        className={classes.password_textfield}
      />
      <Button variant="contained" href="#contained-buttons" className={classes.create_account_button}>Create Account</Button>
      <Typography className={classes.policy_text}>This site is protected by reCAPTCHA and the google <span className={classes.policy_text_blue}>Privacy Policy</span> and the <span className={classes.policy_text_blue}> Terms of Service </span>apply</Typography>
    </Box>
   );
};

  export default SignIn;
