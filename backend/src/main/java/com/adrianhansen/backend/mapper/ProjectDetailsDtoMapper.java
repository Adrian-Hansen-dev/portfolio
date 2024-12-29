package com.adrianhansen.backend.mapper;
import com.adrianhansen.backend.dto.ProjectDetailsDto;
import com.adrianhansen.backend.entitiy.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class ProjectDetailsDtoMapper implements Function<Project, ProjectDetailsDto>{
    private final UserDtoMapper userDtoMapper;
    private final SkillDtoMapper skillDtoMapper;

    @Autowired
    public ProjectDetailsDtoMapper(UserDtoMapper userDtoMapper, SkillDtoMapper skillDtoMapper) {
        this.userDtoMapper = userDtoMapper;
        this.skillDtoMapper = skillDtoMapper;
    }

    @Override
    public ProjectDetailsDto apply(Project project) {
        return new ProjectDetailsDto(
                userDtoMapper.apply(project.getUser()),
                project.getName(),
                project.getDescription(),
                project.getRepolink(),
                project.getCreationDate(),
                project.getSkills().stream().map(skillDtoMapper).toList());
    }
}
