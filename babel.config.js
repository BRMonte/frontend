// babel: irá converter (transpilar) codigo do React para um condigo que o browser entenda
// neste arquivo ficam as config sobre como o codigo JS sera convertido

module.exports = {
  presets: [
    '@babel/preset-env', //converterá o JS moderno p um mais antigo baseado no ambiente da app, considerando as adaptações q aquele ambiente (env) exige
    '@babel/preset-react'
  ],
};
