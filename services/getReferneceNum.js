let referenceNum = 0;
module.exports.getRefNum = () => {
  referenceNum += 1;
  return referenceNum;
};
