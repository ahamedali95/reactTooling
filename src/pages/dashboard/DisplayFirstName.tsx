import React, {useContext} from 'react';
import {FirstNameContext} from "./Dashboard";

const DisplayFirstName = () => {
    const firstName = useContext(FirstNameContext);
    console.log("first name rerendering")

    return (
      <h5>{`First Name: ${firstName}`}</h5>
    );
};

export default DisplayFirstName;