import React from 'react';
import PersonalInfo from './PersonalInfo';

class Preview extends React.Component {
    render() {
    return (
        <div className='preview'>
            <PersonalInfo info={this.props.general} />
            {/* <WorkExperience />
            <EduInfo /> */}
        </div>
    )
    }
}

export default Preview;