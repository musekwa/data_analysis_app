const readXlsxFile = require('read-excel-file/node');
const path = require('path');

// home
module.exports.home = (req, res)=>{

    res.render('index');
}

// get all records with biaised data
module.exports.getAll = (req, res)=>{
    readXlsxFile('./data/data.xlsx').then((rows)=>{
        // implement the algorithm

        res.render('all');
    })
    
}

// get records by province
module.exports.getByProvince = (req, res)=>{
    const province = req.params.province;
    console.log('provincia:', province);
    readXlsxFile('./data/data.xlsx').then((rows) =>{
        //console.log(rows[4][0]);
        res.render('provinces');
    })
}

// get records by district
module.exports.getByDistrict = (req, res)=>{
    const district = req.params.district;
    console.log('distrito:', district);
    readXlsxFile('./data/data.xlsx').then((rows) =>{
        //console.log(rows[4][0]);
        res.render('districts');
    })
}

