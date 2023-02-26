import { AppBar, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "../stylesheets/Navbar.module.css"

const Navbar = () => {
  return (
    <AppBar className={styles.navbar}>
      <Typography variant="h6">Where you can find me</Typography>
      <a href="https://www.linkedin.com/in/shreyan-das-225907243/" ><LinkedInIcon className={styles.icon}/></a>
      <a href="https://github.com/anilkapooruahh" ><GitHubIcon className={styles.icon}/></a>
    </AppBar>
  )
}



export default Navbar 