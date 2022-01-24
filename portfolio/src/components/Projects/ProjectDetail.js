import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {projects} from '../../data/projects_data'
import {PDBack, PDContainer, PDImage, PDTitle, PDSubtitle, PDHeadings, PDLinks, PDDesc, PDTech} from './ProjectDetailElements'


const ProjectDetail = () =>  {
    const {id} = useParams()

    const data = projects.filter(e => e.id.split('/')[1] === id)
    console.log(data)
    console.log(projects)
    console.log(id)
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


            {/* <PDHeadings>
            SYSTEM DESIGN
            </PDHeadings> */}




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

            <PDBack onClick={()=>history.goBack()}>x</PDBack>
        </PDContainer>
    )
}

export default ProjectDetail
