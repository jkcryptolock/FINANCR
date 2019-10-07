# FINANCR

FINANCR is your one stop expense and income tracker, with spending category breakdowns and monthly trend analysis. FINANCR is fully responsive and can be taken on the go or browsed as a rich desktop experience. 

## In Action

<a href='https://financr.herokuapp.com/'>Heroku Deployment Link</a>

# User Stories

## Implemented:
- As a user, I want to register for my own account, which will save my spending histories.
- As a user, I want to add expenses to the current month, which will track the date of the expense, the amount, and the category.
- As a user, I want to see a monthly breakdown of the categories in which I am spending my money.
- As a user, I want to see a historical breakdown of money in vs. money out for each month that I have tracked.

## Coming Soon:
- As a user, I want to set budget goals and see how my spending habits relate.

# Stack

<table>
  <tr>
  </tr>
  <tr>
    <td align="center">Front-end</td>
    <td align="center">Back-end</td>
    <td align="center">Deployment</td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
    <td align="center"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Node.js" title="Node.js" width="60px"/></td>
    <td align="center"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--K2q0A5SX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/2elgd5zp07wkeilkna63.png" alt="Heroku" title="Heroku" width="60px"/></td>
  </tr>
  <tr>
    <td align="center"><img src="https://d33wubrfki0l68.cloudfront.net/22e10665fd27c809674f166b54f5c67e3ac62570/2ceb4/img/users/react-bootstrap.png" alt="React" title="React" width="80px"/></td>
    <td align="center"><img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" alt="Express" title="Express" width="60px"/></td>
  </tr>
  <tr>
    <td align="center"><img src="https://www.chartjs.org/img/chartjs-logo.svg" alt="Chart.js" title="Chart.js" width="60px"/></td>
    <td align="center"><img src="https://img.stackshare.io/service/5739/atlas-360x360.png" alt="MongoDB Atlas" title="MongoDB Atlas" width="60px"/></td>
  </tr>
</table>

## Front-End
FINANCR was built with React on the front-end, along with React Bootstrap for component styling. Chart.js was also implemented to provide spending category and monthly spending trend visuals.

## Back-End 
Users and their associated transactions are stored in a MongoDB Atlas cluster. Users are stored as primary documents, while their transactions are listed as embedded documents. This data is retrieve via Mongoose and Express RESTful APIs.

## Deployment
Deployment is handled via Heroku.

# Get started

Take the following steps to run the app in your localhost, you will need to have the following:
- A MongoDB Atlas cluster must be set up, and the appropriate cluster URI and password must be added to the db/config.js file.

From terminal in the index folder:
```
npm install
npm start
```

## Challenges
- For this project, I wanted to learn React Bootstrap. React Bootstrap was fairly straight-forward, however I did end up having to introduce React Hooks to provide some features.

## Learnings
- React Hooks were necessary for being able to control two separate modals from one React component. This was my first exposure to React Hooks, however I found them to be extremely useful and relatively easy to implement.

# Contributors

[John Connolly](https://github.com/jkcryptolock)
