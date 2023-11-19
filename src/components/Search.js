import React from "react";
import '../styles/Search.css';
import { Swiper, SwiperSlide } from "swiper/react";
import {useState , useEffect} from 'react';
import { slideX } from "../help/SlideX";
import 'swiper/swiper-bundle.css';
import { exerciseOptions, fetchData } from '../help/fetchData';
import ReactPaginate from "react-paginate";
import "swiper/css/pagination";
import "../styles/pagination.css";

const Search = () => {
    const [search, setSearch] = useState('');
    let itemsPerPage = 6;
    const [pageNumber, setPageNumber] = useState(0);
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const [selectedCategory, setSelectedCategory] = useState("back");
   
    const [exercices, setExercices] = useState([]);
    const categories = ["back", "cardio", "chest", "lower arms", "lower legs", "shoulders", "upper arms", "upper legs"];
    const icons = [
        "/images/icons/back.png",
        "/images/icons/cardio.png",
        "/images/icons/chest.png",
        "/images/icons/lowerArm.png",
        "/images/icons/lowerLeg.png",
        "/images/icons/shoulder.png",
        "/images/icons/upperArm.png",
        "/images/icons/upperLeg.png",
    ];
  
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedCategory}`, exerciseOptions);
        setExercices(exercisesData);
        console.log(exercisesData);
    };
    console.log(selectedCategory);

    fetchExercisesData();
  }, [selectedCategory]);
  const pageCount = Math.ceil(exercices.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercices(searchedExercises);
    }
  };
  const displayExercices = exercices.slice(startIndex, endIndex);
    return (
        <div className="Search">
            <h1>You will Find the Best Exercices Here</h1>
            <form className="searchForm">
                <input type="text" placeholder="Search for Exercices" onChange={(e) => setSearch(e.target.value.toLowerCase())} value={search}/>
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
            <div className="searchCategory"> {/* Fixed the class name */}
                <Swiper {...slideX}>
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className={`custom-slide ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                    <>
                        <div className="logo-categ">
                        <img src={icons[index]} alt={category} className={`logo-categ-img ${selectedCategory === category ? 'active' : ''}`} />
                        </div>
                        <div className="btn-categ-cont">
                        <button className={`btn-categ ${selectedCategory === category ? 'active' : ''}`}>{category}</button>
                        </div>
                    </>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div>
                <h1>Exercices</h1>
                <div className="exercices">
                    {displayExercices && displayExercices.map((exercice, index) => (
                        <div className="exercice" key={index}>
                            <img src={exercice.gifUrl} alt={exercice.name} />
                            <p>{exercice.equipment}</p>
                            <h3>{exercice.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination">
                <ReactPaginate
                pageCount={pageCount}
                
                onPageChange={changePage}
                previousLabel={"Précédent"}
                nextLabel={"Suivant"}
                containerClassName="paginationBttns"
                />
            </div>
        </div>
    );
  };
  
  export default Search;