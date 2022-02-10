import react from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { StylesProvider, createGenerateClassName, makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles({
    root: {
        height: "auto",
        padding: "2em",
        margin: "1em"
    }
})
export default function QuestionItem(props) {
    const classes = useStyles();

    function handleDelete() {
        console.log("You clicked delete")
        console.log(props.item)
        props.deleteItem(props.item)
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={9}>
                <Paper elevation={3} className={classes.root}>
                    {props.item.description}
                    <hr />
                    {props.item.level}
                    <hr />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={handleDelete}>
                        Delete
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}