import { MongoClient } from "mongodb";
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "s0",
    title: "falana",
    image:
      "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    address: "sdkjfhsdjk nsd lsdhklsjkl",
    description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd",
  },
  {
    id: "s1",
    title: "falana",
    image:
      "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    address: "sdkjfhsdjk nsd lsdhklsjkl",
    description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd",
  },
  {
    id: "s2",
    title: "falana",
    image:
      "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    address: "sdkjfhsdjk nsd lsdhklsjkl",
    description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd",
  },
  {
    id: "s3",
    title: "falana",
    image:
      "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    address: "sdkjfhsdjk nsd lsdhklsjkl",
    description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd",
  },
];

const HomePage = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   console.log("req, res");

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await new MongoClient(
    "mongodb+srv://ayush:ayush@cluster0.iqtihnr.mongodb.net/meetups"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const data = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: data.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
  };
}

export default HomePage;
