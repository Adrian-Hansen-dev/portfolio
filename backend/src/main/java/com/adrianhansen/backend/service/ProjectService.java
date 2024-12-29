package com.adrianhansen.backend.service;

import com.adrianhansen.backend.dto.ProjectDetailsDto;
import com.adrianhansen.backend.mapper.ProjectDetailsDtoMapper;
import com.adrianhansen.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectDetailsDtoMapper projectDetailsDtoMapper;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, ProjectDetailsDtoMapper projectDetailsDtoMapper) {
        this.projectRepository = projectRepository;
        this.projectDetailsDtoMapper = projectDetailsDtoMapper;
    }

    public ProjectDetailsDto getProjectById(int id) {
        return projectRepository.findById(id)
                .map(projectDetailsDtoMapper)
                .orElseThrow(() -> new RuntimeException("Did not find Project with id: " + id));
    }

}
