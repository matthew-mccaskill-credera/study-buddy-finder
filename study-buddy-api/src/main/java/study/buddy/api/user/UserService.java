package study.buddy.api.user;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    public Optional<User> findUser(Long userId) {
        return userRepository.findById(userId);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
