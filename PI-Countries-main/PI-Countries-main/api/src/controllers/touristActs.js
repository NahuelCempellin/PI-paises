const {Country,TouristActs}= require('../db');


const postActivity= async(req,res)=>{
    const{name, dificulty, duration, season, countries}= req.body;
        try{
            const newActivity= await TouristActs.create({
                name,
                dificulty,
                duration,
                season
            });
            countries.forEach(async(e)=>{
                let countryAct= await Country.findOne({
                    where:{
                        name: e
                    }
                })
                await newActivity.addCountry(countryAct);
            });
            res.send('Activity created Successfully!');
        }catch(error){
            res.send(error);
        }
};


const getAllActivities= async(req,res)=>{
    try{
        const dbActInfo = await TouristActs.findAll({
            attributes: ['name'],
            include: Country
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