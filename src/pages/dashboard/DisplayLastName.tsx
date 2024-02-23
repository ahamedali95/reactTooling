import React, {FC, useContext} from 'react';
import {FirstNameContext} from "./Dashboard";

type DisplayLastNameProps = {
    lastName: string;
}
const DisplayLastName: FC<DisplayLastNameProps> = (props) => {
    // const {lastName} = useContext(FirstNameContext);
    console.log("last name rerendering")
    return (
        <h5>{`Last Name: ${props.lastName}`}</h5>
    );
};

export default DisplayLastName;