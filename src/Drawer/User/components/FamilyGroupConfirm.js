import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groupNameChanged, groupCreate } from '../actions';
import { Card, CardSection, Button,Input } from '../../../constants/commonUI';
import { Actions } from 'react-native-router-flux';


class FamilyGroupConfirm extends Component {
    onButtonPress() {
        //const { familygroup, ingroup } = this.props;

        //this.props.groupCreate({ familygroup, ingroup });
        Actions.familyGroupConfirm({ type: 'reset' });
    }
    onGroupNameChange(text) {

        this.props.groupNameChanged(text);
        console.log('props.email:'+this.props);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="GroupName"
                        placeholder="Group Name"
                        value={this.props.grouptext}
                        onChangeText={this.onGroupNameChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { grouptext } = state.todoForm;

    return { grouptext };
};

export default connect(mapStateToProps, {
    groupNameChanged, groupCreate
})(FamilyGroupConfirm);
