import { instance } from './api.interceptor'

import { EnumSorting } from '../types/sorting.interface'
import { IProduct } from '../types/product.interface'


export interface IQueryResponse {
	items: IProduct[],
	totalCount: number
}

const PRODUCTS = '/products'

export const productAPI = {
	async getProducts(category?: string | null, sortType?: EnumSorting, perPage?: number, currentPage?: number) {

		const { data } = await instance.get<IQueryResponse>(PRODUCTS, {
			params: { category, sortType, perPage, currentPage }
		})

		return data
	},

	async bySearchTerm(searchTerm: string) {
		const { data } = await instance.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: { searchTerm }
		})

		return data
	},

	async byId(id: number) {
		const { data } = await instance.get<IProduct>(`${PRODUCTS}/${id}`)

		return data
	},

	async bySlug(slug: string) {
		const { data } = await instance.get<IProduct>(`${PRODUCTS}/slug/${slug}`)

		return data
	},

}
