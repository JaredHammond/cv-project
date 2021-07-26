import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';

class WorkExperience extends React.Component {
    render() {        
        return (
            <div className = 'workExperience'>
                {this.props.list.map(item => {
                    return <WorkExperienceItem key={item.id} info={item} />
                })}
            </div>
        )
    }
}

export default WorkExperience;