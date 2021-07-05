const readXlsxFile = require('read-excel-file/node');
const path = require('path');

const extractBiaisedRecords = (rows) => {
    return rows;
}

// home
module.exports.home = (req, res)=>{

    res.render('index');
}

// get all records with biaised data
module.exports.getAll = (req, res)=>{
    readXlsxFile('./data/data.xlsx').then((rows)=>{
        // implement the algorithm
        const biaisedRecords = extractBiaisedRecords(rows);
        console.table(biaisedRecords);
        res.render('all', {records :biaisedRecords });
    })
    
}

// get records by province
module.exports.getByProvince = (req, res)=>{
    const province = req.params.province;

    readXlsxFile('./data/data.xlsx').then((rows) =>{

        res.render('provinces');
    })
}

// get records by district
module.exports.getByDistrict = (req, res)=>{
    const district = req.params.district;

    readXlsxFile('./data/data.xlsx').then((rows) =>{

        res.render('districts');
    })
}

