# ChatMe - Chat Application 
ChatMe is chat application build with the power of MERN Stack.

![signup page](./images/Register.png)

![login page](./images/Login.png)

![view avatar](./images/Profile_Picture.png)

![set avatar](./images/Profile_Picture_Set.png)

![home page](./images/Home_Screen.png)

![chat screen](./images/Chat_Screen.png)

![chat screen 2](./images/Chat_Screen_2.png)

![preloader](./images/Loader.png)

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.

```shell
git clone https://github.com/meetgandhii/ChatMe
cd ChatMe
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
npm i
cd ..
cd public
npm i
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
npm start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
nodemon
```

Done! Now open localhost:3000 in your browser.
