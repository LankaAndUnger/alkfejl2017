package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.service.SessionService;
import hu.elte.alkfejl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Role({User.Role.GUEST, User.Role.ADMIN, User.Role.USER})
    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    public ResponseEntity<User> login(@RequestBody User user) {
        User currentUser = userService.getUserByUsername(user.getUsername());
        if (currentUser != null && passwordEncoder.matches(user.getPassword(),
                currentUser.getPassword())) {
            sessionService.setCurrentUser(currentUser);
            return ResponseEntity.ok(currentUser);
        }
        else {
            return ResponseEntity.status(403).build();
        }
    }

    @Role(User.Role.GUEST)
    @RequestMapping(value = "/auth/registration", method = RequestMethod.POST)
    public String registration(@RequestParam String username, @RequestParam String pwd,
                               @RequestParam String firstName, @RequestParam String lastName, @RequestParam String address,
                               @RequestParam String phoneNumber, @RequestParam String email, @RequestParam String pwdAgain) {

        if (userService.createUser(username, firstName, lastName, pwd, pwdAgain, email, phoneNumber, address)) {
            return "successfully create a new user";
        }
        else {
            return "bad datas";
        }
    }

}
