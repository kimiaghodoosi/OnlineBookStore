import { react } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';
import Cheshmhayash from './assets/pics/cheshmhayash.jpeg';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import {
    BrowserRouter as Router ,
     Switch , 
     Route , 
     Link } from "react-router-dom";


import ReactFetchImage, { fetchBase64 } from 'react-fetch-image'



class Book_List extends React.Component {

constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items:[]
      };
    }
 
    componentDidMount() {
    fetch("http://127.0.0.1:8000/api/books/categories/")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.items,
        })
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        })
      });
  }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
		 <Container >
		 {items.map(item=>
                <Row>
                    
                    <Col md="4" style={{margin:"2%"}} >
                        <br/>
                         <img src={item.image} className={"img-thumbnail "} style={{float:"right" , width:"60%"   }} />

                    </Col>
                    
                    
					<Col md="5" className="div-bg text-body" style={{backgroundColor:"rgba(255,255,255,70%)" , direction: "rtl" , fontSize: "100%", margin: "2%" }}>
                    
					<br/>
						
                        <span className="book-name" > <b> نام کتاب:{item.name} </b></span> <br/>
                        <span className="book-author">نویسنده:{item.author_name["AName"]}</span> <br/>
                        <span className="book-publisher" >  ناشر:{item.publisher}</span><br/>
                        <span className="book-year">  سال انتشار: {item.Year} </span><br/>
                        <span className="book-cost"> قیمت: {item.Price} </span> <br/>
						
                        <Button color="info">افزودن به سبد خرید</Button>{' '}
						
                        <br/>
                    </Col>
                </Row>
                  )}

            </Container>

        /* <ol>
            {items.map(items => (
              <li key={items.id}>
                {items.nam	e} 
				{items.author}
				{items.publisher} 
				{items.Year} 
				{items.price}
			
				
              </li>
            ))}
          </ol>*/
        );
      }
    }
  

}
export default Book_List;

