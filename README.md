# Wedding RSVP

This Wedding RSVP Application is a Full-Stack Application.
Front-end technologies: 
* React (User Interface)
* Axios (Communicating with the Backend)

Back-end technologies:
* Express
* MongoDB
* Mongoose
* JSON Web Tokens (for authentication)

## Getting Started


### Prerequisites

MongoDB needs to be installed locally. 
Mac Users:
1. Make sure you have [homebrew](https://brew.sh/) installed. 
2. Install mongodb using homebrew:
```
brew install mongodb
```
3. Create the directory where your mongo databases will be created locally by running the following command:
```
mkdir -p /data/db 
```
Or if required you may need to run:
```
sudo mkdir -p /data/db 
```
4. Give that folder the correct permissions by running 
```
sudo chown -R `id -un` /data/db
```

PC Users:

1. Install [MongoDB Community Edition](https://www.mongodb.com/download-center#community)
2. Follow [these instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


### Installing

Once the repo is cloned and you've cd'ed into it. Install the necessary packages using:

```
npm install
```

You will need to create a file called config.json under lib folder with a secret key. 
```
{
  "this is my secret"
}
```


## Running the application
Start by getting your mongo demon running in one terminal by using the command 
```
mongod
```
Then you can run the application using
```
npm start
```



## Acknowledgments

* Shout out to [HackerYou](https://github.com/HackerYou) and my great instructor [Simon](https://github.com/swbloom)! 
