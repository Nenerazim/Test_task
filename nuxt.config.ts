import {app, srcDir, buildDir, dir, typescript, devServer, modules, plugins, css, vite, alias} from './config/nuxt';
export default defineNuxtConfig({
	devtools: {enabled: true},
	app,
	srcDir,
	buildDir,
	dir,
	typescript,
	devServer,
	modules,
	plugins,
	vite,
	css,
	alias
});
