import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsQuery,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsQuery,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(99) 9999-9999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza bacon',
        },
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        quantity: 2,
        product: {
          name: 'Pizza calabresa',
        },
      },
    ],
  })
})
