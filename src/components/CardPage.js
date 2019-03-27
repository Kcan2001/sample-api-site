import React from "react"
import './global.css';
import personIMG from '../images/person.png'
import Map from './Map';
import {formatMonth} from './dateUtil'


const CardPage = (props) => {
    const {data, returnClick} = props;
    
    return (
        <div className="card-page-container">
        <button className="card-page-button-style" onClick={returnClick}>
            Back to the list
        </button>
        <div className="card-page-items">
                <h1 className="h2-main-style">{data.name}</h1>
            <p className="project-paragraph">{data.description}</p>
            <p className="project-paragraph-2">Founded {`${formatMonth(data.founded_month)} ${data.founded_day}, ${data.founded_year}`} </p>
        </div>
        <h2 className="h2-main-style">Whos All Here?</h2>
        <div className="card-page-person-list">
            {data.relationships.map(people => {
                return (<div className="card-page-people-item">
                    <img className="person-icon" src={personIMG} alt=""/>
                    <h3 className="card-page-margins">{people.title}</h3>
                    <p className="card-page-margins">{`${people.person.first_name} ${people.person.last_name}`}</p>
                </div>
                )
            })}
        </div>

        <h2 className="h2-main-style card-header-spacer">Where are we?</h2>
        <div className="card-page-map">

            {data.offices.map(office => {
                return (
                    <Map office={office} 
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0unYjjmZXDwgflhl3qZAM1ZYAHmHuI3o&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />} />
                )
            })}
        </div>
    </div>
)};

export default CardPage
