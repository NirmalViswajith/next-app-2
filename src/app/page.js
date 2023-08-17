import MeetupList from "../../components/meetups/MeetupList";
import Layout from "../../components/layout/Layout";

let DUMMY_LIST = [
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
function Homepage() {
  return (
    <Layout>
      <MeetupList meetuplist={DUMMY_LIST} />
    </Layout>
  );
}



export default Homepage;