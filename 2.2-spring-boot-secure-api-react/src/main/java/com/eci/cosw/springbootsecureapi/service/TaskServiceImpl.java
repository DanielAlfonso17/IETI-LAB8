package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Task;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    private List<Task> taskList = new ArrayList<>();
    @Override
    public List<Task> getAll() {
        return taskList;
    }

    @PostConstruct
    private void populateSampleData()
    {
        taskList.add( new Task( "1", "create", "Daniel", "daniel@gmail.com","ready", new Date()) );
    }

    @Override
    public Task getById(Long id) {
        Task task = null;
        for (Task t: taskList){
            if(t.getId().equals(id)){
                task = t;
            }
        }
        return task;
    }

    @Override
    public Task createTask(Task newTask) {
        taskList.add(newTask);
        return newTask;
    }

    @Override
    public void removeTask(Long id) {
        Task task = null;
        for(Task t: taskList){
            if(t.getId().equals(id)){
                task = t;
                taskList.remove(task);
            }
        }
    }

    @Override
    public Task updateTask(Task newTask) {
        return null;
    }
}
