import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }

    return (
        <div style={{height: '40px'}}>
            {props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.msg)}:</strong> {props.alert.type}
            </div>}
        </div>
    )
}
