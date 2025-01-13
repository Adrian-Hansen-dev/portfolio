package com.adrianhansen.backend.entitiy;

import jakarta.persistence.*;

@Entity
@Table(name = "object_data")
public class ObjectData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "file_path")
    private String filePath;

    public ObjectData() {
    }

    public ObjectData(String name, String file_path) {
        this.name = name;
        this.filePath = file_path;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String file_path) {
        this.filePath = file_path;
    }

    @Override
    public String toString() {
        return "ObjectFileData{" + "id=" + id + ", name='" + name + '\'' + ", file_path='" + filePath + '\'' + '}';
    }
}
