package com.adrianhansen.backend.dto;

import java.util.List;

public record ProjectDto(
        String name,
        List<SkillDto> skills) {

}
