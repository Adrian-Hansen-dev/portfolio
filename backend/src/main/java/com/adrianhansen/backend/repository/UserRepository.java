package com.adrianhansen.backend.repository;

import com.adrianhansen.backend.entitiy.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
