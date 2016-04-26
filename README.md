## Discovery
* List events
* Search events
* Users
* Tags
* Feed based on user preferences
* Feed based on location
* Feed based on topics

## Recruit
* Users join events
* Edge cases and restrictions
* Post public events
* Share on social media
* See friends attending
* Tiered promotion
* Groups
* Find assistants

## Communication
* Message attendees
* Post to social media
* Collect user info
* Updates

## Organisation
* Make an events
* Event metrics
* Admin privileges
* Checklist of activist basics
* Maps
* Event types
* Review event

## Priorities
Make event (Oranganise)
```
As an organiser,
So that I can host an event,
I would like to create an event.
```
List events (Discovery)
```
As a potential participant,
So that I can find events to join,
I would like to see a list of events.
```
Users (Discovery)
```
As a person,
So that I can use Apptivist,
I would like to create a profile.
```
Join event (Recruit)
```
As a participant,
So that I can indicate my interest to an organiser,
I would like to join an event.
```
Event categories (Discovery)
```
As a user,
So that I can filter events,
I would like for events to be assigned categories.
```
Search (Discovery)
```
As a user,
So that I can filter events,
I would like to be able to perform an event search.
```
Edge cases and restrictions (Recruit)
```
As a user,
So that Apptivist is secure and usable,
I would like user restrictions to be put in place.
```

## Day planner
* 2 standups (morning and after lunch)
* Front and backend

## Setup
```
npm install
bower install
```
Move bower components into app directory (change later)

Create databases
```
apptivist_development
apptivist_test
```
Connect databases
```
node app/models/database.js
```
To run tests, run these commands in separate terminal tabs
*check where bower should go. we changed karma config to look for bower in app*
```
node app/server.js
webdriver-manager start
```
```
karma start test/karma.conf.js
protractor test/protractor.conf.js
```
