import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { exerciseOptions, fetchData } from '../help/fetchData';
import Detail from '../components/Detail';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      console.log('exerciseDetailData:', exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExerciseDetail;
