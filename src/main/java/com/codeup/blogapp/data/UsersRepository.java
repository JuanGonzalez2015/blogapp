package com.codeup.blogapp.data;

import com.codeup.blogapp.data.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);
}
