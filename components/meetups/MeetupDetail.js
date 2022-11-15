import React, { Fragment } from "react";
import { useRouter } from "next/router";

const MeetupDetail = (props) => {
  const router = useRouter();
  const { meetupid } = router.query;
  return (
    <Fragment>
      <img src={props.img} alt="asdasdsadas" />
      <h1>{props.title}</h1>
      <address>{props.title}</address>
      <p>{props.description}</p>
    </Fragment>
  );
};

export default MeetupDetail;
