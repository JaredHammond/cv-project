import React, {Component} from 'react';
import Input from './Input';

class EducationItem extends Component {
    render() {
        const {id, value} = this.props.itemInfo

        return (
            <form>
                <Input name='school' id={id} value={value} type='text' change={this.props.change} label='University Name:' />
                <Input name='degree' id={id} value={value} type='text' change={this.props.change} label='Degree:' />
                <Input name='subject' id={id} value={value} type='text' change={this.props.change} label='Subject:' />
                <Input name='gradYear' id={id} value={value} type='text' change={this.props.change} label='Year of Graduation:' />
            </form>
        )
    }
}

export default EducationItem