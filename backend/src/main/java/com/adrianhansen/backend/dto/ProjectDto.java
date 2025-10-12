package com.adrianhansen.backend.dto;

import java.time.LocalDate;
import java.util.List;

public record ProjectDto(
        Long id,
        String name,
        String description,
        String repoLink,
        String demoLink,
        LocalDate creationDate,
        List<SkillDto> skills) {

}
