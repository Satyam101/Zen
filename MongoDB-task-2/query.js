db.info.aggregate([
    {
        $match: {
            $or: [{ product_price: { $gt: 2, $lt: 450 } },
                 { product_color:{$in:["gold","orange","indigo"]} }]

        }
    },
    {
        $group: {
            _id: "$product_color",
            total: { $sum: 1 }
        }
    },
    {
        $sort: { 
            _id:1
               }
    }
])


