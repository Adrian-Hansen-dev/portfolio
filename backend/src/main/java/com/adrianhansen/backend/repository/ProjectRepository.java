package com.adrianhansen.backend.repository;

import com.adrianhansen.backend.entitiy.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProjectRepository extends JpaRepository<Project, Integer> {
    Page<Project> findAllByUserId(Integer userId, Pageable pageable);

}
