export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	sizes: string[]
	images: string[]
	category: string
}

export interface IProductDetails {
	product: IProduct
}

export interface IProductsShopPage {
	products: IProduct[]
}

export interface IProductsCategoryPage {
	products: {
		items: IProduct[]
		totalCount: number
	}
}

