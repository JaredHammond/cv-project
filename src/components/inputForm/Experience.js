import React, {Component} from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
    render() {
        const {change, addItem, removeItem} = this.props;

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
                <button onClick={removeItem}>Remove Experience</button>
            </div>
        )
    }
}

export default Experience