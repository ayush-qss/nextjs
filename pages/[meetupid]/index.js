import React, { Fragment } from "react";
import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      img={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await new MongoClient(
    "mongo db connection string"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}).toArray();
  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { meetupid } = context.params;

  const client = await new MongoClient(
    "mongo db connection string"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.findOne({ _id: ObjectId(meetupid) });
  console.log(meetups);

  client.close();

  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        image: meetups.image,
        title: meetups.title,
        address: meetups.address,
        description: meetups.description,
      },
    },
  };
}

export default MeetupDetails;
