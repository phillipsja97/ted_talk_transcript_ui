import React, { useEffect } from 'react';
import Data from '../Helpers/Data/talks';

export default function AllTalks() {

  useEffect(() => {
    Data.getAllTalks()
    .then((response) => {
      console.log(response);
    })
  })

  return (
    <h1>Hello</h1>
  )
}