import React from 'react'
import { Table, FormControl, Button, Modal } from 'react-bootstrap'
import moment from 'moment'

let Logs = React.createClass({
	getInitialState: function () {
		return {
			logs: this.props.logs,
			log: '',
			show: false
		};
	},
	handleChange(e) {
		this.setState({ log: e.target.value });
	},
	close() {
		this.setState({ show: false });
	},

	open() {
		this.setState({ show: true });
	},
	addLog: function () {
		var datetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
		this.props.logs.push({ notes: this.state.log, datetime: datetime });
		this.setState({ log: '' });
		this.setState({ logs: this.props.logs });
	},
	render: function() {
		return (
			<div>
			<Button onClick={this.open}bsStyle="info">Logs</Button>
			<Modal show={this.state.show} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title>Logs</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Table striped>
						<thead>
							<tr>
								<th>Notes</th>
								<th>DateTime</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<FormControl type="text" value={this.state.log} onKeyUp={this.handleChange} onChange={this.handleChange} />
								</td>
								<td>
									<Button onClick={e => {
										e.preventDefault();
										this.addLog();
									}}>Add</Button>
								</td>
							</tr>
							{this.state.logs?this.state.logs.map((log, index) =>
							<tr key={index}>
								<td>{log.notes}</td>
								<td>{log.datetime}</td>
							</tr>
							):null}
						</tbody>
					</Table>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
			</div>
		);
	}
});

export default Logs;