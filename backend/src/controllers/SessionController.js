const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if(!user){
      //that e-mail address is really new
      user = await User.create({ email });
    }
    return res.json(user);
  }
};