function validate(form)
{
	// clear out any prior messages on the page
	document.getElementById('message').innerHTML = '';
	// clear out any prior errors leftover from a previous run
	document.getElementById("emailError").innerHTML = '';
	document.getElementById("replyError").innerHTML = '';

	// determine if there are any new errors
	errors = 0;
	errors += validateEmail(form.email.value);
	errors += validateReply(form.reply.value);


	// if no errors, send message
	if (errors == 0)
	{



		// pop the story into the correct spot on the page
		document.getElementById('message').innerHTML = "Message Delivered";

	}

}

function validate2(form)
{

	errors = 0;
	errors += validateEmail(form.projects.value);
	if (errors == 0){
		
	}


}

function validateSelect(field) {
	if (field == '0'){
		document.getElementById('selectError').innerHTML = "Please select a value.";
		return 1;
	}

	return 0;
}

function validateEmail(field)
{
	if (field == '')
	{

		document.getElementById("emailError").innerHTML = 'Fill in an email address here!';
		return 1;
	}
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field))
	{

		document.getElementById("emailError").innerHTML = "Please enter a valid email address\n";
		return 1;
	}
	return 0;
}

function validateReply(field)
{
	if (field == '')
	{
		document.getElementById("replyError").innerHTML = 'Fill in a response here!';
		return 1;
	}
	return 0;

}

function validateName(field)
{
	if (field == '')
	{
		document.getElementById("nameError").innerHTML = 'Fill in a response here!';
		return 1;
	}
	else if (/^[a-z ,.'-]+$/.test(field)){
		document.getElementById("nameError").innerHTML = 'Please enter a valid name.';
		reutrn 1;
	}
	return 0;

}
