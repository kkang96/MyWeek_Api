import todoService from './todo.service.js';

export default {
  todoUpdate_ctrl: async (req, res) => {
    const result = await todoService.todoUpdate_svc(req.body);
    res.json(result);
  },
  todoWeekSelect_ctrl: async (req, res) => {
    const result = await todoService.todoWeekSelect_svc(req.body);
    res.json(result);
  },
  todoDaySelect_ctrl: async (req, res) => {
    const result = await todoService.todoDaySelect_svc(req.body);
    res.json(result);
  },
  todoDetailSelect_ctrl: async (req, res) => {
    const result = await todoService.todoDetailSelect_svc(req.body);
    res.json(result);
  },
  todoChecking_ctrl: async (req,res) =>{
    const result = await todoService.todoChecking_svc(req.body);
    res.json(result);
  }
};
