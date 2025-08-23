package com.adrianhansen.backend.mapper;
import com.adrianhansen.backend.dto.UserDto;
import com.adrianhansen.backend.entitiy.User;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UserDtoMapper implements Function<User, UserDto>{
    @Override
    public UserDto apply(User user) {
        return new UserDto(user.getFirstName(), user.getLastName());
    }
}
