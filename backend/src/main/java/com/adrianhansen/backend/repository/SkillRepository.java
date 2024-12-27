package com.adrianhansen.backend.repository;

import com.adrianhansen.backend.entitiy.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
}
