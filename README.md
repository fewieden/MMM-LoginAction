# MMM-LoginAction [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/fewieden/MMM-LoginAction/master/LICENSE) [![Build Status](https://travis-ci.org/fewieden/MMM-LoginAction.svg?branch=master)](https://travis-ci.org/fewieden/MMM-LoginAction) [![Code Climate](https://codeclimate.com/github/fewieden/MMM-LoginAction/badges/gpa.svg?style=flat)](https://codeclimate.com/github/fewieden/MMM-LoginAction) [![Known Vulnerabilities](https://snyk.io/test/github/fewieden/mmm-LoginAction/badge.svg)](https://snyk.io/test/github/fewieden/mmm-LoginAction)

Perform Actions on User Login. This can get handy, if you want to send an
HTTP-request to your home automation system, after a user is recognized by
MMM-Facial-Recognition.

## Dependencies

* An installation of [MagicMirror²](https://github.com/MichMich/MagicMirror)
* npm
* [request](https://www.npmjs.com/package/request)

## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
1. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        module: 'MMM-LoginAction',
        config: {
            ...
        }
    }
    ```

1. Run command `npm install --productive` in `~/MagicMirror/modules/MMM-LoginAction` directory.

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `baseUrl` | `'https://www.hello.world/user/{@}/{@}'` | The url you want to call. `{@}` is the placeholder to use. |
| `actions` | `{ login: 1, logout: 0 }` | You can set the value for the login and logout action. It can be a String, Number, Boolean, etc. |
| `users` | `{ JohnDoe: [ 'JohnDoe', 'ACTION' ] }` | The users have an array with values. Those values get used to fill out the placeholders of the `baseUrl`. The value ACTION will be replaced by either the login or logout action value. |

The default values would look like this:

* Login `https://www.hello.world/user/JohnDoe/1`
* Logout `https://www.hello.world/user/JohnDoe/0`
