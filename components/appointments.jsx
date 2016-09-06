import React from 'react'
import { connect } from 'react-redux'
import { addAppointment } from '../actions/appointments'
import moment from 'moment';
import { Table, FormControl, Button } from 'react-bootstrap'
import DateTimePicker from 'react-bootstrap-datetimepicker';

const Appointments = ({appointments, dispatch}) => (

	<form onSubmit={e => {
		e.preventDefault();
		dispatch(addAppointment(
			{name:e.target.name.value,
			 phone:e.target.phone.value,
			 datetime:e.target.dateTime.value
			}));
		e.target.name.value = '';
		e.target.phone.value = '';
		e.target.dateTime.value = '';
	}}>
		<Table striped>
			<thead>
				<tr>
					<th>Name</th>
					<th>Phone</th>
					<th>DateTime</th>
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
						<DateTimePicker className="dt" inputFormat="YYYY-MM-DD HH:mm:ss"
							onChange={e => {
								document.getElementById("dateTime").value = moment.unix(e/1000).format('YYYY-MM-DD HH:mm:ss')
							}}
						/>
						<input type="hidden" id="dateTime" name="dateTime" />
					</td>
					<td>
						<Button type="submit">Add</Button>
					</td>
				</tr>
				
				{appointments.map((appointment, index) =>
					<tr key={index}>
						<td>{appointment.name}</td>
						<td>{appointment.phone}</td>
						<td>{appointment.datetime}</td>
					</tr>
				)}
			</tbody>
		</Table>
	</form>
)

let mapStateToProps = state => ({
	appointments: state.appointments
});

export default connect(mapStateToProps)(Appointments)