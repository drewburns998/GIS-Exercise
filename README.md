# GIS coding exercise

### Primary Technology Used

* React - *Single Page Application Framework*
* Redux - *Event Driven State management*
* Redux-saga - *application side effect management (async, network requests etc)*
* Parcel - *Bundler (low configuration)*
* Storybook - *UI Component Display and Testing*
* React Testing Library - *UI Driven component testing*

* react-csv-reader - *CSV importing w/ Papaparse*
* turfjs - *Geojson calculation library*
* react-map-gl - *Map & Coordinate Display*
* ag-grid - *High Performance Data Table*


### Running the application locally:

This application was built using Node version v12.1.0.  It may work on different versions, however it has only been tested on v12.1.0.  Consider using nvm (node version manager) and switching to this version to ensure the application runs as expected.

* Ensure correct Node version
* Clone this repository into a directory of your choosing
* Navigate to the root directory of the repository and install dependencies 
    * npm install
* Start the application
    * npm run start (this launches the parcel bundler)
    * The application should running at http://localhost:1234/ 
* The application will allow you to upload a csv to begin the search process
    * Currently, the file expects id, latitude, longitude, and name fields
    * Additional fields can be in the file, but they will not be parsed
    * Currently, no row data validation logic has been added (ie missing values in a given row)
* Once you’ve uploaded the file, the parsing and storing begin
    * You will see notifications displaying when the file has been uploaded
* Once the file has been parsed, the application will retrieve geojson data to search against
    * https://github.com/drei01/geojson-world-cities/blob/master/cities.geojson 
    * Notifications will display to let you know the results are being calculated
    * When the calculation is complete, a data table and map will appear
* Once the data table populates, you are able to click on any row of results
    * Only one row can be clicked at a time
    * When clicked, the map will update to show the city of the row clicked, and the corresponding marker icons represent the locations imported from the csv provided

### Useful Commands
Install Dependencies
```
npm install
```
Start the app
```
npm run start
```
Run / Watch Tests 
```
npm run test
npm run test:watch
```
Run storybook
```
npm run storybook
```

### Key Notes:

#### Performance:  
Assuming that the sample file has approximately 10k rows, expect the first attempt to take the following times (approximately)
* Parsing file:  ~1sec
* Retrieving geojson lookup from GitHub: ~2sec (depending on network speed)
* Looking up 10k locations in the 35k item geojson: ~6seconds
**Subsequent uploads will be faster due to cacheing network requests (geojson won’t need to be fetched again)

#### Assumptions:
* Fetching geojson via network call is allowed
* the file expects id, latitude, longitude, and name fields
* Basic ag-grid implementation - The library has many features, however it is kept minimal here
* mapbox has a great deal of customization (both style and drawing), however I kept it simple with placing markers on the map.
* Typically I’d work much closer to the product owner in an application like this, so most UI/UX features are implemented in the simplest fashion.  

#### Shortcuts I Took When Developing:
* I typically TDD.  I did so at the beginning of this, however due to time constraints I did not continue at the end.  I provided adequate testing to show how I “would” typically test things, but coverage is not as high as usual
* Map box API:  The key is hardcoded.  I would never do this in a production app.  I would likely provide this via environment variable configuration files and also using some key vault service depending on the cloud provider.  For this app I could have made it passed in as a bulildtime argument, but I chose to focus on other things.
* UI / UX - I was extremely minimal.  To be frank, this is probably the least “sexy” looking application I’ve built in a while.  I introduce basic loading / loaded states, and render conditionally, however this was done as a shortcut.   Typically I’d leverage a global style guide, introduce a minimal framework, add global styles etc.
* I have not used turj.js or map box before, so some of the data structures may not be ideal.
* I used the turf js collect function (using multiple collects).  This may not be ideal, however is was more performant than plain javascript iterations checking pointInPolygon.  Using tag from turfjs looked promising, however it was not performant

