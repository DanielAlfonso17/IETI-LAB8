package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Task;

import java.util.List;

public interface TaskService {
    public List<Task> getAll();
    public Task getById(Long id);
    public Task createTask(Task newTask);
    public void removeTask(Long id);
    public Task updateTask(Task newTask);
}
