package com.adrianhansen.backend.dto;

import java.util.Date;
import java.util.List;

public record ProjectDetailsDto(UserDto user, String name, String description, String repoLink, Date creationDate,
                                List<SkillDto> skills) {

}
