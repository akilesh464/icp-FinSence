import { complaint_log_backend } from 'declarations/complaint_log_backend';


function ComplainForm() {
	function handleSubmit(event) {
		event.preventDefault();

		const title = event.target.elements.title.value;
		const desc = event.target.elements.desc.value;
		event.target.elements.title.value = "";
		event.target.elements.desc.value = "";

		if ((title === "") || (desc === "")) {
			return;
		} else {
			complaint_log_backend.addComplaint(title, desc);
		}
	}

	return (
		<div className="form-class">
			<form action="#" onSubmit={handleSubmit}>
				<div className='data-field'>
					<input id="title" alt="Title" type="text" placeholder='Title' />
					<textarea id="desc" placeholder='Description'></textarea>
					{/* <input id="desc" alt="Description" type="textbox" placeholder='Description'/> */}
				</div>
				<button type="submit" className='submit'>Submit</button>
			</form>
		</div>
	);
}

export default ComplainForm;