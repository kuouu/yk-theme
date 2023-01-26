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
       price
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
  callback(response.data.data.products.nodes)
}