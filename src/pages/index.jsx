import React from 'react'
import Categories from '../components/Categories'
import Grid from '../components/Grid'
import Products from '../components/Products'
import Orders from '../components/Orders'
import Sidebar from '../components/Sidebar'
import ProductDetails from '../components/ProductDetails'

export default function Home() {
  // TODO: set up state for categories
  // TODO: set up useEffect and fetch categories
  // TODO: set up state for products
  // TODO: set up useEffect and fetch products
  // TODO: set up state for orders
  // TODO: set up utility functions to update states
  // TODO: set up context to share states across components
  return (
    <Grid>
      <Categories />
      <Products />
      <Sidebar>
        <ProductDetails />
        <Orders />
      </Sidebar>
    </Grid>
  )
}
