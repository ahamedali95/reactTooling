import React, {useContext, memo} from 'react';

const Child1 = () => {
    console.log("first child rerendering")

    return (
        <h5>Child 1</h5>
    );
};

export default memo(Child1);