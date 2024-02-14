import React, { type FC } from "react";
import { Sample } from 'Assets';
import { img } from 'Components';

type NavigationBarProps = {
    isIndex: boolean;
}
const NavigationBar: FC<NavigationBarProps> = ({ isIndex }) => {
    // TODO: Actually implement a navigation bar
    const foo = 2
    const data = { name: { firstName: 'ddd' }}
    const { firstName } = data.name;
    return (
        <h1
            className="ff"
            id="dd"
        >
            <img src={img} alt="ff" />

            {
                foo ? `Hello from React!${2+2}${firstName}` : null
            }
            <Sample isIndex />
        </h1>
    );
}
export default NavigationBar;