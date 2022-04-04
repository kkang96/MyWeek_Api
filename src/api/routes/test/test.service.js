import testData from './test.data.js';

export default {
  postTest: async (param1, param2, param3) => {
    const result = await testData.postTestDB(param1, param2, param3);
    return result;
  },
  getTest: async (param) => {
    const result = await testData.getTestDB(param);
    return result;
  }
}