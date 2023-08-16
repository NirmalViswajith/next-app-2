'use client'
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(enteredvalue) {
    console.log(enteredvalue);
  }

  return(
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  );
}

export default NewMeetUpPage;