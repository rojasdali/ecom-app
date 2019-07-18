import React from 'react';
import data from './data'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: data
        }
    }

    render() {
        const { sections } = this.state
        return (
            <div className="directory-menu">
                {sections.map( ({ title, imageUrl, id, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)}
            </div>
        )
    }
}


export default Directory;