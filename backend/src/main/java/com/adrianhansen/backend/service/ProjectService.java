package com.adrianhansen.backend.service;

import com.adrianhansen.backend.dto.ProjectDetailsDto;
import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.mapper.ProjectDetailsDtoMapper;
import com.adrianhansen.backend.mapper.ProjectDtoMapper;
import com.adrianhansen.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectDetailsDtoMapper projectDetailsDtoMapper;
    private final ProjectDtoMapper projectDtoMapper;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, ProjectDetailsDtoMapper projectDetailsDtoMapper, ProjectDtoMapper projectDtoMapper) {
        this.projectRepository = projectRepository;
        this.projectDetailsDtoMapper = projectDetailsDtoMapper;
        this.projectDtoMapper = projectDtoMapper;
    }

    public ProjectDetailsDto getProjectById(int id) {
        return projectRepository.findById(id)
                .map(projectDetailsDtoMapper)
                .orElseThrow(() -> new RuntimeException("Did not find Project with id: " + id));
    }

    public Page<ProjectDto> getProjectsByUserId(Integer userId, Pageable pageable){
        return projectRepository.findAllByUserId(userId, pageable).map(projectDtoMapper);
    }

}
