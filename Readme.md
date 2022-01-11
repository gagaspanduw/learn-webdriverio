My WebDriverIO learn repository

Require :
* Node JS
* NPM


How to install :
1. Create project folder
2. npm init -y
3. npm install webdriverio (optional add --save-dev)
4. npm install @wdio/cli
5. npx wdio run wdio.conf.js (will create new WebDriverIO config file) *choose settings: local,chromedriver or selenium driver, spec & dot 
6. npm install chai (optional add --save-dev)
7. npm install chai-webdriverio (optional add --save-dev) (use --force if can't install the package)
8. npm install local-runner (optional add --save-dev)
9. Add settings on wdio.conf.js
    *search beforeTest function
    *add script below
    const chai = require('chai')
    const chaiWebdriver = require('chai-webdriverio').default
    
    chai.use(chaiWebdriver(browser))
    
    global.assert = chai.assert
    global.should = chai.should
    global.expect = chai.expect
    
    
How to run :
* npx wdio run wdio.conf.js (to run all test on specs folder)
* npx wdio run wdio.conf.js -- --spec {filename} (to run single test file)
