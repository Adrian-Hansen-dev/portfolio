package com.adrianhansen.backend.dto;

import com.adrianhansen.backend.entitiy.AcademicTitle;

import java.util.Date;
import java.util.List;

public record UserDetailsDto(String firstName,
                             String lastName,
                             AcademicTitle academicTitle,
                             Date birthdate,
                             List<ProjectDto> projects,
                             List<SkillDto> skills) {

}
