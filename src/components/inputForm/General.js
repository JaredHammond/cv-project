import React, {Component} from 'react';
import Input from './Input';

class General extends Component {
    render() {
        const {name, email, phone} = this.props

        return(
            <form>
                <h2>About You:</h2>
                <Input name='name' value={name} type='text' change={this.props.change} label='Name:' />
                <Input name='email' value={email} type='text' change={this.props.change} label='Email:' />
                <Input name='phone' phone={phone} type='text' change={this.props.change} label='Phone:' />
            </form>
        )
    }
    
}

export default General;