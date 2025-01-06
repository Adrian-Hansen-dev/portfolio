package com.adrianhansen.backend.mapper;

import com.adrianhansen.backend.dto.UserDetailsDto;
import com.adrianhansen.backend.entitiy.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserDetailsDtoMapper implements Function<User, UserDetailsDto> {

    private final ProjectDtoMapper projectDtoMapper;
    private final SkillDtoMapper skillDtoMapper;

    public UserDetailsDtoMapper(ProjectDtoMapper projectDtoMapper, SkillDtoMapper skillDtoMapper) {
        this.projectDtoMapper = projectDtoMapper;
        this.skillDtoMapper = skillDtoMapper;
    }

    @Override
    public UserDetailsDto apply(User user) {
        return new UserDetailsDto(
                user.getFirstName(),
                user.getLastName(),
                user.getAcademicTitle(),
                user.getBirthdate(),
                user.getProjects().stream().map(projectDtoMapper).toList(),
                user.getSkills().stream().map(skillDtoMapper).toList());
    }
}