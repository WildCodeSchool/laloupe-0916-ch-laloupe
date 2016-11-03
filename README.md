# [MEAN](http://mean.io/) Starter kit

Backend : Babel es2015

Frontend : es2015 native

## MongoDB Express Angular NodeJS

### Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)
-   [Bower](https://bower.io/)

### Auto-install

[Bash script for Ubuntu & OSX](https://gist.github.com/adrienfloor/b8141717ad86585c430e16ec0c6142ff)

### Execution

#### Installation

```bash
git clone git@github.com/WildCodeSchool/laloupe-0916-ch-laloupe.git
cd laloupe-0916-ch-laloupe
npm install
bower install
```

#### Development

```bash
nodemon --exec npm start
```

#### Production

```bash
SECRET_TOKEN='secretToken' MONGODB_URI='mongodb://localhost:27017/mean-starter-es6' npm start
```
