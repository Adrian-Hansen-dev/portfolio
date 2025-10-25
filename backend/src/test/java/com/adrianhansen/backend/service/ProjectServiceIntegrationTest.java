package com.adrianhansen.backend.service;

import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.entitiy.Project;
import com.adrianhansen.backend.entitiy.Skill;
import com.adrianhansen.backend.entitiy.User;
import com.adrianhansen.backend.repository.ProjectRepository;
import com.adrianhansen.backend.repository.SkillRepository;
import com.adrianhansen.backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.AUTO_CONFIGURED)
class ProjectServiceIntegrationTest {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SkillRepository skillRepository;

    @BeforeEach
    void setUp() {
        User testUser = userRepository.save(new User("Adrian", "Hansen"));
        Skill javaSkill = skillRepository.save(new Skill("Java"));
        Skill springSkill = skillRepository.save(new Skill("Spring"));

        Project project1 = new Project(testUser, "Java Project", List.of(javaSkill));
        Project project2 = new Project(testUser, "Spring Project", List.of(springSkill));
        Project project3 = new Project(testUser, "Fullstack Project", List.of(javaSkill, springSkill));

        projectRepository.saveAll(List.of(project1, project2, project3));
    }

    @Test
    @DisplayName("Should return all projects for no filters")
    void findAll_WithoutFilter_ShouldReturnAllProjects() {
        //Given
        Pageable pageable = PageRequest.of(0, 10);

        //When
        Page<ProjectDto> result = projectService.findAll(null, null, pageable);

        //Then
        assertThat(result.getContent()).hasSize(3);
        assertThat(result.getContent().stream().map(ProjectDto::name).toList()).containsExactlyInAnyOrder("Spring Project", "Fullstack Project", "Java Project");
    }

    @Test
    @DisplayName("Should return matching projects for name filter")
    void findAll_WithNameFilter_ShouldReturnMatchingProjects() {
        // Given
        String searchName = "Java";
        Pageable pageable = PageRequest.of(0, 10);

        // When
        Page<ProjectDto> result = projectService.findAll(searchName, null, pageable);

        // Then
        assertThat(result.getContent()).hasSize(1);
        assertThat(result.getContent().get(0).name()).isEqualTo("Java Project");
    }

    @Test
    @DisplayName("Should return matching projects for skill filter")
    void findAll_WithSkillFilter_ShouldReturnMatchingProjects() {

        //Given
        List<String> skillFilter = new ArrayList<>();
        skillFilter.add("Spring");

        Pageable pageable = PageRequest.of(0, 10);

        //When
        Page<ProjectDto> result = projectService.findAll(null, skillFilter, pageable);

        //Then
        assertThat(result.getContent()).hasSize(2);
        assertThat(result.getContent().stream().map(ProjectDto::name).toList()).containsExactlyInAnyOrder("Spring Project", "Fullstack Project");
    }

    @Test
    @DisplayName("Should return matching projects for multiple skill filters")
    void findAll_WithMultipleSkillFilter_ShouldReturnMatchingProjects() {

        //Given
        List<String> skillFilters = new ArrayList<>();
        skillFilters.add("Spring");
        skillFilters.add("Java");

        Pageable pageable = PageRequest.of(0, 10);

        //When
        Page<ProjectDto> result = projectService.findAll(null, skillFilters, pageable);

        //Then
        assertThat(result.getContent()).hasSize(3);
        assertThat(result.getContent().stream().map(ProjectDto::name).toList()).containsExactlyInAnyOrder("Spring Project", "Fullstack Project", "Java Project");
    }


    @Test
    @DisplayName("Should return matching projects for name and skill filters.")
    void findAll_WithSkillAndNameFilter_ShouldReturnMatchingProjects() {
        //Given
        String searchName = "Fullstack";
        List<String> skillFilters = new ArrayList<>();
        skillFilters.add("Spring");
        skillFilters.add("Java");

        Pageable pageable = PageRequest.of(0, 10);

        //When
        Page<ProjectDto> result = projectService.findAll(searchName, skillFilters, pageable);

        //Then
        assertThat(result.getContent()).hasSize(1);
        assertThat(result.getContent().stream().map(ProjectDto::name).toList()).containsExactlyInAnyOrder("Fullstack Project");


    }

}