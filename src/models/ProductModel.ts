export interface IProduct {
    product?: any
    products?: any
    imageName?: string
    name?: string
    category?: string
    price?: number
    articleNumber?: string
    rating?: number
    description?: string
    title?: string
    tag?: string
}

export interface ProductItem {
    id?: number
    articleNumber: string
    name: string
    description: string
    category: string
    price: number | undefined
    imageName: string
    tag: string
    title?: string
    rating?: number | undefined
}