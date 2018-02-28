import Immutable from 'immutable';

export const TimerState = Immutable.fromJS({
    timers: [],
    timer: {
        id : '',
        time: '',
        updatedAt: '',
        operation_state: '',
    }
});

