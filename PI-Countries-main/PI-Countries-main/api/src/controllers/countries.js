const axios = require('axios');
const { Countries, TouristActs } = require('../db'); 
const { Op } = require('sequelize');


const getApiInfo = async () => {
    try {
        let apiInfo = (await axios.get('https://restcountries.com/v3/all')).data;
            apiInfo = await 
                apiInfo?.map(element => {
                    Countries.findOrCreate({
                        where: {
                            idL: element.cca3,
                            name: element.name.common,
                            flag: element.flags[1],                    
                            continent: element.continents[0],
                            capital: element.capital?element.capital[0]:'Capital not found',
                            subregion: element.subregion,
                            area: element.area,
                            population: element.population
                        },
                    });       
                })   
             
            return 'Countries successfully added in database...';
    } catch (error) {
        return(error)
    }    
};



const getIdCountry = async (req, res) => {
    try {
        const { id } = req.params;
        let countryId = await Countries.findByPk(id.toUpperCase(),{            
            attributes: ['flag', 'name', 'continent', 'id', 'capital', 'subregion', 'area', 'population'],
            include: TouristActs
        })
        countryId ? res.send(countryId): res.send('The entered country does not exist.');
    } catch (error) {
        res.send(error);
    }
};


const getAllNameCountries = async (req, res) => {
    try {
        const { name } = req.query;
        
        let countryName = await Countries.findAll({
            where: {
                name: {
                  [Op.iLike]: `%${name}%`,
                },
            },   
            attributes: ['flag', 'name', 'id', 'continent', 'population', 'area', 'capital'],
        })
        console.log('asdasd',countryName)
        if(name){
            countryName.length > 0 ? res.send(countryName): 
            res.status(404).send('The entered country does not exist.');
            
        }else{
            const dbInfo = await Countries.findAll({
                attributes: ['flag', 'name', 'id', 'continent', 'population', 'capital', 'area'], 
                include : TouristActs          
            })
            res.send(dbInfo); 
        }        
    } catch (error) {
        res.send(error);
    }
    
};


module.exports = {
    getApiInfo,
    getIdCountry,
    getAllNameCountries
}