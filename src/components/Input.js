import React from 'react';

class Input extends React.Component {
    render() {
        const {name, type, change, label, value, sectId} = this.props;

        return (
            <label>
                {label}
                <input name={name} data-id={sectId} type={type} value={value} onChange={change} />
            </label>
        )
    }
}

export default Input;