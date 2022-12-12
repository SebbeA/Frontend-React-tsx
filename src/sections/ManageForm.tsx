import React from 'react'
import ProductManageList from '../components/ProductManageList'
import { manageContext, IManageContext } from '../contexts/manageContext'

const ManageForm: React.FC = () => {
    const {productReq, setProductReq, create } = React.useContext(manageContext) as IManageContext

    return (
      <section className="manage">
          <div className="container">
              <form onSubmit={create} className="form-manage">
                  <h5 className="mb-4">Create product</h5>
                  <input value={productReq.title} onChange={(e) => setProductReq({...productReq, title: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Title"/ >
                  <input value={productReq.category} onChange={(e) => setProductReq({...productReq, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Category"/ >
                  <input value={productReq.description} onChange={(e) => setProductReq({...productReq, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Description"/ >
                  <input value={productReq.rating || ''} onChange={(e) => setProductReq({...productReq, rating: Number(e.target.value)})} type="number" className="form-control py-2 mb-3" placeholder="Rating"/ >
                  <input value={productReq.price || ''} onChange={(e) => setProductReq({...productReq, price: Number(e.target.value)})} type="number" className="form-control py-2 mb-3" placeholder="Price" />
                  <button className="btn btn-success py-2 mt-3">Create</button>
              </form>
          </div>
          <ProductManageList />
      </section>
    )
}

export default ManageForm