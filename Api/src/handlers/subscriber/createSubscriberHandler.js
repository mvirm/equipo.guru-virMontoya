const {createSubscriber} = require('../../controllers/subscriber/createSubscriber');

const createSubscriberHandler = async (req, res) => {
    const{email} = req.body;
    
    try {
        if(!email) throw new Error('Missing Data');
        const newSubscriber = await createSubscriber(email);
        res.status(201).json(newSubscriber);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}; 

module.exports = {createSubscriberHandler}