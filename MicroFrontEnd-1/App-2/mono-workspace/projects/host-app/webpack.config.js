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
    uniqueName: "hostApp",
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
         name: "hostApp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/host-app/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "mfeApp": "mfeApp@http://localhost:4300/remoteEntry.js",
            "mfe2App": "mfe2App@http://localhost:4201/remoteEntry2.js",

        },

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
