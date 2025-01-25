const {UserSubscriber} = require('../../db')

const createSubscriber = async (email) => {
    const[newSubscriber, created] = await UserSubscriber.findOrCreate({
        where: {
            email
        }
    })
    return newSubscriber; 
}

module.exports = {createSubscriber}
