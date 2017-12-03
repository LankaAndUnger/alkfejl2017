package hu.elte.alkfejl.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.service.SessionService;
import hu.elte.alkfejl.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private SessionService sessionService;

    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    public ResponseEntity<User> login(@RequestBody User user) {
        User currentUser = userService.getUserByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (currentUser != null) {
            sessionService.setCurrentUser(currentUser);
            return ResponseEntity.ok(currentUser);
        }
        else {
            return ResponseEntity.status(403).build();
        }
    }

    @RequestMapping(value = "auth/logout", method = RequestMethod.GET)
    public ResponseEntity logout() {
        sessionService.setCurrentUser(null);
        return ResponseEntity.ok(false);
    }

    @Role(User.Role.GUEST)
    @RequestMapping(value = "/auth/registration", method = RequestMethod.POST)
    public String registration(@RequestBody User user) {
        return userService.createUser(user);
    }

    @RequestMapping(value = "auth/user", method = RequestMethod.GET)
    public ResponseEntity getUser() {
        if (sessionService.getCurrentUser() == null) {
            return ResponseEntity.ok(false);
        } else {
            return ResponseEntity.ok(sessionService.getCurrentUser());
        }
    }
}
