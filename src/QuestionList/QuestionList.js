import React, { Component } from "react"
import QuestionItem from "./QuestionItem"
import QuestionForm from "./QuestionForm"
import Grid from "@mui/material/Grid"

const api_url = "http://localhost:3000/api/v1/questions"

class QuestionList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.updateQuestionList = this.updateQuestionList.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks() {
        fetch(api_url)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items.reverse()
                })
            });
    }

    updateQuestionList(item) {
        let _items = this.state.items
        _items.unshift(item)
        this.setState({
            items: _items
        })
    }

    deleteItem(item) {
        //delete the item remotely
        var deleteUrl = api_url + `/${item.id}`
        fetch(deleteUrl, {
            method: 'DELETE',
        }).then(() => {
            //client side delete
            var _items = this.state.items;
            var index = _items.indexOf(item);
            _items.splice(index, 1);
            this.setState({
                items: _items
            })
        })

    }

    render() {
        console.log(this.state.items)
        return (
            <div>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <QuestionForm api_url={api_url} updateQuestionList={this.updateQuestionList} />
                    </Grid>

                    <Grid item xs={12} id="question_list">
                        {this.state.items.map((item) => (
                            <QuestionItem
                                key={item.id}
                                item={item}
                                deleteItem={this.deleteItem} />
                        ))}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default QuestionList;