
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['9NGHBNkQsbfExpj8Yvxqtb'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  