import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import startCase from 'lodash/startCase';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useParams } from 'react-router';
import axios from 'axios';

const Details = () => {
  const {resource, id} = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const peopleAttributes=['height','mass','hair_color','skin_color','home_world'];
  const planetAttributes=['climate', 'terrain', 'surface_water', 'population', 'rotation_period','orbital_period','diameter'];

  useEffect(() => { 
    axios.get(`https://swapi.dev/api/${resource}/${id}`)
        // .then((response) => {console.log(response.data);})
        .then((response) => {
          if (resource==='people' || resource==='species'){
            axios.get(response.data.homeworld)
              .then((response2) => {response.data.home_world = response2.data.name;
              setResults(response.data);})
              .catch((err) => {navigate('/error');});
          } else {
            setResults(response.data);
          }
        })
        .catch((err) => {navigate('/error');});
    }, [resource, id, navigate]);

  const filterResults = () => {
    let attributeFilter;
    switch(resource) {
      case "people":
        attributeFilter = peopleAttributes;
        break;
      case "planets":
        attributeFilter = planetAttributes;
        break;
      default:
        break;
    }
    if (attributeFilter) {
      const filtered = Object.keys(results)
      .filter(key => attributeFilter.includes(key))
      .reduce((obj, key) => {
        obj[key] = results[key];
        return obj;
      }, {});
      return filtered;
    }
    return results;
  };

  return (
    <div className="container mx-auto w-50">
      <h1><strong>{results.name}</strong></h1>
      <table className="table table-borderless">
        <tbody>
          {
            Object.entries(filterResults()).map((results, index) => {return(
              <tr key={index}>
                <td className="col-3"><strong>{startCase(results[0])}:</strong></td>
                <td className="col-auto">{isNaN(results[1])?results[1]:parseFloat(results[1]).toLocaleString()} {results[0]==='height' && results[1]!=='unknown'?'cm':''}{results[0]==='mass' && results[1]!=='unknown'?'kg':''}</td>
              </tr>
              )})
            }
        </tbody>
      </table>
    </div>
  )
}

export default Details