package com.adrianhansen.backend.mapper;

import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.entitiy.Project;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectDtoMapper implements Function<Project, ProjectDto> {
    private final SkillDtoMapper skillDtoMapper;

    @Autowired
    public ProjectDtoMapper(SkillDtoMapper skillDtoMapper) {
        this.skillDtoMapper = skillDtoMapper;
    }

    @Override
    public ProjectDto apply(Project project) {
        return new ProjectDto(
                project.getName(),
                project.getCreationDate(),
                project.getSkills()
                        .stream()
                        .map(skillDtoMapper)
                        .toList()
        );
    }
}
