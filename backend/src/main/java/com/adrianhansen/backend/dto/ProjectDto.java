package com.adrianhansen.backend.dto;

import java.util.Date;
import java.util.List;

public record ProjectDto(
        Long id,
        String name,
        String description,
        String repoLink,
        String demoLink,
        Date creationDate,
        List<SkillDto> skills) {

}
