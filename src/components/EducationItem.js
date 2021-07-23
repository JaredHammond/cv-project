import React, {Component} from 'react';
import Input from './Input';

class EducationItem extends Component {
    render() {
        return (
            <form>
                <Input name='school' type='text' change={this.props.change} label='University Name:' />
                <Input name='degree' type='text' change={this.props.change} label='Degree:' />
                <Input name='subject' type='text' change={this.props.change} label='Subject:' />
                <Input name='grad-year' type='text' change={this.props.change} label='Year of Graduation:' />
            </form>
        )
    }
}

export default EducationItem