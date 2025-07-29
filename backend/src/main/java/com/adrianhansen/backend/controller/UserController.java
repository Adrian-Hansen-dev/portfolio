package com.adrianhansen.backend.controller;

import com.adrianhansen.backend.dto.ProjectDto;
import com.adrianhansen.backend.dto.UserDetailsDto;
import com.adrianhansen.backend.service.ProjectService;
import com.adrianhansen.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    @GetMapping("/{userId}/projects")
    public Page<ProjectDto> getProjectsByUserId(
            @PathVariable int userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "true") boolean ascending
    ){
        Sort sort = ascending ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return projectService.getProjectsByUserId(userId, pageable);
    }
}
