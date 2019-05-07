## A boilerplate for Hugo static site generator

#### Getting started

Clone repo 

`git clone <repo>`

Start up hugo server

`hugo server`

Build project 

`hugo`

Create an account on netlify

Test netlify cms 

`localhost:1313/admin`

#### Install netlify cli

```bash
sudo npm install netlify-cli -g
netlify login
netlify link
```

###### Manually deploy built site to netlify

```bash
hugo 
cd public
netlify deploy
```

#### To be continued.....

- Add basic design
- output clean html

#### Note:

Categories should be more flexible as a content type rather than data