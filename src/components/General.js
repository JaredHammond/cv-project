import React, {Component} from 'react';
import Input from './input';

class General extends Component {
    render() {

        return(
            <form>
                <h2>About You:</h2>
                <Input name='name' type='text' change={this.props.change} label='Name:' />
                <Input name='email' type='text' change={this.props.change} label='Email:' />
                <Input name='phone' type='text' change={this.props.change} label='Phone:' />
            </form>
        )
    }
    
}

export default General;