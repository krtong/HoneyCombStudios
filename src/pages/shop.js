import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Footer from "../components/Globals/Footer" 
import { graphql } from "gatsby"
import Products from "../components/Home/Products"



const ShopPage = ({
  data:{allStrapiProduct: {nodes : products }},
  
}) => {
  return <Layout>
    <BackgroundSection />
    <Products products={products} title="All Products"/>
    <Footer />
  </Layout> 
}

export const query = graphql`
  {
    allStrapiProduct {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        price
        Brand
        category
        company
      }
    }
  }
`

export default ShopPage
