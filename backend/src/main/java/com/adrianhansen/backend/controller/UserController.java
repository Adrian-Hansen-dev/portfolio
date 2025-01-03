package com.adrianhansen.backend.controller;

import com.adrianhansen.backend.dto.UserDetailsDto;
import com.adrianhansen.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDetailsDto> getAllUsers(){
        return userService.findAll();
    }

    @GetMapping("/{userId}")
    public UserDetailsDto getUserById(@PathVariable int userId ){
        return userService.findById(userId);
    }
}
