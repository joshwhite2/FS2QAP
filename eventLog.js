const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (event, level, message) => {
    const now = new Date();
    const year = format(now, 'yyyy');
    const month = format(now, 'MMMM');
    const day = format(now, 'dd');

    const dateTime = `${format(now, 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${level}\t${event}\t${message}\t${uuid()}`;

    try {
        const logsPath = path.join(__dirname, 'logs', year, month, day);
        if (!fs.existsSync(logsPath)) {
            await fsPromises.mkdir(logsPath, { recursive: true });
        }

        const fileName = `${year}${month}${day}_httpevents.log`;
        await fsPromises.appendFile(path.join(logsPath, fileName), logItem + '\n');
    } catch (err) {
        console.log(err);
    }
};

module.exports = logEvents;