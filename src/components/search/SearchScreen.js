import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroByName } from '../../helpers/getHeroByName'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'
import queryString from 'query-string';
export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {q=''}=queryString.parse(location.search);
  const [values,handleInputChange]=useForm({
    searchText:q
  })
  // solamente se llama cuando q cambie de valor
  const {searchText}=values;
  const heroFilter =  useMemo(() => getHeroByName(q), [q])
  //const heroFilter=getHeroByName(q);
  const handleSearch= (e)=>{
    e.preventDefault();
    //console.log(searchText);
    navigate(`?q=${searchText}`);
  }
  return (
    <>
    
    <h1>SearchScreen</h1>
    <hr/>
    <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr/>
        <form onSubmit={handleSearch}>
          <input  type='text' 
                  placeholder='Buscar un heroe' 
                  className='form-control' 
                  name='searchText' 
                  autoComplete='off' 
                  onChange={handleInputChange} 
                  value={searchText}/>
          <button type='submit' className='btn btn-primary mt-2'>Buscar</button>
        </form>
        </div>
        <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>
            {
            (q === '') ? 
                  <div className='alert alert-info'>Buscar un Heroe</div>:
                  (heroFilter.length===0) && <div className='alert alert-danger'>No se encuetran Resultados</div>
            }
            {
            heroFilter.map(hero=>(
              <HeroCard key={hero.id} {...hero}/>
            ))
            }
        </div>
    </div>
    
    
    </>
  )
}
