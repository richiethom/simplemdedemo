# Note

This repository contains lots of Java, but I don't think Java is needed to see the problem I'm having.

It should just be possible to run:

    yarn run webpack:build

Which gives the following error:

    C:\Users\richi\Documents\projects\simplemdedemoapp>yarn run webpack:build
    yarn run v0.24.6
    $ yarn run ngc && webpack --config webpack/webpack.vendor.js && webpack --config webpack/webpack.dev.js
    yarn run v0.24.6
    $ ngc -p tsconfig-aot.json
    Error encountered resolving symbol values statically. Calling function 'SimplemdeModule', function calls are not supported. Consider replacing the function or lambda with a reference to an exported function, resolving symbol SimplemdedemoappAppModule in C:/Users/richi/Documents/projects/simplemdedemoapp/src/main/webapp/app/app.module.ts, resolving symbol SimplemdedemoappAppModule in C:/Users/richi/Documents/projects/simplemdedemoapp/src/main/webapp/app/app.module.ts
    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

I'm using Yarn version 0.24.6.