import testService from './test.service.js';

export default {
  postTest: async (req, res) => {
    const { param1, param2, param3 } = req.body;
    try {
      let result = await testService.postTest(
        param1,
        param2,
        param3
      );
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  }, 
  getTest: async (req, res) => {
    try {
      let result = await testService.getTest(req.params);
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  }
};