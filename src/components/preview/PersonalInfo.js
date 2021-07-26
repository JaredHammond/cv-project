import React from 'react';

class PersonalInfo extends React.Component {
    render() {
    const {name, email, phone} = this.props.info

    return (
        <div className='personal'>
            <h2>{name}</h2>
            <div className='personal-misc'>
                <p className='personal-misc-item'>{email}</p>
                <p className='personal-misc-item'>{phone}</p>
            </div>
        </div>
    )}
}

export default PersonalInfo;