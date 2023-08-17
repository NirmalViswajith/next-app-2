'use client'
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function NewMeetupPage() { // Corrected "NewMeetUpPage" to "NewMeetupPage"
  async function addMeetupHandler(enteredValue) {
    console.log(enteredValue) // Corrected "enteredvalue" to "enteredValue"
    const response = await fetch('/api/meetups-data', {
      method: 'POST',
      body: JSON.stringify(enteredValue), // Corrected "enteredvalue" to "enteredValue"
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
}

export default NewMeetupPage; // Corrected "NewMeetUpPage" to "NewMeetupPage"
