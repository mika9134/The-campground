// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const campgroundSchema = new Schema ({
//     title: String,
//     Price: String,
//     description: String,
//     location: String,
// })
// // mongoose.Schema.Types
// module.exports = mongoose.model('campground', campgroundSchema);



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);


