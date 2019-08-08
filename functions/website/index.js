const website = require('./Website');


exports.handle = async (event, context) => {
  console.log(website.hey());
  context.succeed({ 'success': 'Well done!' })
}
