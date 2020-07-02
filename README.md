![Home Feed](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/homepage.png)

# PINHOLE

**Pinhole** is a funtional clone of 500px which showcases a network for 
photographers to display their portfolio with other like minded people.  
This single page platform uses React/Redux, Javascript, Ruby on Rails, and 
PostgreSQL and allows users to sign up and log in to an account, view a gallery
of photos and upload, edit, and delete their posts.

# Demo

View [Pinhole](https://pinhole.herokuapp.com/#/).

# Technologies

### Backend
- PostgreSQL and Ruby on Rails
  - Seed/Access files for posts and users in database

### Frontend
- React.js, Redux, JavaScript, CSS/HTML, Webpack
  - Create an interactive user interface

### Deployment
- AWS, Heroku
  -  Use AWS to store files that will be accessed by the page
  -  Deploy a functional site

# Features 

### Dynamic grid for photo gallery 

- When the user logs in, they are presented with a photo grid that can be
dynamic when the brower changes.  The biggest difference from using a flex is
the white space which the grid I created solved

```
.home-grid-container-photos {
    column-count: 4;
    column-gap: 1em;
}

.home-grid-container-photos img {
    display: block;
    max-width: 100%;
    object-fit: contain;
    max-height: fit-content;
}

```

### Login validations modal message

- Upon user login failure, they need to know that there was a failure on 
login.  This validation modal uses CSS animation to gradually make the error
message appear

```
.modal-errors {
  animation: fadeIn ease 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

```

# Future Implementations
- Profile page, accessible to logged in users
- Allow users to follow each other and comment on posts
- Implement notifications