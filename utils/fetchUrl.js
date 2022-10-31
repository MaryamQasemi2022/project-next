const fetchUrl = ({ url, method }) => {
  const absoluteUrl = `${process.env.NEXT_PUBLIC_ABSOLUTE_URL}${url}`
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(absoluteUrl)
      resolve(await response.json())
    }, 1000)
  })

}
export default fetchUrl
