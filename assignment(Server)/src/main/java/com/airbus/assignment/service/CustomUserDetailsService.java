package com.airbus.assignment.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    //Using fake user> we can use database here for authentication
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(username.equals("test@gmail.com")){
            return new User("test@gmail.com", "test123", new ArrayList<>());
        }
        else{
            throw new UsernameNotFoundException("User Not Found !!");
        }
    }
}
