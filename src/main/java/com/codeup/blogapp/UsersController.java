package com.codeup.blogapp;

import com.codeup.blogapp.data.Post;
import com.codeup.blogapp.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class UsersController {
    @GetMapping
    private List<User> getUser() {
        return new ArrayList<>() {{
            add(new User(1, "root1", "coder1@coder.com", "password1"));
            add(new User(2, "root2", "coder2@coder.com", "password2"));
            add(new User(3, "root3", "coder3@coder.com", "password3"));
        }};
    }

    @GetMapping("/{id}")
    private User getUserById(@PathVariable Long id) {
        if (id == 1) {
            return new User(1, "root1", "coder1@coder.com","password1");
        } else {
            return null;
        }
    }

    @PostMapping
    private void createUser(@RequestBody User newUser) {
        System.out.println(newUser.getUsername());
        System.out.println(newUser.getPassword());
    }

    @PutMapping("/{id}")
    private void updateUser(@PathVariable Long id, @RequestBody User user){
        System.out.println(user.getUsername());
        System.out.println();
    }
    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable Long id){
        System.out.println(id);
    }


}

