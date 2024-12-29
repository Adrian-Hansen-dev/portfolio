package com.adrianhansen.backend.service;

import com.adrianhansen.backend.dto.UserDetailsDto;
import com.adrianhansen.backend.mapper.UserDetailsDtoMapper;
import com.adrianhansen.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserDetailsDtoMapper userDtoMapper;

    @Autowired
    public UserService(UserRepository userRepository, UserDetailsDtoMapper userDtoMapper) {
        this.userRepository = userRepository;
        this.userDtoMapper = userDtoMapper;
    }

    public List<UserDetailsDto> findAll() {
        return userRepository.findAll()
                .stream()
                .map(userDtoMapper)
                .toList();
    }

    public UserDetailsDto findById(int id) {
        return userRepository.findById(id)
                .map(userDtoMapper)
                .orElseThrow(() -> new RuntimeException(
                        "Did not find Employee with id: " + id));
    }
}
