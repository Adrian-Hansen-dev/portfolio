package com.adrianhansen.backend.mapper;

import com.adrianhansen.backend.dto.ProjectDto;

import java.io.IOException;
import java.util.function.Function;

import com.adrianhansen.backend.entitiy.Project;
import com.adrianhansen.backend.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectDtoMapper implements Function<Project, ProjectDto> {
    private final SkillDtoMapper skillDtoMapper;
    private final StorageService storageService;

    @Autowired
    public ProjectDtoMapper(SkillDtoMapper skillDtoMapper, StorageService storageService) {
        this.skillDtoMapper = skillDtoMapper;
        this.storageService = storageService;
    }


    @Override
    public ProjectDto apply(Project project) {
        byte[] imageData = null;
        if (project.getObjectData() != null) {
            try {
                imageData = storageService.downloadImageFromFileSystem(project.getObjectData().getId());
            } catch (IOException e) {
                throw new RuntimeException(
                        "Fehler beim Laden der .obj-Datei: " + project.getObjectData().getFilePath(), e);
            }
        }

        return new ProjectDto(
                project.getName(),
                project.getCreationDate(),
                imageData,
                project.getSkills()
                        .stream()
                        .map(skillDtoMapper)
                        .toList()
        );
    }
}
