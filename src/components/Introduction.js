import { Button } from "@mui/material"
import { Box } from "@mui/system"
import styles from "../stylesheets/Introduction.module.css"

const Introduction = () => {
    return (
        <div>
        <Box  className = {styles.container}>
            <p>Hi, my name is</p>
            <h1 className={styles.header}>Shreyan Das.</h1>
            <h2 className={styles.subheader}>I like building things for the web.</h2>

            <p>I am an amateur software engineer who likes making cool stuff for the web. I am currently a student at the University of British Columbia majoring in Computer Science.</p>
            <h3>My interests include</h3>
        			<ul>
            		<li>Full Stack Web Development</li>
								<li>Machine Learning and Artificial Intelligence</li>
								<li>Brazillian Jiu Jitsu</li>
								<li>Esoteric Programming Languages</li>

        			</ul>
        </Box>

        
        </div>
    )
}

export default Introduction