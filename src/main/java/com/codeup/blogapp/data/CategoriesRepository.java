package com.codeup.blogapp.data;

import org.springframework.data.jpa.repository;

public interface CategoriesRepository extends JpaRepository<Category, Long> {
}
