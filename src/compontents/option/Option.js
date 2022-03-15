import React from 'react';

function Option({children, Value}) {

    return (
        <option value={Value}>{children}</option>
    );
}

export default Option