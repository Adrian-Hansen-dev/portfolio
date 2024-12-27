package com.adrianhansen.backend.service;

import com.adrianhansen.backend.entitiy.Project;
import com.adrianhansen.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Project getProjectById(int id) {
        Optional<Project> result = projectRepository.findById(id);

        Project project;
        if (result.isPresent()) {
            project = result.get();
        } else {
            throw new RuntimeException("Did not find Project with id: " + id);
        }
        return project;
    }

}
