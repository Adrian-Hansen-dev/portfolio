package com.adrianhansen.backend.mapper;

import com.adrianhansen.backend.dto.SkillDto;
import com.adrianhansen.backend.entitiy.Skill;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class SkillDtoMapper implements Function<Skill, SkillDto> {

    @Override
    public SkillDto apply(Skill skill) {
        return new SkillDto(skill.getName());
    }
}
