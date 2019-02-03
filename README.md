# GitHub Users

## 1. Install dependencies
run `npm install` or `yarn install` 

## 2. Install Expo
`npm install -g expo-cli`

## 3. Run app
`npm start`<br/>
Click `Run on iOS simulator` or install Expo app in the real device and scan the QR code

## 4. Project details
### Application is written with:
1. `Redux` - a predictable state container for JavaScript app
2. `redux-thunk` - a middleware for basic Redux side effects logic
3. `react-navigation` - a routing and navigation library for React Native apps

As demo purpose, I have not included detailed error handling (no internet, error to connect to server)

### Challenge: 
I found it a bit difficult at first when finding the way to load more users based on the `link` header. <br/>
Since there is only 1 number after `since=`, I decided to replace all other characters with nothing 

## 5. Screenshots
<p align="center">
  <img src="/screenshots/ss2.jpg" width="350" alt="accessibility text">
  <img src="/screenshots/ss1.jpg" width="350" alt="accessibility text">
</p>

## 6. Built application on Expo
Please try the complete application on Expo app at: https://expo.io/@theanh0512/githubUsers


## 7. How to Contribute

Find any typos? Any ideas that you think they can help to improve the project? Contributions are welcome!

First, fork this repository.

[Clone this repository in github for windows](github-windows://openRepo/https://github.com/theanh0512/githubUsers)

Or clone this repository from command to make changes.

```sh
$ git clone git@github.com:theanh0512/githubUsers.git
$ cd githubUsers
```

Once you've pushed changes to your local repository, you can issue a pull request by clicking on the green pull request icon.

## 8. License

The contents of this repository are covered under the [Apache License 2.0](LICENSE).
