import React from 'react'
import './CentralAbout2.css'
import CentralCard from './CentralCard'

const CentralAbout2 = () => {


  const Data=[{
    png:<i className="bi bi-hand-thumbs-up"></i>,
    para:"Happy Clients",
    info:"829 +"
  },
  {
    png:<i className="bi bi-trophy"></i>,
    para:"Number of Cars",
    info:"51 +"
  },
  {
    png:<i className="bi bi-car-front-fill"></i>,
    para:"Car Center",
    info:"127+"
  },
  {
    png:<i className="bi bi-alarm"></i>,
    para:"Total kilometers",
    info:"589 +"
  }]
  return (
    <>
    
    <section className="section-red img-fluid ">
    <div className="container-red font-weight-bold ">
      <div className="row">

        {
          Data.map((val,index)=>(
            <CentralCard
            key={index}
            png={val.png}
            para={val.para}
            info={val.info}
            />
          ))

        }
        
      </div>
    </div>
  </section>
    </>
  )
}

export default CentralAbout2
