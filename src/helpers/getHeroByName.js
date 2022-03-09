import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroByName = (name='') => {
    if (name==='') {
        return [];
    }
        name=name.toLowerCase();
        return heroes.filter(({superhero})=>superhero.toLowerCase().includes(name));

}
