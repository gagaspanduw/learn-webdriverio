module.exports = {
    // Example output: Testing_0227383929@tes.com
    generateRandomEmailAddress : function() {
        let emailAddress = "Testing_" + Math.random().toString().replace('0.', '') + "@tes.com";
        return emailAddress;
    },

    // Example output: d7273hb1828h38392
    generateRandomString : function() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}