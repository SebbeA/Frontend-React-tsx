import React, { useEffect } from 'react'
import { IManageContext, manageContext } from '../contexts/manageContext'
import { ProductItem } from '../models/ProductModel'

const ProductManageList = () => {
    const { products, getAll, remove } = React.useContext(manageContext) as IManageContext

    useEffect(() => {
        getAll()

    }, [getAll])

    return (
        <>
            <h5 className="d-flex justify-content-center align-items-center mb-4">List of Products</h5>
                {
                    products.map((product: ProductItem) => (<div className="mb-3" key={product.id}> {product.name} {product.imageName} {product.category} {product.price} </div>))
                }
        </>
    )
}

export default ProductManageList