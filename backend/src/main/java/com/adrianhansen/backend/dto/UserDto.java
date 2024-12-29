package com.adrianhansen.backend.dto;

import com.adrianhansen.backend.entitiy.AcademicTitle;

public record UserDto(String firstName,
                      String lastName,
                      AcademicTitle academicTitle) {
}
