import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addReminder,
  deleteReminder,
  clearReminder,
} from "../actions/index.js";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: "",
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  clearReminder() {
    this.props.clearReminder();
  }

  renderReminders() {
    const { Reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {Reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
              </div>

              <div
                className="list-item delete-button"
                onClick={() => {
                  this.deleteReminder(reminder.id);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log("Date", this.state.dueDate);
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group reminder-form">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={(event) => this.setState({ text: event.target.value })}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.addReminder();
                }
              }}
            />
            <input
              type="datetime-local"
              className="form-control"
              onChange={(event) =>
                this.setState({ dueDate: event.target.value })
              }
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        <button className="btn btn-danger" onClick={() => this.props.clearReminder()}>
          Clear Reminders
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Reminders: state,
  };
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminder })(App);
