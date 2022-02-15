const {Countries,TouristActs}= require('../db');


const postActivity= async(req,res)=>{
    const{name, dificulty, duration, season, countries}= req.body;
        try{
            const newActivity= await TouristActs.create({
                name,
                dificulty,
                duration,
                season
            });
            for(const i of countries){
                const countryAct= await Countries.findOne({
                    where:{
                        name: i
                    }
                })
                await newActivity.addCountries(countryAct);
            };
            res.send('Activity created Successfully!');
        }catch(error){
            res.send(error);
        }
};


const getAllActivities= async(req,res)=>{
    try{
        const dbActInfo = await TouristActs.findAll({
            attributes: ['name'],
            include: Countries
        })
        res.send(dbActInfo);
    }catch(error){
        res.send(error);
    }
};



module.exports= {
    postActivity,
    getAllActivities
}