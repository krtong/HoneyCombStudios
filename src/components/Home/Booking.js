import React, { Component } from 'react'
import ShopImg1 from "../../images/Store/22_Store.jpg"
class Booking extends Component {
  
  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCJarEJOcT3qmV35y6JuPlXiz3avV34mC2PeFJ4mC30m9dSycPCu7gevEhAJDXwPW?v=bCrsB8QWsBwfQfI8J5iHNfZbuLxUkoqNhVJ3F2JTthy#"
    script.async=true
    this.instance.appendChild(script)  
  }
    
  render() {
    return (
      <div className="container">            
        <div className="row shop">
        <div className="col-12 shop">
        
        <img src={ShopImg1} className="shop-img justify-content-center" alt="Shop-img"></img>    
      <div className="">
        <div
          id="frameTitle"
          className="embedded-widget-title"
          style={{
            fontSize: '23px',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
            textAlign:'center',
            boxSizing:'border-box',
            height:`0px`
            
          }}>
        </div>
        <div ref={el => (this.instance = el)} className="vagaro position-relative">
        </div>
      </div>
      </div>   
      </div>
      </div>   
      
    )
  }
}
export default Booking