import React from 'react';

class Input extends React.Component {
    render() {
        const {name, type, change, label} = this.props;

        return (
            <label>
                {label}
                <input name={name} type={type} onChange={change} />
            </label>
        )
    }
}

export default Input;