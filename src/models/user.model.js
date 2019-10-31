const db = require('../utils/db')
const User = db.collection('user-data');

module.exports = {
    find: async (query = {}) => {
        try {
            return await User.find(query);
        } catch (error) {
            console.log("error in find User DB.");
            throw error;
        }
    },
    insert: async (data) => {
        try {
            return await User.insert(data);
        } catch (error) {
            console.log("error in insert User DB.");
            throw error;
        }
    },
    updateById: async (Id, data) => {
        try {
            return await User.update({ _id: Id }, { $set: { ...data } });
        } catch (error) {
            console.log("error in updateById User DB.");
            throw error;
        }
    },
    removeById: async (Id) => {
        try {
            return await User.remove({ _id: Id });
        } catch (error) {
            console.log("error in removeById User DB.");
            throw error;
        }
    },
}