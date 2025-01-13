package com.adrianhansen.backend.dto;

import java.util.Date;
import java.util.List;

public record ProjectDto(
        String name,
        Date creationDate,
        byte[] objectFile,
        List<SkillDto> skills) {

}
