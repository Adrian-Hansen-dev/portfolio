package com.adrianhansen.backend.service;

import com.adrianhansen.backend.dto.SkillDto;
import com.adrianhansen.backend.mapper.SkillDtoMapper;
import com.adrianhansen.backend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    private final SkillRepository skillRepository;
    private final SkillDtoMapper skillDtoMapper;

    @Autowired
    public SkillService(SkillRepository skillRepository, SkillDtoMapper skillDtoMapper) {
        this.skillRepository = skillRepository;
        this.skillDtoMapper = skillDtoMapper;
    }

    public List<SkillDto> findAll(){
        return skillRepository.findAll().stream().map(skillDtoMapper).toList();
    }
}
