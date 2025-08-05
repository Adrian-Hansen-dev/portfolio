package com.adrianhansen.backend.controller;

import com.adrianhansen.backend.dto.UserDetailsDto;
import com.adrianhansen.backend.service.ProjectService;
import com.adrianhansen.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    UserService userService;
    ProjectService projectService;

    @Autowired
    public UserController(UserService userService, ProjectService projectService) {
        this.userService = userService;
        this.projectService = projectService;
    }

    @GetMapping("/{userId}")
    public UserDetailsDto getUserById(@PathVariable int userId ){
        return userService.findById(userId);
    }
}
