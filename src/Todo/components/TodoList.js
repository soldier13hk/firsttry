
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListView, View} from 'react-native';
import { todoFetch } from '../actions';
import ListItem from './ListItem';
import Button from "react-native-button";
import {Actions} from "react-native-router-flux/index";

class TodoList extends Component {
    componentWillMount() {
        this.props.todoFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);

    }

    createDataSource({ todos }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(todos);
    }

    renderRow(todo) {
        return <ListItem todo={todo} />;
    }

    render() {
        return (

            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

        );
    }
}

const mapStateToProps = state => {
    const todos = _.map(state.todoList, (val, uid) => {
        return { ...val, uid };
    });

    return { todos };
};

export default connect(mapStateToProps, { todoFetch })(TodoList);
