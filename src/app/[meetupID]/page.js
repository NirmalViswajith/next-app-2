'use client'

import { useParams } from 'next/navigation';
import MeetUpPage from '../../../components/meetups/MeetupPage';

const meetupList = [
  {
    id: '1',
    title: 'first meetup',
    image: 'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
    address: 'someaddress',
    description: 'lets meet up there'
  },
  {
    id: '2',
    title: 'second meetup',
    image: 'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
    address: 'someaddress 2.0',
    description: 'lets meet up there'
  }
]

function meetupDetails() {
  const params = useParams()
  console.log(params)
  const showDetails = meetupList.find((details) => details.id === params.meetupID);
  console.log(showDetails)

  if (!showDetails) {
    return <p>No meetup found</p>;
  }

  return (
    <MeetUpPage details={showDetails} />
  );
}

export default meetupDetails;
