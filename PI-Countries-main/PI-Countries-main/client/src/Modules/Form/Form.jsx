import {React, useState, useEffect} from "react";
import {useNavigate, Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {postActivity, getAllCountries} from '../../store/Actions/CountryActions';
import {FormContainer} from '../../styles/form/FormsStyles';
import {Button} from '../../styles/Buttons/ButtonAct';
import {Input} from '../../styles/SearchBar/SearchBar';
import {Select} from '../../styles/NavBar/NavBar'


function validate(input){
  let error= {};
  if(!input.name){
    error.name= 'A name is required...'
  }
  if(!input.dificulty){
    error.dificulty= 'A dificulty is required...'
  }
  if(!input.duration){
    error.duration='A duration is required...'
  }
  return error;
}



export function Form(){
  const dispatch= useDispatch();
  const history= useNavigate();
  const country= useSelector((state)=> state.countries)
  const [error, setError]= useState({});

  const [input, setInput]= useState({
    name:"",
    dificulty:"",
    duration:"",
    season:"",
    countries:[]

  })


  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    console.log(input)
  }

  function handleSelectSeason(e){
    setInput({
        ...input,
       season: e.target.value
      })
  }

  function handleSelect(e){
    setInput({
      ...input,
      countries:[...input.countries, e.target.value]
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setError(validate(input))
    const errorSave= validate(input)
    if(Object.values(errorSave).length !==0){
      alert('Please, fullfil the required camps ')
    }else{
      dispatch(postActivity(input))
      alert('Activity Created!')
      history('/Countries');
    }
    console.log(input)
    setInput({
      name:"",
    dificulty:"",
    duration:"",
    season:"",
    countries:[]
    })
    
  }

  useEffect(()=>{
    dispatch(getAllCountries());
  },[])
    return(
        <FormContainer>
       
          <h1>CREATE A TOURIST ACTIVITY</h1> 
          <div>
            <form
            onSubmit={(e)=>handleSubmit(e)}>
              <div>
                <label>Name: </label>
                <Input
                type='text'
                value={input.name}
                name='name'
                onChange={(e)=>handleChange(e)}/>
                 {
                  error.name &&(
                    <p className="err">{error.name}</p>
                  )
                } 

              </div>
              <div>
                <label>Difficulty: </label>
                <Input
                type='number'
                value={input.dificulty}
                name='dificulty'
                max='5'
                min='0'
                onChange={(e)=>handleChange(e)}/>
                  {
                  error.dificulty &&(
                    <p className="err">{error.dificulty}</p>
                  )
                } 
              </div>
              <div>
                <label>Duration: </label>
                <Input
                 type='number'
                 value={input.duration}
                 name='duration'
                 onChange={(e)=>handleChange(e)}
                 max='12'
                min='0'/>
                   {
                  error.duration &&(
                    <p className="err">{error.duration}</p>
                  )
                } 
              </div>

              <div>
                <Select
                onChange={(e)=>handleSelectSeason(e)}>
                <option value='summer'>Summer</option>
                <option value='fall'>Fall</option>
                <option value='winter'>Winter</option>
                <option value='spring'>Spring</option>
                </Select>
              </div>
              <div>
                <Select 
                onChange={(e)=>handleSelect(e)}>
                  {
                  country?.map((countries)=>{
                    return(
                    <option value={countries.name}>{countries.name}</option>)
                  })
                }
                </Select>
              </div>
              <ul><li>{input.countries.map(el=> el+ ' ,')}</li></ul>
            <Button type='submit'>CREATE ACTIVITY</Button>
            </form>
                <Link to='/countries'>
            <Button>BACK</Button>
            </Link>
          </div>

        </FormContainer>

    
    )
} 