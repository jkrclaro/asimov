const Netlify = require('netlify');


exports.handle = async (event, context) => {
  const netlify = new Netlify(event.netlify_access_token);
  const sites = await netlify.listSites();
  console.log(sites);
  console.log(context);
  context.succeed({ 'success': 'Well done!' })
}