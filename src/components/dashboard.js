import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import React, { Component } from 'react';

import Question from './question';
import classnames from 'classnames';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    render() {
        return (
            <div>
                <Row> </Row>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                Unanswered questions
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('2'); }}>
                                Answered questions
                        </NavLink>
                        </NavItem>

                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId='1'>
                            {this.props.questionIds.map((id) => (
                                <Question id={id} />
                            ))}
                        </TabPane>
                        <TabPane tabId='2'>
                            <h3>Answered Questions</h3>
                        </TabPane>
                    </TabContent>
                
            </div>
        );
    }
}

function mapStateToProps({ questions }) {
    console.log(questions);
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);