const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfeApp",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "mfeApp",
        filename: "remoteEntry.js",
        exposes: {
            './TodoListModule': './projects/mfe-app/src/app/todo-list/todo-list.module.ts',
            './Todo2ListModule': './projects/mfe2-app/src/app/todo2-list/todo2-list.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
         // "mfe2App": "mfe2App@http://localhost:4201/remoteEntry2.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@ngrx/store":  { singleton: true,strictVersion: true, requiredVersion: '15.4.0' },
          "@ngrx/effects":  { singleton: true,strictVersion: true, requiredVersion: '15.4.0' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
