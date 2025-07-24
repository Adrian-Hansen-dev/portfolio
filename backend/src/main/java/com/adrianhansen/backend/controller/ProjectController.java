package com.adrianhansen.backend.controller;

import com.adrianhansen.backend.dto.ProjectDetailsDto;
import com.adrianhansen.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/project")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/{projectId}")
    public ProjectDetailsDto getProjectById(@PathVariable int projectId) {
        return projectService.getProjectById(projectId);
    }


}
