import { Box, Button, TextField, Typography } from "@mui/material";
import classes from './Login.module.css'
import LoginImg from "./SVG/LoginImg";
import Logo from "./SVG/Logo";
import { Divider } from '@mui/material';

const Login =  () => {
   return (
    <Box className={classes.container}>
     <Logo />
     <LoginImg />
     <Typography className={classes.logo_text}>B&A</Typography>
     <Typography className={classes.discover_text}>Discover the world’s  top Make-Up brands at the most affordable prices.</Typography>
     <Typography className={classes.login_text}>Login to B&A</Typography>
     <Typography className={classes.email_address_text}>Email Address</Typography>
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
      <Button variant="contained" href="#contained-buttons" className={classes.login_button}>Login</Button>
      <Divider className={classes.divider_right}/>
      <Typography className={classes.or_text}>or</Typography>
      <Divider className={classes.divider_left}/>
      <Typography className={classes.need_account_text}>Need an account?</Typography>
      <Button variant="contained" href="#contained-buttons" className={classes.sign_up_button}>Sign up</Button>
      <Typography className={classes.policy_text}>This site is protected by reCAPTCHA and the google <span className={classes.policy_text_blue}>Privacy Policy</span> and the <span className={classes.policy_text_blue}> Terms of Service </span>apply</Typography> 
    </Box>
   );
};

  export default Login;
