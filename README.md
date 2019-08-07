# Hotspots

Hotspots is a web tool for finding the hottest locales in the Vancouver Downtown area.

Hosted on Netlify and Heroku at https://hotspots.netlify.com

Built with Nima Boscarino's React-Rails boilerplate.

## Detailed Description

Hotspots is a data aggregration webportal for people new to Vancouver and
desire to socialize and explore the most popular restaurants, night clubs or bars.
We source our data from Yelp and Google and display the information to our
users in an interesting and innovative way via an interactive heatmap. Each
location near the core of Vancouver is scored and sorted in our database with an
algorithmic score based on it's popularity and review rating. Users can plan their
night out and hit all the hottest locales in the city with our informative line chart
plotting out at which points in their night their stops will be the busiest.

A boilerplate project for anyone interested in making a project that uses React and Rails.

Note! This boilerplate has _no fluff_! That means that there's nothing set up for you to do authentication stuff, there's no Redux stuff, and there's no React Router stuff.

The main important bit is that the React project has `proxy` set to `localhost:3001` in the `package.json` file. Take a look!

## Features

On the front page, users are greeted with slides showing
the hottest places to be in Vancouver. Our hot scores are calculated using a combination of how busy a place gets and
how well recieved a place is.

Gif Here

Going down to the map, you can see the map. The colored portions represent a heatmap, with the green areas of the city
being the least popular places to be, and the red areas being the most popular. Use the slider to adjust the time
that the data is pulled from, or use the drop-down menus to set the time.

Gif Here

On the left you can see a list of all the neighbourhoods sorted by the hot score. Expand the neighbourhood and get a list of
restaurants, clubs, or bars in that neighbourhood. Clicking a on a place will pop up a panel of all the restaurants information.
You can then add these locations to your trip.

Gif Here

After you've added a few places to your trip, you can click Generate Night to see more data on these places. This part of the website
has a recommended time for when you should arrive to maximize the ammount of people you meet. You can also see a bargraph here that
represents how busy each location you've chosen gets at a particular point in time.

Gif Here

## Running this project

If you would like to clone this project and run it locally, please follow these steps.

Create a front end and back end env file, follow the example and add the API keys you'll need. The backend env file is
located in the root folder. The frontend env file is located in the client folder.

To update the data on how popular places get, go to the lib/populartimes folder. Use the command `pip3 install` to install all the relevant python libraries. We split Vancouver up into a 10 x 10 map like so...

Picture of the map of Vancouver split by 10 x 10.

The map is further split based on how busy we anticipate where Vancouver is busiest to save on API calls. Update the popular
times data by going to lib/populartimes and use the command `ruby rubyside3.rb 3 3 5 5` to get the data from square 3, 5.
(0, 0 is the bottom left square, 9, 9 is the top right square, the first digit is on the x axis and the second digit is on
the y axis) To update the data for the entirety of Vancouver, use the command `ruby rubyside3.rb 0 0 9 9`.

With all the data, you must now create and seed the database. Start by installing all the relevant Ruby gems by using
the command `bundle install` in the root folder. Then use the command `bin/rake db:setup` to setup the database. The seed file
will make API calls to get the data it needs.

With the database seeded, you can now run the backend using `bin/rails s`.

Start the front end by going into another terminal then `cd` into `client`. Run `npm install`. Let it finish then run `npm start` and go to `localhost:3000` in your browser.

In your browser you should now be met with the home screen.

## Contact

Please contact me at `nima@lighthouselabs.com` if you have any questions or requests, or post an issue to this repo.