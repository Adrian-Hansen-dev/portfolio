package com.adrianhansen.backend.mapper;

import com.adrianhansen.backend.dto.UserDetailsDto;
import com.adrianhansen.backend.entitiy.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserDetailsDtoMapper implements Function<User, UserDetailsDto> {

    private final SkillDtoMapper skillDtoMapper;

    public UserDetailsDtoMapper(SkillDtoMapper skillDtoMapper) {
        this.skillDtoMapper = skillDtoMapper;
    }

    @Override
    public UserDetailsDto apply(User user) {
        return new UserDetailsDto(
                user.getFirstName(),
                user.getLastName(),
                user.getProfession(),
                user.getDescription(),
                user.getGithubLink(),
                user.getLinkedInLink(),
                user.getSkills().stream().map(skillDtoMapper).toList());
    }
}