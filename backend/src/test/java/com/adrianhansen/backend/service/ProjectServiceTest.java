package com.adrianhansen.backend.service;

import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.entitiy.Project;
import com.adrianhansen.backend.mapper.ProjectDtoMapper;
import com.adrianhansen.backend.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private ProjectDtoMapper projectDtoMapper;

    @InjectMocks
    private ProjectService projectService;

    @Test
    void findAll_ShouldAlwaysCallRepositoryAndMapper() {
        // Given
        Pageable pageable = PageRequest.of(0, 10);
        Project project = new Project();
        ProjectDto dto = new ProjectDto(1L, "Test", null, null, null, null, List.of());

        when(projectRepository.findAll(Mockito.<Specification<Project>>any(), eq(pageable)))
                .thenReturn(new PageImpl<>(List.of(project)));
        when(projectDtoMapper.apply(project)).thenReturn(dto);

        // When
        projectService.findAll("Test", List.of("Java"), pageable);

        // Then
        verify(projectRepository).findAll(Mockito.<Specification<Project>>any(), eq(pageable));
        verify(projectDtoMapper).apply(project);

    }
}