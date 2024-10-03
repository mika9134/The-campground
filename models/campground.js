const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema ({
    title: String,
    Price: String,
    description: String,
    location: String,
})
// mongoose.Schema.Types
module.exports = mongoose.model('campground', campgroundSchema);






