package com.adrianhansen.backend.service;
import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.entitiy.Project;
import com.adrianhansen.backend.mapper.ProjectDtoMapper;
import com.adrianhansen.backend.repository.ProjectRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

import static com.adrianhansen.backend.specification.ProjectSpecification.containsSkills;
import static com.adrianhansen.backend.specification.ProjectSpecification.nameLike;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectDtoMapper projectDtoMapper;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, ProjectDtoMapper projectDtoMapper) {
        this.projectRepository = projectRepository;
        this.projectDtoMapper = projectDtoMapper;
    }

    public Page<ProjectDto> findAll(String nameLikeFilter, List<String> skillsFilter, Pageable pageable){
        Specification<Project> filters = Specification
                .where(StringUtils.isBlank(nameLikeFilter) ? null : nameLike(nameLikeFilter))
                .and(CollectionUtils.isEmpty(skillsFilter) ? null : containsSkills(skillsFilter));
        return projectRepository.findAll(filters, pageable).map(projectDtoMapper);
    }

}
