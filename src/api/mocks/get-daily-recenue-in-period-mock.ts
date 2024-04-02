import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/04/2024', receipt: 2000 },
    { date: '02/04/2024', receipt: 1800 },
    { date: '03/04/2024', receipt: 2300 },
    { date: '04/04/2024', receipt: 4000 },
    { date: '05/04/2024', receipt: 1000 },
    { date: '06/04/2024', receipt: 800 },
    { date: '07/04/2024', receipt: 2050 },
  ])
})
