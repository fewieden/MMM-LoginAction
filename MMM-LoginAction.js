/* global Module Log */

/* Magic Mirror
 * Module: MMM-LoginAction
 *
 * By fewieden https://github.com/fewieden/MMM-LoginAction
 *
 * MIT Licensed.
 */

Module.register('MMM-LoginAction', {

    defaults: {
        baseUrl: 'https://www.hello.world/user/{@}/{@}',
        actions: {
            login: 1,
            logout: 0
        },
        users: {
            JohnDoe: [
                'JohnDoe',
                'ACTION'
            ]
        }
    },

    start() {
        Log.info(`Starting module: ${this.name}`);
        this.sendSocketNotification('CONFIG', this.config);
    },

    notificationReceived(notification, payload) {
        if (notification === 'CURRENT_USER') {
            this.sendSocketNotification('USER', payload);
        }
    }
});
