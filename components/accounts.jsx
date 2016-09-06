import React from 'react'
import { connect } from 'react-redux'
import { addLead } from '../actions/leads'
import { deleteAccount } from '../actions/accounts'
import { Table, Button } from 'react-bootstrap'

const Accounts = ({accounts, dispatch}) => (
  <div>
    <h1>Accounts</h1>
	<Table striped bordered condensed hover> 
		<thead>
			<tr>
				<th>Name</th>
				<th>Phone #</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{accounts.map((account, index) =>
			<tr key={index}>
				<td>{account.name}</td>
				<td>{account.phone}</td>
				<td>
					<Button bsStyle="danger" onClick={e=>{
						dispatch(addLead({name:account.name,phone:account.phone,logs:account.logs}));
						dispatch(deleteAccount(index));
					}}>Delete</Button>
				</td>
			</tr>
			)}
		</tbody>
	</Table>
  </div>
)

let mapStateToProps = state => ({
  accounts: state.accounts
});

export default connect(mapStateToProps)(Accounts)