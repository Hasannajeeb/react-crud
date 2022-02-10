import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

class QuestionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_url: props.api_url,
            description: "",
            level: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleLevelChange = this.handleLevelChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.formSubmit(event.target)
    }

    async formSubmit(formData) {
        var data = new FormData(formData);
        await fetch(this.state.api_url, {
            method: 'POST',
            mode: 'cors',
            body: data
        }).then(response => response.json())
            .then(response => this.props.updateQuestionList(response))
        this.setState({
            description: "",
            level: ""
        })

    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    handleLevelChange(event) {
        this.setState({
            level: event.target.value
        })
    }

    render() {
        return (
            <Grid container>
                <Grid item xs></Grid>
                <Grid item xs={10}>
                    <form
                        onSubmit={this.handleSubmit}
                        id='question_form'
                        autoComplete='off'>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    placeholder="Please enter a new question"
                                    minRows={5}
                                    id='task_input'
                                    variant='outlined'
                                    name='question[description]'
                                    style={{ width: "99%", borderRadius: "5px" }}
                                    onChange={this.handleDescriptionChange}
                                    value={this.state.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id='task_type'
                                    label='Question type'
                                    variant='outlined'
                                    type='text'
                                    name='question[level]'
                                    value={this.state.level}
                                    onChange={this.handleLevelChange}
                                ></TextField>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                    style={{ height: "100%" }}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </Grid >
                <Grid item xs></Grid>
            </Grid >
        )
    }
}

export default QuestionForm;

/*id='task_input'
label='Enter a new question'
variant='outlined'
type='text'
name='question[description]'
fullWidth */