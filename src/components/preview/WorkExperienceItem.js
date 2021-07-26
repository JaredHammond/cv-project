import React from 'react';

class WorkExperienceItem extends React.Component {
    render() {
        const {company, jobTitle, startYear, endYear} = this.props.info

        return (
            <div className='work-item'>
                <h3>{jobTitle}</h3>
                <h4>{company}</h4>
                <p>{startYear}-{endYear}</p>
            </div>
        )
    }
}

export default WorkExperienceItem;