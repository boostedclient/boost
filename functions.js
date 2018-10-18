module.exports = (client) => {

    client.formatDateTimestamp = (date) => {
        // YYYY-MM-DD HH:MM:ss
        var d = new Date(date);
        return [d.getFullYear(),
                ("0" + (d.getMonth() + 1)).slice(-2),
                ("0" + d.getDate()).slice(-2)].join('-') + ' ' +
            [("0" + d.getHours()).slice(-2),
             ("0" + d.getMinutes()).slice(-2),
             ("0" + d.getSeconds()).slice(-2)].join(':');
    };

    client.formatDateMMDDYYY = (date) => {
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth() + 1;

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return mm + '/' + dd + '/' + yyyy;
    };

    client.convertTimeto24 = (time12h) => {
        const time = time12h.match(/\d{1,2}[:.]\d{2}/g)[0];
        var [hours, minutes] = time.split(/[:.]/g);
        var modifier = "AM";

        // default 12 as 12 PM
        if (hours === '12') {
            modifier = 'PM';
        }

        // anything 13:00 and above is already PM
        if (time12h.match(/[ap]m/gi) && hours < 13) {
            modifier = time12h.match(/[ap]m/gi)[0];
        }

        if (hours === '12') {
            hours = '00';
        }

        if (modifier.toUpperCase() === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }

        return hours + ':' + minutes;
    };

};
