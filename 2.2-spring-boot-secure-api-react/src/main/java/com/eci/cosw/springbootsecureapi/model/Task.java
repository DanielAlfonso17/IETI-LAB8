package com.eci.cosw.springbootsecureapi.model;

import java.util.Date;

public class Task {
    private String id;
    private String responsable;
    private String description;
    private String email;
    private String status;
    private Date date;

    public Task(String id, String responsable, String description, String email, String status, Date date) {
        this.id = id;
        this.responsable = responsable;
        this.description = description;
        this.email = email;
        this.status = status;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getResponsable() {
        return responsable;
    }

    public void setResponsable(String responsable) {
        this.responsable = responsable;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
