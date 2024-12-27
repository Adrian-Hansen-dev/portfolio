package com.adrianhansen.backend.repository;

import com.adrianhansen.backend.entitiy.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
