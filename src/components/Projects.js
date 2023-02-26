import { Button, CardActions, Grid, Typography } from "@mui/material"
import { Card } from "@mui/material"
import {CardContent } from "@mui/material"
import styles from "../stylesheets/Projects.module.css"


const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>Here are some of the things I am currently working on</h2>
            <Grid container spacing ={2} className={styles.grid}>
                <Grid item xs={6}>
                    <Card className={styles.card}>
                        <CardContent className={styles.card}>
                            <Typography variant="h5">Self Driving Car WebApp</Typography>
                            
                            <ul>
                                <li>Used vanilla JS and CSS</li>
                                <li>Uses local storage to implement persistence</li>
                                <li>Implemented a basic neural network from scratch</li>
                            </ul>
                        </CardContent>

                        <CardActions>
                            <Button className = {styles.button} href="https://anilkapooruahh.github.io/self-driving-car/">Visit Project</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={styles.card}>
                        <CardContent className={styles.card}>
                            <Typography variant="h5">To Do List App</Typography>
                            
                            <ul>
                                <li>Used vanilla JS and CSS</li>
                                <li>Uses local storage to implement persistence</li>
                            </ul>
                        </CardContent>

                        <CardActions>
                            <Button className = {styles.button} href="https://anilkapooruahh.github.io/todo-app/">Visit Project</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={styles.card}>
                        <CardContent className={styles.card}>
                            <Typography variant="h5">Dungeons and Dragons Helper</Typography>
                            
                            <ul>
                                <li>Used Java</li>
                                <li>Implemented testing using jUnit</li>
                                <li>Keeps track of the state of a D&D game</li>
                            </ul>
                        </CardContent>

                        <CardActions>
                            <Button className = {styles.button} href="https://anilkapooruahh.github.io/todo-app/">Visit Project</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={styles.card}>
                        <CardContent className={styles.card}>
                            <Typography variant="h5">Spotify Network Mesh</Typography>
                            
                            <ul>
                                <li>tells you how similar a group of people's music tastes are</li>
                                <li>Used the MERN Stack</li>
                                <li>Future progress will include user authentication</li>
                            </ul>
                        </CardContent>

                        <CardActions>
                            <Button className = {styles.button} href="https://anilkapooruahh.github.io/todo-app/">Visit Project</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}


export default Projects