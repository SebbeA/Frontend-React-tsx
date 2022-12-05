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
    articleNumber: string
    name: string
    description: string
    category: string
    price: number
    imageName: string
    tag: string
}