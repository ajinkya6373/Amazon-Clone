import React,{useState} from 'react'
import './Home.css'
import Product from "./Product"
import { Carousel } from 'react-responsive-carousel';
import { FaAngleLeft, FaAngleRight} from "react-icons/fa";



function Home() {
     const imageData =[
         {
             image:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB669547265_.jpg'
         },
         {
             image:'https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg'
         },
         {
             image:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Without_remorse/launch/1500x600_Hero-Tall_JPN._CB670768292_.jpg'
         }
     ]
     const length =imageData.length;
    const [current ,setCurrent ]  = useState(0)
    const nextSlide = () => {
        setCurrent(current=== length-1 ? 0 :current+1)
    }
    const prevSlide = () =>{
        setCurrent(current===0 ? length-1: current-1)
    }
    console.log(current);

    if(!Array.isArray(imageData) || imageData.length<=0){
        return null;
    }
    return (
        <div className="home">
            <div className="home_container">
            < FaAngleLeft className ="left-arrow" onClick={prevSlide}/>
            <FaAngleRight className ="right-arrow" onClick={nextSlide} />
                {imageData.map((slider,index) =>{
                    return(
                        <div className={index===current ? 'slide active':'slide'} key={index}>
                        {index=== current && (  <img className="home_image"
                            src={slider.image} alt="home image " />)}
                        </div>
                    )
                })}
              
            </div>

            <div className="home_row">
                <Product id='14567834' title="The Alchemist  | Paulo Coelho's enchanting novel has inspired a devoted following around the world" price={8.99} image={'https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg'} rating={5} />
                <Product title="Irfora Outdoor USB Heating Coat Jackets Winter Flexible Electric  Fishing Hiking Warm Clothes" image={'https://images-na.ssl-images-amazon.com/images/I/71zZmGLCA6L._SL1500_.jpg'} price={35} rating={3} />

            </div>
            <div className="home_row">
                <Product id='14560834' title='All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)' image={'https://images-na.ssl-images-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg'} price={40} rating={4} />
                <Product id='14500834' title="The Body Shop British Rose Shower Gel, 250ml" image="https://images-na.ssl-images-amazon.com/images/I/61znPWAa%2BnL._SL1500_.jpg" price={3.4} rating={3} />
                <Product id='14567890' title="Maggi 2-Minute Instant Noodles - Masala, 70g" image="https://images-na.ssl-images-amazon.com/images/I/81Isw5YIPzL._SL1500_.jpg" price={0.14} rating={5} />

            </div>
            <div className="home_row">
                <Product id='15567034' title='Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL' price={751.64} rating={4} image={'https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg'} />

            </div>
        </div>
    )
}

export default Home


