import {GET_COUNTRIES, 
    FILTER_BY_CONTINENT,
    FILTER_BY_ALPH,
    FILTER_BY_SEARCH,
    FILTER_BY_POPULATION,
    POST_ACTIVITY,
    GET_DETAIL,
    GET_ACTIVITY,
    FILTER_BY_ACTIVITY
    } from '../../Constants/Constants.js'


const initialState={
    countries: [],
    allCountris: [],
    Activity:[],
    Detail:[]
    
}

const reducer= (state= initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountris: action.payload
            }
        case FILTER_BY_CONTINENT:
            return{
                ...state,
                countries: action.payload==='All'?state.allCountris: state.allCountris.filter(el=>el.continent === action.payload)

            }
            
                case GET_ACTIVITY:
                    console.log(action.payload)
                    return{
                        ...state,
                        Activity: action.payload
                    }
                    case FILTER_BY_ACTIVITY:

             const act= state.Activity;
             const contris= state.allCountris;
             const nameAct= act.filter(el=> el.name=== action.payload)
             let arrDef=[]
             if(nameAct.length > 0){
                for(let i=0;  i< act.length; i++){
                    for(let j=0; j < act[i].countries.length; j++){
                        arrDef.push(act[i].countries[j].idL)
                    }
                }
                console.log(arrDef)
                
             }
             let filterDef= contris.filter(e=> arrDef.includes(e.idL))
             console.log(filterDef)
                        return{
                    ...state,
                    countries: action.payload=== 'All'? state.allCountris: filterDef

                }
            case FILTER_BY_SEARCH:
            return{
                    ...state,
                    countries:action.payload
            }
            case FILTER_BY_ALPH:
                let sortAlph= action.payload === 'A-Z' ? state.allCountris.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                   else if(b.name.toLowerCase()  > a.name.toLowerCase() ){
                        return -1;
                    }else{
                    return 0;
                }
                }): 
                state.allCountris.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    }
                    else if(b.name.toLowerCase()  > a.name.toLowerCase() ){
                        return 1;
                    }else{
                    return 0;
                    }
                })
                return{
                    ...state,
                    countries: sortAlph 
                }
            case FILTER_BY_POPULATION:
                let sortPop= action.payload === 'Min' ? state.allCountris.sort(function(a,b){
                    if(a.population > b.population){
                        return 1;
                    }
                   else if(b.population  > a.population){
                        return -1;
                    }else{
                    return 0;
                }
                }): 
                state.allCountris.sort(function(a,b){
                    if(a.population > b.population){
                        return -1;
                    }
                    else if(b.population  > a.population ){
                        return 1;
                    }else{
                    return 0;
                    }
                    })
                return{
                    ...state,
                    countries: sortPop 
                }
                case POST_ACTIVITY:
                    return{
                        ...state,
                        
                    }
                  case GET_DETAIL:
                      return{
                          ...state,
                          Detail: action.payload
                      }
                    
            default:
                return{
                    ...state,

                };
            
    }
}

export default reducer;