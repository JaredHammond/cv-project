import React, {Component} from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
    render() {
        const {change} = this.props.change;

        return(
            <div>
                <h2>Experience:</h2>
                {this.props.list.map(
                    function(item) {
                        return (
                            <ExperienceItem key={item.id} id={item.id} change={change} />
                        )
                    }
                )}
            </div>
        )
    }
}

export default Experience