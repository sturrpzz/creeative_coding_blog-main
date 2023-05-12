/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Assignment 2 Blog",
  description: "Generative Art is so easy and difficult at the same time!",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./images/20230510_175008.jpg",
  avatarClass: "rounded-full",
  author: "Alice Vu",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
