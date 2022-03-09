import React, { useMemo } from 'react'
import { useParams,Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {
  const {heroId} =  useParams();
  const navigate  = useNavigate();
 //console.log(heroId);
 
 const hero=useMemo(() => getHeroById(heroId),[heroId]);
  if (!hero) {
    return <Navigate to='/'/>
  }
const {id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters} = hero;


  const imgPath=`/assets/${hero.id}.jpg`;
  const handleReturn=()=>{
    navigate(-1);

  }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
                    <img src={imgPath} className='img-thumbnail animate__animated animate__fadeInLeft' alt={hero.superhero}/>
              </div>
              <div className='col-8'>
                 
                      <h3 className='card-title'>{superhero}</h3>
                      <ul>
                        <li className='list-group-item'><b>Alter ego:</b>{alter_ego}</li>
                        <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
                        <li className='list-group-item'><b>First Appearance:</b>{first_appearance}</li>
                      </ul>
                     <h5>Characteres</h5>
                     <p>{characters}</p>
                     <button className='btn btn-outline-info' onClick={handleReturn}>Return</button>
                
                  
              </div>
    </div>
  )
}
