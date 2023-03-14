import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class DatePickerScreen extends Component {
  constructor(props) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.props.route.params.setDate(JSON.stringify(date));
  }
  render() {
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});