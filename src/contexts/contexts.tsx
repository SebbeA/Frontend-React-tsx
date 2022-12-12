// * importing createContext so we can use useContext
import { createContext, useState, useContext } from 'react'
import { IProduct, ProductItem } from '../models/ProductModel'

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: IProduct
    products: IProduct[]
    featuredProducts: IProduct[]
    square: IProduct[]
    sets: IProduct[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getSquare: (take?: number) => void
    getSets: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EmptyProduct: ProductItem = { articleNumber: '', name: '', description: '', category: '', price: 0, imageName: '', tag: '' }

    const [product, setProduct] = useState<IProduct>(EmptyProduct)
    const [products, setProducts] = useState<IProduct[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([])
    const [square, setSquare] = useState<IProduct[]>([])
    const [sets, setSets] = useState<IProduct[]>([])

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }

    const getSquare = async (take: number = 0) => {
        let url = `${baseUrl}/square`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setSquare(await res.json())
    }

    const getSets = async (take: number = 0) => {
        let url = `${baseUrl}/sets`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setSets(await res.json())
    }

    // useEffect(() => {
    //     setSets(products.slice(18, 22));
    //   }, []) 

    return <ProductContext.Provider value={{product, products, featuredProducts, square, sets, getProduct, getProducts, getFeaturedProducts, getSquare, getSets}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider

