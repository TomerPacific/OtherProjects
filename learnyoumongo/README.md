# learnyoumongo
Free Code Camp Learn You MongoDB

## Exercise 1 (Mongod)
After creating a Cloud9 workspace, configured with NodeJS, I had to run the following commands :
- sudo apt-get install -y mongodb-org
- mkdir data
- echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
- chmod a+x mongod

Running learnyoumongo verify, completes the exercise

## Exercise 2 (Connect)
Had to run the following commands :
- Create a data directory
- To run the mongodb server as requested, `mongod --port 27017 --dbpath=./data --smallfiles`
- In another terminal window, run `npm install mongodb`

Running learnyoumongo verify, completes the exercise

## Exercise 3 (Find)
Created code that connects to the database learnyoumongo and searches the parrots collection for any items that have an age property that is larger than the one received.