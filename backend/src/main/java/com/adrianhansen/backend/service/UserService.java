package com.adrianhansen.backend.service;

import com.adrianhansen.backend.entitiy.User;
import com.adrianhansen.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User findById(int id){
        Optional<User> result = userRepository.findById(id);

        User user;
        if (result.isPresent()) {
            user = result.get();
        }
        else {
            throw new RuntimeException("Did not find Employee with id: " + id);
        }
        return user;
    }
}
