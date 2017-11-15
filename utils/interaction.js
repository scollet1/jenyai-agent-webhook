'use strict';

// Define a webhook interaction.
class Interaction {

  constructor(raw) {
    this.sessionId = raw.sessionId;
    this.contexts = raw.result.contexts;
    this.action = raw.result.action;
    this.parameters = raw.result.parameters;
    this.messages = raw.result.fulfillment.messages;

    this.followupEvent = {
      data: { }
    };
  }

  /*  Return a parameter.

    PARAM
      key (string): name of the parameter

    RETURN
      (string | undefined) the parameter value if exists
  */
  getParameter(key) {

    return this.parameters[key];
  }

  /*  Conmpute the answer.

    PARAM
      none

    RETURN
      (object) contains the information to send back to the agent
  */
  get response() {

    let response = {
      contextOut: this.contexts,
      followupEvent: this.followupEvent,
      messages: this.messages
    };

    return response;
  }

  /*  Set the followup event.

    PARAM
      name (string): name of the event
      data (object): key-value representing the data held

    RETURN
      none
  */
  setFollowupEvent(name, data) {

    this.followupEvent.name = name;
    this.followupEvent.data = data;
  }
}

module.exports = Interaction;
