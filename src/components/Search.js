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
import { NavLink } from 'react-router-dom';
import { MdFavorite } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
      AOS.init({
          duration : 2000
      });
  });
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);
    let itemsPerPage = 6;
    const [pageNumber, setPageNumber] = useState(0);
    const startIndex = pageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const [selectedCategory, setSelectedCategory] = useState("back");
   
    const [exercices, setExercices] = useState([]);
    const categories = ["back", "chest", "lower arms", "lower legs", "shoulders", "upper arms", "upper legs" , "cardio"];
    const icons = [
        "/images/icons/back.png",
        "/images/icons/chest.png",
        "/images/icons/lowerArm.png",
        "/images/icons/lowerLeg.png",
        "/images/icons/shoulder.png",
        "/images/icons/upperArm.png",
        "/images/icons/upperLeg.png",
        "/images/icons/cardio.png",
    ];
    const addToFavorites = (item) => {
        if(!favorites.includes(item)){
            setFavorites((prevFavorites) => {
            const newFavorites = [...prevFavorites, item];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
            });
        }else{
            setFavorites((prevFavorites) => {
                const newFavorites = prevFavorites.filter((iteme) => iteme !== item);
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                return newFavorites;
              });
        }
      };
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedCategory}?limit=20`, exerciseOptions);
        setExercices(exercisesData);
        console.log(exercisesData);
    };
    console.log(selectedCategory);

    fetchExercisesData();
    setPageNumber(0);
  }, [selectedCategory  ]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);
    console.log('Search:', search);
    console.log('ExercisesData before filter:', exercisesData);
  
    const searchedExercises = exercisesData.filter(
      (item) => item.name.toLowerCase().includes(search)
                 || item.target.toLowerCase().includes(search)
                 || item.equipment.toLowerCase().includes(search)
                 || item.bodyPart.toLowerCase().includes(search),
    );
    console.log('ExercisesData after filter:', searchedExercises);
    
    setSearch('');
    setExercices(searchedExercises);
    setPageNumber(0);
  };
  
  const pageCount = Math.ceil(exercices.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayExercices = exercices.slice(startIndex, endIndex);
    return (
        <div className="Search" id="exercice">
            <span class="bg__blur search_blur"></span>
            <span class="bg__blur search_blur2"></span>
            <h1>You will Find the Best Exercices Here</h1>
            <form className="searchForm" onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search for Exercices" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" >Search</button>
            </form>
            <div className="searchCategory"> 
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
                
                <div className="exercices" data-aos="fade-up">
                    {displayExercices && favorites && displayExercices.map((exercice, index) => (
                        <div className="exercice" key={index} >
                            <NavLink to={`/exercise/${exercice.id}`} className="link">
                                <img src={exercice.gifUrl} alt={exercice.name} />
                            </NavLink>
                                <div><p>{exercice.equipment} </p><MdFavorite    fill={favorites.includes(exercice) ? 'red' : 'white'} className="fav_logo"  onClick={() => addToFavorites(exercice)}/></div>
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