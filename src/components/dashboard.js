import { ListGroup, ListGroupItem } from 'reactstrap';
import React, { Component } from 'react';

import Question from './question';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render(){
        return (
            <div>
                <h3>Questions</h3>
                <ListGroup>
                    {this.props.questionIds.map((id) => (
                        <ListGroupItem key={id}>
                            <Question id={id}/>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps({ questions }){
    console.log(questions);
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);