import React, { Component } from 'react';

import { connect } from 'react-redux';
import { formatQuestion } from '../utils/_DATA';

class Question extends Component {
    render() {
        const question = this.props

        if (question === null) {
            return <p> This question does not exist</p>
        }

        const {
            id,
            author,
            timestamp,
            optionOne,
            optionTwo
        } = question

        return (
            <div>
                <h5>id</h5>
                <p>author</p>
                <p>timestamp</p>
                <p>optionOne</p>
                <p>optionTwo</p>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions},{id}){
    const question = questions[id]
    return {
        authedUser,
        question: question
        ? formatQuestion(question.optionOne,question.optionTwo, question.author)
        : null
    }
}

export default connect(mapStateToProps)(Question);