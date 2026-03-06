// Metro config for npm workspaces monorepo
// Must be CommonJS — Metro requires it regardless of "type": "module" in root
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const projectRoot = __dirname
const monorepoRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// Watch the entire monorepo so changes in packages/shared/ are picked up
config.watchFolders = [monorepoRoot]

// Resolve node_modules from both the app and monorepo root
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
]

// Follow npm workspace symlinks
config.resolver.unstable_enableSymlinks = true

module.exports = config
