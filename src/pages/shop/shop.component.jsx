import React, {Component} from 'react'
import SHOP_DATA from './data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    
    render () {
        console.log(SHOP_DATA)
        const {collections} = this.state;
        return (
        <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id}  {...otherCollectionProps}/>
            ))
        }
            

        </div>
        )
    }
}
export default ShopPage;