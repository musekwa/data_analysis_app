
module.exports.filterUnreliable = (rows) =>{
    let duplicatesMap = new Map();
        items = rows.slice(2, ).map(row =>{
            const farmerName = row[0].toUpperCase();
            if (duplicatesMap.has(farmerName) && duplicatesMap.get(farmerName).district === row[3]) {
                duplicatesMap.get(farmerName).counter += 1;
            }
            else {
                duplicatesMap.set(farmerName, {counter: 1, district: row[3], province: row[4]});
            }
            return row[3];
        });
    return byDistrict(duplicatesMap);
}