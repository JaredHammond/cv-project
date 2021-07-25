import React, {Component} from 'react';
import Input from './Input';

class ExperienceItem extends Component {
    render() {

        return(
            <form>
                <Input name='company' sectId={this.props.id} type='text' change={this.props.change} label='Company' />
                <Input name='jobTitle' sectId={this.props.id} type='text' change={this.props.change} label='Job Title:' />
                <Input name='startYear' sectId={this.props.id} type='text' change={this.props.change} label='Start Year:' />
                <Input name='endYear' sectId={this.props.id} type='text' change={this.props.change} label='End Year:' />
            </form>
        )
    }
}

export default ExperienceItem;