import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import React, { Component } from 'react';

import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const question = this.props.question

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
           
                <Card>

                    <CardBody>
                        <CardTitle>Would you rather...</CardTitle>
                        <CardText>{optionOne.text}: {optionOne.votes.length}</CardText>
                        <CardText>{optionTwo.text}: {optionTwo.votes.length}</CardText>
                    </CardBody>
                </Card>

        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    return {
        authedUser,
        question: question
        // ? formatQuestion(question.optionOne,question.optionTwo, question.author)
        // : null
    }
}

export default connect(mapStateToProps)(Question);