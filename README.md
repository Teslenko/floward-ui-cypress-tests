# EMC UI Test

1- clone repository
git clone https://github.com/Teslenko/floward-ui-cypress-tests.git

2- Installing cypress
cd /your/project/path
npm install cypress --save-dev

3- Run cypress
cd /your/project/path/emc-ui-test
npx cypress open


**Run Allure** 

1. install allure on your PC with command
$: npm install allure
2. $:npx cypress run --env allure=true