import React/* , { useState, useEffect } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  const {data: images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {
        loading &&
          <div className="loading">
            <div className="loader">
              <span style={{'--i': 1}}></span>
              <span style={{'--i': 2}}></span>
              <span style={{'--i': 3}}></span>
              <span style={{'--i': 4}}></span>
              <span style={{'--i': 5}}></span>
              <span style={{'--i': 6}}></span>
              <span style={{'--i': 7}}></span>
              <span style={{'--i': 8}}></span>
              <span style={{'--i': 9}}></span>
              <span style={{'--i': 10}}></span>
              <span style={{'--i': 11}}></span>
              <span style={{'--i': 12}}></span>
              <span style={{'--i': 13}}></span>
              <span style={{'--i': 14}}></span>
              <span style={{'--i': 15}}></span>
              <span style={{'--i': 16}}></span>
              <span style={{'--i': 17}}></span>
              <span style={{'--i': 18}}></span>
              <span style={{'--i': 19}}></span>
              <span style={{'--i': 20}}></span>
            </div>
          </div>
      }
      <div className="card-grid">
        {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />))
        }
      </div>
    </>
  )
}
