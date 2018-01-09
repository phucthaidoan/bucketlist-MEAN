const mongoose = require('mongoose');

// define bucklet list schema
const buckletListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

const buckletList = module.exports = mongoose.model('BucketList', buckletListSchema);

module.exports.getAllLists = (callback) => {
    buckletList.find(callback);
}

module.exports.addList = (newList, callback) => {
    newList.save(callback);
}

module.exports.deleteListById = (id, callback) => {
    const query = {_id: id};
    buckletList.remove(query, callback);
}