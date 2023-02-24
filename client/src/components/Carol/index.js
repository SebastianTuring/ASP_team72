import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

function Carol() {
  return (
    <div className ="caroline">
      <h1>Featuring </h1>
      
    <Carousel>
      <Carousel.Item>
        <img class="container"
          src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          
          <p>Egg Avocado Sandwich</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="container"
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <p>Raspberry Shortcake</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img class="container"
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="Third slide"
        />
       

        <Carousel.Caption>
    
          <p>
            Blueberry pancake
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      

    </Carousel>

    
    </div>
  );
}

export default Carol;