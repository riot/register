import { pathToFileURL } from 'node:url'
import { register } from 'node:module'

register('./src/index.js', pathToFileURL('./'))
