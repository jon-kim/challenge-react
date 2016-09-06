import Immutable from 'immutable'

let sample = {
  name: "Mik Noj",
  phone: "416-123-0987",
  datetime: "2016-10-05 09:00:00"
};

export default function appointments (state = Immutable.List([sample]), action) {
	switch(action.type) {
		case 'addAppointment':
			return state.unshift(action.appointment);
		default:
			return state;
	}
}