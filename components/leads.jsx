import React from 'react'
import { connect } from 'react-redux'
import { addLead, deleteLead } from '../actions/leads'
import { addAccount } from '../actions/accounts'
import Logs from './logs'
import { Table, FormControl, Button, ButtonToolbar } from 'react-bootstrap'

const Leads = ({leads, dispatch}) => (
  <div>
    <h1>Leads</h1>
	<form onSubmit={e => {
		e.preventDefault();
		dispatch(addLead({name:e.target.name.value,phone:e.target.phone.value,logs:[]}));
		e.target.name.value = '';
		e.target.phone.value = '';
	}}>
		<Table striped bordered hover> 
			<thead>
				<tr>
					<th>Name</th>
					<th colSpan="2">Phone #</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<FormControl type="text" name="name" id="name" />
					</td>
					<td>
						<FormControl type="text" name="phone" id="phone" />
					</td>
					<td>
						<Button type="submit">Add</Button>
					</td>
				</tr>
				{leads.map((lead, index) =>
				<tr key={index}>
					<td>{lead.name}</td>
					<td>{lead.phone}</td>
					<td>
						<ButtonToolbar>
							<Logs logs={lead.logs}></Logs>
							<Button bsStyle="success" onClick={e=>{
								dispatch(addAccount({name:lead.name,phone:lead.phone,logs:lead.logs}));
								dispatch(deleteLead(index));
							}}>Convert to account</Button>
							<Button bsStyle="danger" onClick={e=>{dispatch(deleteLead(index))}}>Delete</Button>
						</ButtonToolbar>
					</td>
				</tr>
				)}
			</tbody>
		</Table>
	</form>
  </div>
)

let mapStateToProps = state => ({
  leads: state.leads
});

export default connect(mapStateToProps)(Leads)