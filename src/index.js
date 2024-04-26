import { compile } from '@riotjs/compiler'

// Only module format is supported
const format = 'module'
// Allow the use of custom file extensions https://github.com/riot/register/issues/3
const FILE_EXTENSION_REGEX = new RegExp(
  `${process.env.RIOT_COMPONENTS_FILE_EXTENSION || '.riot'}$`,
)

export async function load(url, context, nextLoad) {
  // non riot files will be skipped
  if (!FILE_EXTENSION_REGEX.test(url)) return nextLoad(url)

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
