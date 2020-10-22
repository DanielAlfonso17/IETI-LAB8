package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Task;
import com.eci.cosw.springbootsecureapi.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/api")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    List<Task> getAllTask(){
        return taskService.getAll();
    }

    @PostMapping("/newTask")
    Task createTask(@RequestBody Task newTask){
        return taskService.createTask(newTask);
    }
}
