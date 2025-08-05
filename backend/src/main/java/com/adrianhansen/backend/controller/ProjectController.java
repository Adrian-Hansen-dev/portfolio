package com.adrianhansen.backend.controller;

import com.adrianhansen.backend.dto.ProjectDetailsDto;
import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/projects")
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

    @GetMapping
    public Page<ProjectDto> findAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "true") boolean ascending,

            @RequestParam(required = false) String nameLike,
            @RequestParam(required = false) List<String> skills)
    {
                Sort sort = ascending ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
                Pageable pageable = PageRequest.of(page, size, sort);
                return projectService.findAll(nameLike, skills, pageable);
    }
}
