import React, {useContext} from 'react';

const Child2 = () => {
    console.log("second child rerendering")

    return (
        <h5>Child 2</h5>
    );
};

export default Child2;