import React, {Component} from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
    render() {
        const {change, addItem} = this.props;

        return(
            <div>
                <h2>Experience:</h2>
                {this.props.list.map(
                    function(item) {
                        return (
                            <ExperienceItem key={item.id} itemInfo={item} change={change} />
                        )
                    }
                )}
                <button onClick={addItem}>Add Experience</button>
            </div>
        )
    }
}

export default Experience