import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Contact() {

  const location = useLocation();
 
  console.log(location)

  // return <div>{location.state?.name ?? "Contact"}</div>;
  return <div>{location.search?.name ?? "Contact"}</div>
}
