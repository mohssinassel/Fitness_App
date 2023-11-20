  export const exerciseOptions = {
      method: 'GET',
      params: {limit: 80},
      headers: {
          'X-RapidAPI-Key': '96feb5c002mshbd99da14f41a7e4p1ae3d0jsna15e9df0abc7',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
  };

// export const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//   },
// };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
