import moment from 'moment'

function objectIdToTimestamp(objectId) {
  try { objectId = objectId.toString(); } catch (e) {}
  if (!/^[0-9a-z]{24}$/.test(objectId)) {
    throw new TypeError('Invalid objectId, got ' + JSON.stringify(objectId));
  }
  return parseInt(objectId.slice(0, 8), 16) * 1000 + 
         Math.floor(parseInt(objectId.slice(-6), 16) / 16777.217); // convert 0x000000 ~ 0xffffff to 0 ~ 999
};

const objectId = {
  toTimestamp: function(objectId) {
    return objectIdToTimestamp(objectId);
  },
  toDatetime: function(objectId) {
    return moment(objectIdToTimestamp(objectId)).format('YYYY-MM-DD HH:mm');
  }
}

export default objectId;