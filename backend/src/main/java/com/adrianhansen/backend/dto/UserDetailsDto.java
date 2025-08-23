package com.adrianhansen.backend.dto;
import java.util.List;

public record UserDetailsDto(String firstName,
                             String lastName,
                             String profession,
                             String description,
                             String githubLink,
                             String linkedInLink,
                             List<SkillDto> skills) {

}
