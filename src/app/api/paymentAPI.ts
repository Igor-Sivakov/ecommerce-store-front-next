import { instance } from './api.interceptor'
import { IPaymentResponse } from '../types/payment.interface'


const PAYMENT = '/payment'

export const paymentAPI = {
	async createPayment(amount: number) {
		const { data } = await instance.post<IPaymentResponse>(PAYMENT, {
			amount
		})

		return data
	}
}
