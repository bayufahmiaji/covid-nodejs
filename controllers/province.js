const Province = require('../models/Province')

module.exports.postAddConfirmed = (req, res) => {
    let name = req.body.name;
    let amount = req.body.amount;

    //Chain Promise
    Province
        .findOne({
            where: {name: name}
        })
        .then((province) => {
            if(province == null){
                return Province.create({name: name, confirmed:amount, recovered: 0, death: 0})
            }else{
                province.confirmed = province.confirmed = amount;
                
                return updateConfirmed(name, province.confirmed);
            }
        }).then(updatedProvince => {
            res.send({'status': 200, 'data': updatedProvince});
        })
        .catch((error) => {
            throw new Error(error);
        })
}
module.exports.getProvinceConfirmed = (req, res) => {
    let name = req.body.name;

   
    Province
        .findOne({
            where: {name: name}
        })
        .then((province) => {
            if(province == null){
                res.send({'status':200,'data':'Province Not Found'})
            }else{
               data = {'province':province.name,'confirmed': province.confirmed}
                
                res.send({'status':200,'data':data})
            }
        })
        .catch((error) => {
            throw new Error(error);
        })
}

module.exports.postAddDeaths = (req, res) => {
    let name = req.body.name;
    let amount = req.body.amount;

    //Chain Promise
    Province
        .findOne({
            where: {name: name}
        })
        .then((province) => {
            if(province == null){
                return Province.create({name: name, deaths:amount, recovered: 0, confirmed: 0})
            }else{
                province.deaths = province.deaths = amount;
                
                return updateDeaths(name, province.deaths)
            }
        }).then(updatedProvince => {
            res.send({'status': 200, 'data': updatedProvince})
        })
        .catch((error) => {
            throw new Error(error);
        })
}

module.exports.getAllProvince = (req, res) => {
    Province
        .findAll()
        .then((provinces) => {
            res.send({'status': 200, 'data': provinces});
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports.getProvinceRecovered = (req, res) => {
    let name = req.body.name;

   
    Province
        .findOne({
            where: {name: name}
        })
        .then((province) => {
            if(province == null){
                res.send({'status':200,'data':'Province Not Found'})
            }else{
               data = {'province':province.name,'recovered': province.recovered}
                
                res.send({'status':200,'data':data})
            }
        })
        .catch((error) => {
            throw new Error(error);
        })
}

module.exports.getProvinceDeaths = (req, res) => {
    let name = req.body.name;

   
    Province
        .findOne({
            where: {name: name}
        })
        .then((province) => {
            if(province == null){
                res.send({'status':200,'data':'Province Not Found'})
            }else{
               data = {'province':province.name,'deaths': province.deaths}
                
                res.send({'status':200,'data':data})
            }
        })
        .catch((error) => {
            throw new Error(error);
        })
}