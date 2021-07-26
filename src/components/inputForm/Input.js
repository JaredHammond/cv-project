import React from 'react';

class Input extends React.Component {
    render() {
        const {name, type, change, label, value, id} = this.props;

        return (
            <label>
                {label}
                <input name={name} type={type} value={value} onChange={(e) => change(e, id)} />
            </label>
        )
    }
}

export default Input;