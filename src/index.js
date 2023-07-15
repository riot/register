import { compile } from '@riotjs/compiler'

// Only module format is supported
const format = 'module'

export async function load(url, context, nextLoad) {
  // non riot files will be skipped
  if (!/\.riot$/.test(url)) return nextLoad(url)

  // get the source code of the riot file
  const { source } = await nextLoad(url, {
    ...context,
    format,
  })

  // compile the code and generate the esm output
  const { code } = compile(source.toString(), { file: url })

  return {
    format,
    shortCircuit: true,
    source: code,
  }
}
