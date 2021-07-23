import React, {Component} from 'react';
import Input from './Input';

class ExperienceItem extends Component {
    render() {

        return(
            <form>
                <Input name='comany' type='text' change={this.props.change} label='Company' />
                <Input name='jobTitle' type='text' change={this.props.change} label='Job Title:' />
                <Input name='startYear' type='text' change={this.props.change} label='Start Year:' />
                <Input name='endYear' type='text' change={this.props.change} label='End Year:' />
            </form>
        )
    }
}

export default ExperienceItem;