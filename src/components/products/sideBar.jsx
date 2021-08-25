import React from 'react'
import SelectCriteria from './selectCriteria'
import SelectType from './selectType'
import { useDispatch, useSelector } from 'react-redux'
import { setGenresFilter } from '../../features/filter/genre/genresFilterSlice'
import { setAgeFilter } from '../../features/filter/age/ageFilterSlice'

export default function SideBar() {
    const dispatch = useDispatch()
    const kek = useSelector((state) => state.sortCriteriaParams.value)

    return (
        <div className='side-bar-conteiner'>
                       <h1>{kek}</h1>
            <h1 className='underline'>All platforms</h1>
            <div className='main-container'>
                <p className='underline'>Sort</p>
                <section className='container'>
                        <div className='row-container sort'>
                            <p>Criteria</p>
                            <SelectCriteria />
                        </div>
                        <div className='row-container sort'>
                            <p>Type</p>
                            <SelectType />  
                        </div>
                </section>
            </div>
            <div className='main-container'>
                <p className='underline'>Genres</p>
                <section className='container'>
                    <div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setGenresFilter(''))} className='radio' name='genre' id='all-genres' type="radio" />
                            <label className='custom-radio' htmlFor="all-genres"></label>
                            <label className='label' htmlFor="all-genres"><p>All genres</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setGenresFilter('shooter'))} className='radio' name='genre' id='shooter' type="radio" />
                            <label className='custom-radio' htmlFor="shooter"></label>
                            <label className='label' htmlFor="shooter"><p>Shooter</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setGenresFilter('rpg'))} className='radio' name='genre' id='arcade' type="radio" />
                            <label className='custom-radio' htmlFor="arcade"></label>
                            <label className='label' htmlFor="arcade"><p>RPG</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setGenresFilter('survive'))} className='radio' name='genre' id='survive' type="radio" />
                            <label className='custom-radio' htmlFor="survive"></label>
                            <label className='label' htmlFor="survive"><p>Survive</p></label>
                        </div>
                    </div>
                </section>
            </div>
            <div className='main-container'>
                <p className='underline'>Age</p>
                <section className='container'>
                    <div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setAgeFilter(0))} className='radio' name='age' id='all-age' type="radio" />
                            <label className='custom-radio' htmlFor="all-age"></label>
                            <label className='label ' htmlFor="all-age"><p>All age</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setAgeFilter(3))} className='radio' name='age' id='3+' type="radio" />
                            <label className='custom-radio' htmlFor="3+"></label>
                            <label className='label ' htmlFor="3+"><p>3+</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setAgeFilter(6))} className='radio' name='age' id='6+' type="radio" />
                            <label className='custom-radio' htmlFor="6+"></label>
                            <label className='label ' htmlFor="6+"><p>6+</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setAgeFilter(12))} className='radio' name='age' id='12+' type="radio" />
                            <label className='custom-radio' htmlFor="12+"></label>
                            <label className='label ' htmlFor="12+"><p>12+</p></label>
                        </div>
                        <div className='row-container'>
                            <input onChange={() => dispatch(setAgeFilter(18))} className='radio' name='age' id='18+' type="radio" />
                            <label className='custom-radio' htmlFor="18+"></label>
                            <label className='label ' htmlFor="18+"><p>18+</p></label>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}