# sf_moview_map

Project Film Location Search in San Francisco

This is my first Javascript project. During the last week I have learned a lot about Javascript, Nodejs, Jquery, Google Map API from scratch. Awesome!

- Goal: Let user quickly search film locations by movie names. This server should be fast and responsive.
  
- Important technical choices.
  1. Which Cloud?
     Amazon provide more computing resources for the same price but Google has excellent documentations/guide books/examples for be
ginners. So Google.
     
  2. What tool to use?
     Since I am pretty occupied by my current job and we have a project due in early March, I am only spending a little more than a 
weekend on this project. So the server tool I am trying to find must be easy enough to set-up. And using the same language for both
 front-end and back-end is event better. So I said goodbye to my residual knowledge of Apache, and embraced NodeJS. Turns out Node
js is doing the job well.
     
  3. No Database 
     Why? Basically it's a light weight project, and there's not many data in the pool. And keep all data in memory will enhance th
e performance. I have considered the alternative design of having two little programs running at the same time. One pulls the data
 from the DataSF database to a local database
     Pros: Simpler architecture; faster data fetching; one less thing to worry about,lower cost to maintain.
     Cons: First time loading is slightly longer; totally depends on the operation of DataSF database.
     
  4. Hide/Show trick. 
     To make the user feel the website is really responsive when searching by key words, I actually marked all film locations on the
 map before use input anything. I just hide the markers. The website is dynamically showing those markers which relevant to user's keywo
rds. The user experience benefits from this design. However, I am generating a big amount of transaction between my server and googl
e location search API for each visitor to my website, even if he is doing nothing on my website.
     
  5. GIT is a must
     Put all my source codes in GIT.
     
  6. What's missing 
     The auto-completion in the input text box. But I think my real-time filtering of search result while the user is inputting is e
ven better. Because the user will needs fewer keyboard strokes to get to the result he wanted.
   
- Source code
   git clone https://github.com/Hanshi/sf_moview_map.git
- How to run 
   1. find a Ubuntu machine.
   2. SSH to it's console
   3. sudo apt-get update
   4. sudo apt-get install git nodejs npm
   5. git clone https://github.com/Hanshi/sf_moview_map.git
   6. cd sf_moview_map; npm install
   7. nohup nodejs app.js
   8. Open a browser and http://server_ip:8080
      
- Who am I
      https://www.linkedin.com/pub/hanshi-lei/27/b39/baa
