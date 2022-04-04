import { compile as babelTranspile } from '@riotjs/compiler'
import { transform } from '@babel/core'

export default function compile(source, filename) {
  const { code } = babelTranspile(source, { file: filename })

  return transform(code, {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: 'cjs',
          targets: {
            node: process.versions.node
          }
        }
      ]
    ]
  }).code
}