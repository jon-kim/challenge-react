export function addLead(lead) {
	return {
		type: 'addLead',
		lead
	}
}

export function deleteLead(index) {
	return {
		type: 'deleteLead',
		index
	}
}

/*
export function addLog(index, log) {
	return {
		type: 'addLog',
		index,
		log
	}
}*/