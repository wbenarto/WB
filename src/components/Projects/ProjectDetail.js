import React , {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {projects} from '../../data/projects_data'
import {PDBack, PDContainer, PDImage, PDTitle, PDSubtitle, PDHeadings, PDLinks, PDDesc, PDTech, PDIaMap} from './ProjectDetailElements'


const ProjectDetail = () =>  {
    const [page , setPage] = useState({})
    const {id} = useParams()

    const data = projects.filter(e => e.id === id)
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  
    let history = useHistory()

    return (
        <PDContainer>
           
            <PDBack onClick={()=>history.goBack()}>x</PDBack>
            <PDTitle>
            {data[0].title}
            </PDTitle>
            <PDImage src={data[0].images} />
            <PDSubtitle>
            {data[0].headline}
            </PDSubtitle>

            
            <a href={data[0].github}>
            <PDLinks>
               SOURCE CODE
            </PDLinks>
            </a>

            <a href={data[0].deployed_url}>
            <PDLinks>
               LAUNCH
            </PDLinks>
            </a>
            
            <PDHeadings>
            ABOUT THE PROJECT
            </PDHeadings>
            <PDDesc>
                {data[0].desc}
            </PDDesc>

            <PDHeadings>
            BUILT WITH
            </PDHeadings>
            <PDTech>
                {data[0].tech.join(', ')}
            </PDTech>

            <PDIaMap src={data[0].ia_map} />

            
            {data[0].user_task ? (
                
                data[0].user_task.map((e, i) => (
                    <PDIaMap key={e.id} src={e.img} />
                ) )
               
            ) :  (
                <>
                </>
            )}
            

            {/* <PDHeadings>
            SYSTEM DESIGN
            </PDHeadings> */}





            <PDBack onClick={()=>history.goBack()}>x</PDBack>
        </PDContainer>
    )
}

export default ProjectDetail
