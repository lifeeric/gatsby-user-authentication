import { InMemoryCache, makeVar } from "@apollo/client"
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar()
          },
        },
      },
    },
  },
})

export const cartItemsVar = makeVar({
  authorized: false,
  user: "",
  name: "",
  email: "",
})
