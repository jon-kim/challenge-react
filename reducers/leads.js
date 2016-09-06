import Immutable from 'immutable'

let sample = {
  name: "Jon Kim",
  phone: "416-123-4567",
  logs: [
    { notes: "my first call", datetime: "2015-01-01 11:12:25" },
    { notes: "2nd call", datetime: "2016-01-01 09:12:25" }
  ]
};

export default function leads (state = Immutable.List([sample]), action) {
	switch(action.type) {
		case 'addLead':
			//do some db stuff
			return state.push(action.lead);
		case 'deleteLead':
			//do some db stuff
			return state.filter((lead, index) => index !== action.index);
		default:
			return state;
	}
}