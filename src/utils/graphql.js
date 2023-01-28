import axios from "axios"

const url = "https://yourknowledge.online/graphql"
const headersList = {
  "Content-Type": "application/json",
}

export const getProductByTagId = async (id, callback) => {
  const gqlBody = {
    query: `{
 products(where: {tagId: ${id}}) {
   nodes {
     ... on SimpleProduct {
       name
       regularPrice
       salePrice
       image {
         mediaItemUrl
       }
       link
     }
   }
 }
}`
  }
  const response = await axios.post(url, gqlBody, { headers: headersList })
  console.log(response.data.data.products.nodes);
  callback(response.data.data.products.nodes)
}

export const getCarouselImages = async (callback) => {
  const gqlBody = {
    query: `{
  mediaItems(where: {search: "carousel"}) {
    nodes {
      title
      mediaItemUrl
    }
  }
}`
  }
  const response = await axios.post(url, gqlBody, { headers: headersList })
  const carouselImages = response.data.data.mediaItems.nodes.map((item) => {
    return item.mediaItemUrl
  }).sort()
  callback(carouselImages)
}