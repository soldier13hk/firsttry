// import React, { Component } from 'react';
// import { Text, TouchableWithoutFeedback, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import { CardSection } from '../../constants/commonUI';
//
// class Timer extends Component {
//   onRowPress() {
//     Actions.timeredit({ timer: this.props.timer });
//   }
//
//   render() {
//     const { timeritem } = this.props.timer;
//
//     return (
//       <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
//         <View>
//           <CardSection>
//             <Text style={styles.titleStyle}>
//               {timeritem}
//             </Text>
//           </CardSection>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }
//
// const styles = {
//   titleStyle: {
//     fontSize: 18,
//     paddingLeft: 15
//   }
// };
//
// export default Timer;
