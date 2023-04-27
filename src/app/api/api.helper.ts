export const getContentType = () => ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
})

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message
}