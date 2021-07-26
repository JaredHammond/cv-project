import React, {Component} from 'react';
import Input from './Input';

class ExperienceItem extends Component {
    render() {
        const {id, value} = this.props.itemInfo

        return(
            <form>
                <Input name='company' id={id} value={value} type='text' change={this.props.change} label='Company' />
                <Input name='jobTitle' id={id} value={value} type='text' change={this.props.change} label='Job Title:' />
                <Input name='startYear' id={id} value={value} type='text' change={this.props.change} label='Start Year:' />
                <Input name='endYear' id={id} value={value} type='text' change={this.props.change} label='End Year:' />
            </form>
        )
    }
}

export default ExperienceItem;