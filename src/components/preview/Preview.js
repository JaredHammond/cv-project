import React from 'react';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExperience';

class Preview extends React.Component {
    render() {
    return (
        <div className='preview'>
            <PersonalInfo info={this.props.info.general} />
            <WorkExperience list={this.props.info.experienceList} />
            {/* <EduInfo /> */}
        </div>
    )
    }
}

export default Preview;