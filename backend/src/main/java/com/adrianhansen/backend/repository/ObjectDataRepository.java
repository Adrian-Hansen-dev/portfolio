package com.adrianhansen.backend.repository;

import com.adrianhansen.backend.entitiy.ObjectData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ObjectDataRepository extends JpaRepository<ObjectData, Integer> {
}
