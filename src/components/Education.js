import React, {Component} from 'react';
import EducationItem from './EducationItem';

class Education extends Component {
    render() {
        const {change, addItem} = this.props;

        return(
            <div>
                <h2>Education:</h2>
                {this.props.list.map(
                    function(item) {
                        console.log(item.id)
                        return (
                            <EducationItem key={item.id} itemInfo={item} change={change} />
                        )
                    }
                )}
                <button onClick={addItem}>Add Education</button>
            </div>
        )
    }
}

export default Education