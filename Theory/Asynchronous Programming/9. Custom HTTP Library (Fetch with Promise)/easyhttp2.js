/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * //library is kind of a template which we can use to fetch http request from app.js
 *
 * @version 2.0.0
 * @author  Archit Adhikari
 * @license MIT
 *
 **/

class EasyHTTP {
  //Make an HTTP GET Request
  get(url) {
    //url is input from app.js
    //this is kind of a template
    // fetch takes promise to make it asynchronous
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Make an HTTP PUT(update) Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        //when request resolved we get the message, no data sent or got
        .then(() => resolve("Resource Deleted..."))
        .catch((err) => reject(err));
    });
  }
}
