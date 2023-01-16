import React,{useContext, useState} from 'react'
import '../Persons/Person.scss'
import { Context } from "../../App";


function Person() {
    const context = useContext(Context)
    
    // function div(){
    //     const paraqraf = document.querySelector('.p')
    //     paraqraf.innerHTML = '' ? paraqraf.remove() : paraqraf
    
    // }
  return (
    <div className='person'>
        <div className='left'>
            {context.persons.List.map(data=>{
                return(
                    <div onMouseEnter={()=>{
                        context.addList(data)
                        const paraqraf = document.querySelector('.right-box')
                        if(paraqraf.innerHTML){
                            paraqraf.remove()
                        }
                    }} key={data.id} className='left-box'><img src={data.image} alt="Person" /></div>
                )
            })}
        </div>
        <div className='right'>
            {
                context.persons.setList.map(data=>{
                    return(
                        <div className='right-box' key={data.id}>
                            <p className='salam'>{data.info}</p>
                            <span>{data.month}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Person