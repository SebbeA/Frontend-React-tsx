import React, { useState, useContext, createContext } from 'react'
import { ManageProviderProps } from '../models/ManageProviderProps'
import { ProductItem } from '../models/ProductModel'

export interface IManageContext {
    product: ProductItem
    setProduct: React.Dispatch<React.SetStateAction<ProductItem>>
    productReq: ProductItem
    setProductReq: React.Dispatch<React.SetStateAction<ProductItem>>
    products: ProductItem[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (id: number, e: React.FormEvent) => void
    remove: (id: number) => void
}

export const manageContext = createContext<IManageContext | null>(null)
export const useManageContext = () => { return useContext(manageContext) }

const ManageProvider = ({children}: ManageProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const defValues: ProductItem = {  id: 0, articleNumber: '', name: '', description: '', category: '', price: 0, imageName: '', tag: '', rating: 0, title: ''}
    const defReqValues: ProductItem = { articleNumber: '', name: '', description: '', category: '', price: 0, imageName: '', tag: '', rating: 0, title: ''}

    const [product, setProduct] = useState<ProductItem>(defValues)
    const [productReq, setProductReq] = useState<ProductItem>(defReqValues)
    const [products, setProducts] = useState<ProductItem[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productReq)
        })

        if (result.status === 201) {
            setProductReq(defReqValues)
        }
    }
    const get = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if (result.status === 200)
            setProduct(await result.json())
    }
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
            if (result.status === 200)
            setProducts(await result.json())
    }
    const update = async (id: number, e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 200) {
            setProduct(await result.json())
        } 
    }
    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete'
        })

        if (result.status === 204)
            setProduct(defValues)
    }

    return (
        <manageContext.Provider value={{ product, setProduct, productReq, setProductReq, products, create, get, getAll, update, remove }}>
            {children}
        </manageContext.Provider>
    )
}

export default ManageProvider