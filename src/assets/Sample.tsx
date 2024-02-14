import React, { type FC } from "react";
// import img from './assets/img';

type NavigationBarProps = {
    isIndex: boolean;
}
const Sample: FC<NavigationBarProps> = ({ isIndex }) => {
    // TODO: Actually implement a navigation bar
    const foo = 2
    const str1 = 'Br';

    console.log(str1.padEnd(5, '.'));
    const data = { name: { firstName: 'ddd' }}
    const { firstName } = data.name;
    return (
        <h1
            className="ff"
            id="dd"
        >
            {/*<img src={img} alt="ff" />*/}
            {
                foo ? `Hello from Redndndndndnnddnnndddact!${2+2}${firstName}` : null
            }
        </h1>
    );
}
export default Sample;