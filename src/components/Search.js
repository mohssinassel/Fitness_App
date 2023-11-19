import React from "react";
import '../styles/Search.css';
import { Swiper, SwiperSlide } from "swiper/react";
import {useState} from 'react';
import { slideX } from "../help/SlideX";

const Search = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("BreakFast");
  const categories = ["BreakFast", "Sandwich", "Drinks", "Salade", "Tajine", "Supplements"];
  const icons = [
    "/images/icons/croissant.png",
    "/images/icons/sandwich.png",
    "/images/icons/drink.png",
    "/images/icons/salade.png",
    "/images/icons/tajine.png",
    "/images/icons/compliments.png",
  ];
    return (
        <div className="Search">
            <h1>You will Find the Best Exercices Here</h1>
            <form className="searchForm">
                <input type="text" placeholder="Search for Exercices" />
                <button type="submit">Search</button>
            </form>
            <div className="searchCategory"> {/* Fixed the class name */}
                <Swiper {...slideX}>
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className={`custom-slide ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                    <>
                        <div className="logo-categ">
                        <img src={icons[index]} alt={category} style={{ width: '30px', height: '30px', margin: '15px', fontWeight: '100' }} />
                        </div>
                        <button className={`btn-categ ${selectedCategory === category ? 'active' : ''}`}>{category}</button>
                    </>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    );
  };
  
  export default Search;