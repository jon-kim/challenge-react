import Immutable from 'immutable'

let sample = {
  name: "Kim Jon",
  phone: "416-987-6543",
  calls: [
    { notes: "Lorem ipsum dolor sit amet, est in civibus senserit ocurreret.", datetime: "2016-06-01 13:12:25" },
    { notes: "est in civibus senserit ocu.", datetime: "2016-09-01 09:11:15" }
  ]
};

export default function accounts (state = Immutable.List([sample]), action) {
	switch(action.type) {
		case 'addAccount':
			//do some db stuff
			return state.unshift(action.account);
		case 'deleteAccount':
			//do some db stuff
			return state.filter((account, index) => index !== action.index)
		default:
			return state;
	}
}