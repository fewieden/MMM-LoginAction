/* MMM-LoginAction
 * Node Helper
 *
 * By fewieden https://github.com/fewieden/MMM-LoginAction
 *
 * MIT Licensed.
 */

/* eslint-env node */
/* eslint-disable no-console */

const request = require('request');
const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({

    loggedIn: null,

    start() {
        console.log(`Starting module: ${this.name}`);
    },

    socketNotificationReceived(notification, payload) {
        if (notification === 'CONFIG') {
            this.config = payload;
        } else if (notification === 'USER') {
            if (this.loggedIn) {
                this.send(this.loggedIn, 'logout');
            }

            this.send(payload, 'login');
        }
    },

    buildOptions(user, action) {
        const options = {};
        options.url = this.config.baseUrl;

        this.config.users[user].forEach((item) => {
            let replacement = item;
            if (replacement === 'ACTION') {
                replacement = this.config.actions[action];
            }
            options.url = options.url.replace('{@}', replacement);
        });

        return options;
    },

    send(user, action) {
        request(this.buildOptions(user, action), (error, response) => {
            if (!error && response.statusCode === 200) {
                if (action === 'login') {
                    this.loggedIn = user;
                }
                console.log(`${this.name}: ${action} user ${user}`);
            } else {
                console.log(`${this.name}: Could not perform ${action} on user ${user}: Error ${response.statusCode}`);
            }
        });
    }
});
