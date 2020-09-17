import React, { useState, useEffect } from 'react'
import WordList from './WordList'
import { pohina, normal } from '../wordlist'
import { sampleSize } from 'lodash'
import "../App.css"

const MagicBag = () => {
    const [pohinaList, setPohinaList]= useState([])
    const [normalList, setNormalList]= useState([])

    useEffect(() => {
        setNormalList(JSON.parse(localStorage.getItem('normalwords')))
        setPohinaList(JSON.parse(localStorage.getItem('pohinawords')))
    }, [])

    const chooseWords = () => {
       const pohinawords = sampleSize(pohina, 2)
       const normalwords = sampleSize(normal, 1)
       setPohinaList(pohinawords)
       setNormalList(normalwords)
       localStorage.setItem('pohinawords', JSON.stringify(pohinawords))
       localStorage.setItem('normalwords', JSON.stringify(normalwords))
    }

    if (pohinaList && normalList) return (
        <div className="wordList">
            <WordList list={pohinaList} />
            <WordList list={normalList} />
        </div>
    )

    const handleClick = () => {
        setTimeout(() => chooseWords(), 120);
    };

    return (
        <div className="buttonDiv">
            <button onClick={handleClick} >ARVO!</button>
        </div>
    )
}

export default MagicBag
