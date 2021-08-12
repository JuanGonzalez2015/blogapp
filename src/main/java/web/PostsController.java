package web;

import com.codeup.blogapp.data.Post;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostsController {
    @GetMapping
    private List<Post> getPost() {
        return new ArrayList<>() {{
            add(new Post(1L, "A new Post", "this is a brilliant post. 10/10"));
            add(new Post(2L, "A newer Post", "this is a brilliant post. 10/10"));
            add(new Post(3L, "The new Post", "this is a brilliant post. 10/10"));
        }};
    }

    @GetMapping("{id}")
    private Post getPostById(@PathVariable Long id) {
        if (id == 1) {
            return new Post(1L, "A new Post", "this is a brilliant post. 10/10");
        } else {
            return null;
        }
    }
}
