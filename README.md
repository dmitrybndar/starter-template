# Start template

1. Install dependencies - `npm i` or `yarn`
2. In dir `gulpfile.js` change `config.example.js` to `config.js`
3. Run - `npm start` or `yarn start`
4. Build - `npm run build` or `yarn run build`
5. To deploy to ftp edit config.js file with ftp credentials and run `npm run deploy` or `yarn deploy`

While `start` task is running gulp create build directory and all files goes there,
so browserSync serve files directly from build folder and it is the same if you run `build` task.

## Static Files
Place static files (e.g. favicons, fonts, etc) to `static` folder. Content of this directory will be copied into build folder.

## Vendors
Vendors should be added to *gulpfile.js/vendors-list.js*. 
Note! Changes in *vendors-list.js*  will be applied after re-running task.