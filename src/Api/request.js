const API_KEY = "56f19136c3287a8765285f9e42a20242"

const endPoints ={
    Discover:`/discover/movie?api_key=${API_KEY}`,
    Comedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    Action:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    Adventure:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    ScienceFiction:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    Horror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    Drama:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    PopularinRegion:`/discover/movie?api_key=${API_KEY}&region=IN`,
    Thriller:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    Crime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    Shortfilms:`/discover/movie?api_key=${API_KEY}&with_runtime.lte=70`
}

export default endPoints;