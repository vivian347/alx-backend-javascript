/* eslint-disable jest/require-hook */

export default class AppController {
  static getHomepage(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}