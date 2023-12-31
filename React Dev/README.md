# SheCodes.io

## SheCodes REACT

### SheCodes React_WK1 (Reack Week1 overview, React hello world, React and HTML, React and CSS, React components, React Properties, React external components, React Week1 summary, HW-WK1)
1. React files consist of various react.js files and folders that helps the react framework to run the aplication properly.

2. JSX - This is a type of HTML, but it's not html and it has strict rules than HTML. such as;
- class is given as 'className'.
- All html tags must have a closing or self-closing tag.
- JSX element is always returned by javascript function component.


### SheCodes React_WK2 (React Week2 overview, JS closures, React events, React states, React forms, React Week2 summary, HW-WK2)



### SheCodes React_WK3 (React Week3 overview, React conditional rendering, React loops, React AJAX, React external components, React Week3 summary, HW-WK3)


### SheCodes React_WK4 (Node.JS, Terminal, Create-React-App, React Debugging, NPM, React Hosting)
1. Node.JS: Install the recommended version of Node.JS from your browser

2. Terminal: When coding in react, it is always advisable to keep your terminal open.

3. Create-React-App: To install react library/framework into a folder, run the following commands on your terminalor CLI.
- Create a new react folder "react-app"
- cd react-app
- npx create-react-app my-app
- cd my-app
- npm start
The above commands will deploy the react application on the browser.

4. React Debugging: Always open up your terminal to see warnings, some are displayed on the browser and console but it is always displayed on the CLI. 
- Do not ignore warnings that relates to files inside your working path.

5. NPM: The Node Package Manager helps to add external library to react. Follow the steps below to install and use npm library.
- Find the component you need on NPM
- Open existing folder in VS Code
- Open the terminal
- Run npm install axios with the example of axios
- Run npm start
- Import axios at the top of your component
- Use axios in your code
-- NPM
   https://www.npmjs.com/
-- Yarn (optional)
   https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

6. React Hosting: Follow the steps below to host your react application.
- Open the GitHub app
- Add a local repository
- Commit changes
- Publish the repo to GitHub
- Go to Netlify and connect Git site
- Deploy site
- Back to 3

7. WK4-Homework(React + Github + Netlify)
- Move your CodeSandboxReact project to VS Code
- Link your project to a GitHub repository and deploy your code to Netlify
- Submit the Netlify URL link of your hosted project
- Include a link to your GitHub repository at the bottom of your project page
Note:  the project doesn't have to be fully functional, but it should look exactly the same as when opening it on your local computer.

8. React weather app project planning
- Setup project
- HTML
- CSS
- Search engine
- API Integration
- Unit conversion
- Forecast
- Summary


### SheCodes React_WK5/React Weather Project(Project structure,HTML, CSS, API integration, Date, Search engine, Unit conversion)
1. Project structure:
- create the react app using 'npx create-react-app' on the CLI
- Remove unnecessary files on the react package
- Connect project to github repo
- Host on Netlify

2. HTML:
- importing boostrap css for styling
- using HTML syntax to build the page structure with the JSX return in the > <App /> component
- creating component > <Weather /> to help best understand the project work flow 

3. CSS:
- styling the HTML/JSX structure using CSS custom and bootstrap inside the component "Weather.js" and "Weather.css".

4. API integration:
- Structuring of the apiUrl link which include api-link housing the city, apikey and units inside the component > <Weather defaultCity="Owerri"/>
- Running the apiUrl using axios > axios.get(apiUrl).then(handleResponse); call.
- Recieving api response inside a function call above
- Render api response using react useState > const [weatherData, setWeatherData] = useState({ ready: false }); on the weather app UI

5. Date:
- Using the time stamp and multiplying it by 1000 to get the current date > new Date(response.data.time * 1000)
- Created a new component > <FormatedDate date={props.data.date} /> to interpolate the day, hours and minutes to get the actual date.

6. Search Engine:
- On the form tag place an > onsubmit={handleSubmit} that calls the function to prevent the event listener
- On the input form tag place an > onchange={handleCity} that calls the function to get the value of city input
- Create a new useState variable to store the updated city value from the > function handleCity()
- Place the api call structure inside a > function call search() and call it inside the > handleSubmit function

7. Unit Conversion:
- Created a new component > <WeatherTemperature celsius={props.data.temperature} /> to house the unit conversion process
- Adding the link tag to the celsius and Fahrenheit symbol
- Creating a useState variable > const [unit, setUnit] = useState(props.celsius); to hold the unit in celsius and fahrenheit
- To access the useState variable an if else condition is used to display the temperature in celsius or fahrenheit
- Then an onclick attribute calling a function to update the useState variable is called both on celsius > onClick={showFahrenheit} and fahrenheit > onClick={showCelsius} link
- Then to display the correct fahrenheit temperature value a function > {Math.round(fahrenheit())} is called. 

### SheCodes React_WK6/Project-Forecast(Overview, Layout, )
1. Overview: Steps to take to build the vanilla-react-app weather.
- Build daily weather forecast
- Build the layout + styling of the forecast
- Find the API and make the API for the forecast
- Integrate the API with the user interface

2. 